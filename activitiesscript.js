document.addEventListener('DOMContentLoaded', function() {
    // Hotel data
    const hotels = [
        {
            name: "Camping",
            location: "Mapanuepe Lake, San Marcelino, Zambales, Philippines",
            image: "https://campsites.ph/uploads/images/campsite-87-mapanuepe-lake-a71f2f9c061208a3b3e938e4936f61cd.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Snorkeling",
            location: "Great Barrier Reef, Queensland Mainland, Australia",
            image: "https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/FVOKZJCBJD64HJO6ARQ3UO6UIQ.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Skydiving",
            location: "Franz Josef Glacier Base 63 Cron Street, Franz Josef / Waiau 7886, New Zealand",
            image: "https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-6910619/img-1713642025-5804-1245155-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Island Hopping",
            location: "Boracay Island, Malay, Aklan, Philippines",
            image: "https://info.myboracayguide.com/wp-content/uploads/2023/12/jpg.jpeg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Ziplining",
            location: "Sky Adventures, Provincia de Alajuela, La Fortuna, 21007, Costa Rica",
            image: "https://www.travelexcellence.com/wp-content/uploads/2020/09/cr-canopytour.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Surfing",
            location: "Siargao Island, Surigao del Norte, Philippines",
            image: "https://generalluna.gov.ph/wp-content/uploads/2022/10/cloud-9-surfing-siargao-island.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Hiking",
            location: "Holland Park, Elsham Road, London, UK",
            image: "https://cdn2.veltra.com/ptr/20191118031430_295952610_13423_0.jpg?imwidth=550&impolicy=custom",
            buttonText: "BOOK NOW"
        },
        {
            name: "Skiing",
            location: "Tignes Station de Ski, Tignes, France",
            image: "https://www.planetware.com/wpimages/2018/11/france-ski-resorts-meribel-skier-on-mountain-top.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "ATV Riding",
            location: "Your Brother Mayon ATV Tours, Brgy, Legazpi City, Albay, Philippines",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6d/3a/01/2018-mayon-lava-taril.jpg?w=1200&h=-1&s=1",
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

// autoscroll

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
