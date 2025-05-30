document.addEventListener('DOMContentLoaded', function() {
    // Hotel data
    const hotels = [
        {
            name: "Ayala Land Premier",
            location: "Azuela Cove, J.P. Laurel Avenue Corner R. Castillo ST, KM 7, Lanang, Brgy. Vicente Hizon, Davao City, Philippines",
            image: "https://lh6.googleusercontent.com/proxy/eqnwdi6gfLMFphsAYYLXanwsZvGCPqOLicJwOFPm6XGP4y6jiGPiS7Z3MILoZaYGhhTreY-1X1zicwJRIIqmKgQOL0SPlVLqoMv10nLD_ayvR2Lgujl9CGR4WN7M775Tny_CSJCEVMctFsW2p5psQpKF0qYY",
            buttonText: "BOOK NOW"
        },
        {
            name: "The Ventura",
            location: "240 E 86th St New York, NY 10028, USA",
            image: "https://g5-assets-cld-res.cloudinary.com/image/upload/x_327,y_0,h_1208,w_1209,c_crop/q_auto,f_auto,c_fill,g_center,h_600,w_600/v1715374770/g5/g5-c-5m1162j5c-rose-associates/g5-cl-1ln7ydmueh-rose-associates-new-york-ny/uploads/PHD_Living_Dining_eel6tj.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Prime Avant",
            location: "26th Street corner 3rd Avenue, Crescent Park West, Bonifacio Global City, Taguig, Manila",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610911045.jpg?k=46daa15f5df96ce054cf05316c3365e06bf1f8d8213d586f0fd865719f370e08&o=&hp=1",
            buttonText: "BOOK NOW"
        },
        {
            name: "Mila",
            location: "201 N Garland Ct, Chicago, IL 60601, USA",
            image: "https://images1.apartments.com/i2/YfgNTjK0tgJ39vOUq5CinAG7FEPShkFMuCUUw8CAuUM/117/mila-chicago-il-primary-photo.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Hmlet Yoyoga Uehara",
            location: "3-1-16 Uehara, Shibuya-ku, Tokyo, Japan",
            image: "https://cdn.shortpixel.ai/client/to_webp,w_1500,q_lossless,ret_wait/https://s3.ap-northeast-1.amazonaws.com/ehousing-dev/properties/cAAVGmDncb-1724394431150.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Ream YoHo",
            location: "Yoho Resort Rd, Sihanoukville, Sihanoukville, Cambodia",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520416654.jpg?k=679dc6a8b2dafbfcf4b9b33ffd2ea31d33f92844623042c327a783c788c3270d&o=&hp=1",
            buttonText: "BOOK NOW"
        },
        {
            name: "Blueground",
            location: "Holland Park, Elsham Road, London, UK",
            image: "https://photos2.theblueground.com/736/social/LON.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "The Port Douglas",
            location: "9 Cowrie St, 4877 Port Douglas, Australia",
            image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/641634319.jpg?k=31db56ca2f2fa0a20d59498c1e8581b4cf9787392af754302e73f54a74e4c4b4&o=",
            buttonText: "BOOK NOW"
        },
        {
            name: "The Center",
            location: "150 South Bridge Road 15-02 Fook Hai Building,  Singapore",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-21854687/original/d6ec62b7-b537-4a4d-b112-7ea79dfe097a.jpeg",
            buttonText: "BOOK NOW"
        }
    ];

    // Populate hotels
    const hotelsGrid = document.querySelector('.hotels-grid');
    
    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        hotelCard.innerHTML = `
            <div class="hotel-image" style="background-image: url('${hotel.image}')"></div>
            <div class="hotel-info">
                <h3>${hotel.name}</h3>
                <p>${hotel.location}</p>
                <a href="#" class="book-btn">${hotel.buttonText}</a>
            </div>
        `;
        
        hotelsGrid.appendChild(hotelCard);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, phone, message });
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Filter functionality
    const locationFilter = document.getElementById('location');
    const budgetFilter = document.getElementById('budget');
    
    function filterHotels() {
        const locationValue = locationFilter.value;
        const budgetValue = budgetFilter.value;
        
        // In a real app, you would filter the hotels array based on these values
        // For now, we'll just log the filter values
        console.log('Filters:', { location: locationValue, budget: budgetValue });
    }
    
    locationFilter.addEventListener('change', filterHotels);
    budgetFilter.addEventListener('change', filterHotels);
});

// Add this to your existing script.js

// Enhanced dropdown interactions
const filterGroups = document.querySelectorAll('.filter-group');

filterGroups.forEach(group => {
    const select = group.querySelector('select');
    const label = group.querySelector('label');
    
    // Add focus/blur effects
    select.addEventListener('focus', function() {
        group.style.transform = 'translateY(-3px)';
        label.style.color = '#ffffff';
        label.style.fontWeight = 'bold';
    });
    
    select.addEventListener('blur', function() {
        group.style.transform = 'translateY(0)';
        label.style.color = 'white';
        label.style.fontWeight = 'normal';
    });
    
    // Add change animation
    select.addEventListener('change', function() {
        if (this.value) {
            group.style.animation = 'none';
            void group.offsetWidth; // Trigger reflow
            group.style.animation = 'pulse 0.5s ease';
            
            // Briefly highlight the changed filter
            label.style.color = '#ffffff';
            setTimeout(() => {
                if (document.activeElement !== select) {
                    label.style.color = 'white';
                }
            }, 1000);
        }
    });
});

// Add keyboard navigation to dropdowns
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusedSelect = document.querySelector('select:focus');
        if (focusedSelect) {
            focusedSelect.parentElement.style.transform = 'scale(1.02)';
            focusedSelect.parentElement.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.3)';
        }
    }
});

// autoscoll

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolled down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
