// public/js/maps.js

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates,
    zoom: 12
});

// new mapboxgl.Marker({ color: "red" })
//     .setLngLat(coordinates)
//     .addTo(map);

    
const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.location}</h4><p>Exact Location Provided After Booking!</p>`)
    )
    .addTo(map);    