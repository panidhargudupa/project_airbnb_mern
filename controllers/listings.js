// controllers/listings.js which is the listing controller that contains the logic for handling the various routes related to listings in the application. Each method in this controller corresponds to a specific route and handles the necessary database operations and rendering of views for that route. The methods include:

const Listing = require('../models/listing');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


// INDEX
module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index",{ allListings });
}

// NEW
module.exports.new = async (req,res)=>{ // Only logged in users can access the form to create a new listing
    res.render("listings/new");
}

// SHOW
module.exports.show = async(req,res)=>{
    const listing = await Listing.findById(req.params.id)
    // Populate the reviews and owner fields to display the associated data in the listing details page
        .populate({path: "reviews",populate: { path: "author" } }) // Populate the reviews and their authors(nested population )
        .populate("owner"); 
    if(!listing) {
          req.flash("error", "Listing not found!");
          return res.redirect("/listings");
          
    }
    
    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload", "/upload/w_300"); // Modify the image URL to include the width parameter for resizing the image to a width of 300 pixels when displaying it in the listing details page, allowing for optimized loading and display of the image on the frontend.

    res.render("listings/show",{ listing, originalImage });
}

// EDIT
module.exports.edit = async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    res.render("listings/edit",{ listing });
}

// CREATE
module.exports.create = async(req,res)=> { // Only logged in users can create a new listing, and the listing data is validated using the validateListing middleware
    
   let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location, // Use the location field from the listing form to perform forward geocoding and obtain the corresponding geographic coordinates for the listing's location, allowing for accurate mapping and display of the listing's location on a map in the application.
    limit: 1,
    })
    .send()
    
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // Set the owner of the listing to the currently logged in user
    newListing.image = { url, filename }; // Set the image field of the listing to the URL and filename of the uploaded image, which is handled by multer and stored in Cloudinary based on the configuration in cloudconfig.js
    newListing.geometry = response.body.features[0].geometry; // Set the geometry field of the listing to the geographic coordinates obtained from the forward geocoding response, allowing for accurate mapping and display of the listing's location on a map in the application.
    let savedListing = await newListing.save();

    if(!newListing) {
          req.flash("error", "Failed to create listing!");  
          res.redirect("/listings/new");
    }     
    req.flash("success", "Listing created successfully!");
    res.redirect("/listings");
}

// UPDATE
module.exports.update = async(req,res)=>{
    let listing = await Listing.findByIdAndUpdate(req.params.id,{...req.body.listing});

    if(typeof req.file !== "undefined") { // Check if a new image file is uploaded when updating the listing, and if so, update the image field of the listing with the new URL and filename of the uploaded image, allowing users to change the image associated with their listing when they edit it.
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename }; // Update the image field of the listing with the new URL and filename of the uploaded image when updating a listing, allowing users to change the image associated with their listing.
    await listing.save();
    }
     req.flash("success", "Updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
}

// DELETE
module.exports.delete = async(req,res)=>{
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}