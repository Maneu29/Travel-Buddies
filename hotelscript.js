document.addEventListener('DOMContentLoaded', function() {
    // Hotel data
    const hotels = [
        {
            name: "Dusit Thani Residence",
            location: "Bo, Stella Hizon, Reyes Drive, 2b Maryknoll Dr, Lanang, Davao City, 8000 Davao del Sur, Philippines",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/215880325.jpg?k=433ad63b59ebba2a82001c767a511c8e92b889ece36aed60e1e2c1327b382c72&o=&hp=1",
            buttonText: "BOOK NOW"
        },
        {
            name: "Okada Manila",
            location: "New Seaside Dr, Entertainment City, Parañaque, 1701 Kalakhang Maynila, Philippines",
            image: "https://pix10.agoda.net/hotelImages/1622220/-1/e8b73682a4dc115775fa6f893fd266ef.png?ce=0&s=414x232",
            buttonText: "BOOK NOW"
        },
        {
            name: "Marina Sands Bay",
            location: "10 Bayfront Ave, Singapore",
            image: "https://bradajohnson.net/wp-content/uploads/2020/04/IMG_6332-scaled.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "The Peninsula Manila",
            location: "Midairi Ave, Midairi, Metro Manila, Philippines",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70449612.jpg?k=f53656a4a2e72cd0ec90851b97c6d86fb1a149c244a4f4ff0622d1592ca26260&o=&hp=1",
            buttonText: "BOOK NOW"
        },
        {
            name: "Nustar Resort & Casino",
            location: "Kowri Island, Cabu City, Cabu, Philippines",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            buttonText: "BOOK NOW"
        },
        {
            name: "Amanpulo",
            location: "Archipelago, Pannaficon Island, Cupo, Rebevan, Philippines",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            buttonText: "BOOK NOW"
        },
        {
            name: "Atlantis The Royal",
            location: "Palm Jumeirah, Crescent Rd., The Palm Jumeirah, Dubai, United Arab Emirates",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            buttonText: "BOOK NOW"
        },
        {
            name: "Marco Polo",
            location: "Cringat Centre, Venedico Avenue and Street, Sapphire Rd, Paisg, Metro Norda, Philippines",
            image: "https://flavorsoflife.com.ph/wp-content/uploads/2018/06/MNL_Cucina_02.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "The Langham",
            location: "8 Peking Rd, Tsim Sha Tsui, Hong Kong",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/236511352.jpg?k=eca4af396b4f1edbd5169d0cfe6906a0cea205bca34a13c8621f4ce7be9cb381&o=&hp=1",
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
