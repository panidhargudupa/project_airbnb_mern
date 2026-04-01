(() => {
    'use strict'

    // Bootstrap form validation
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
   
    // Category active state
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'))
            item.classList.add('active')
        })
    })

    // Tax toggle for index page
    const taxToggle = document.getElementById('taxToggle')
    const taxInfoElements = document.querySelectorAll('.tax-info')
    
    if (taxToggle) {
        // Start with GST hidden
        taxInfoElements.forEach(el => el.style.display = 'none')
        
        taxToggle.addEventListener('click', function(e) {
            e.preventDefault()
            console.log('Toggle clicked!')
            this.classList.toggle('on')
            
            if (this.classList.contains('on')) {
                // Show GST
                taxInfoElements.forEach(el => el.style.display = 'inline')
                console.log('18% GST shown')
            } else {
                // Hide GST
                taxInfoElements.forEach(el => el.style.display = 'none')
                console.log('18% GST hidden')
            }
        })
    }

})()