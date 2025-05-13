
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


// dropdown menu

document.addEventListener('DOMContentLoaded', function () {
    const hotels = [
          {
            name: "Camping",
            location: "zabales",
            budget: "low",
            image: "https://campsites.ph/uploads/images/campsite-87-mapanuepe-lake-a71f2f9c061208a3b3e938e4936f61cd.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Snorkeling",
            location: "australia",
            budget: "high",
            image: "https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/FVOKZJCBJD64HJO6ARQ3UO6UIQ.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Skydiving",
            location: "new zealand",
            budjet: "high",
            image: "https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-6910619/img-1713642025-5804-1245155-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Island Hopping",
            location: "philippines",
            budjet: "medium",
            image: "https://info.myboracayguide.com/wp-content/uploads/2023/12/jpg.jpeg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Ziplining",
            location: "costa rica",
            budjet: "medium",
            image: "https://www.travelexcellence.com/wp-content/uploads/2020/09/cr-canopytour.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Surfing",
            location: "philippines",
            budget: "medium",
            image: "https://generalluna.gov.ph/wp-content/uploads/2022/10/cloud-9-surfing-siargao-island.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "Hiking",
            location: "united kingdom",
             budget: "medium",
            image: "https://cdn2.veltra.com/ptr/20191118031430_295952610_13423_0.jpg?imwidth=550&impolicy=custom",
            buttonText: "BOOK NOW"
        },
        {
            name: "Skiing",
            location: "france",
             budget: "high",
            image: "https://www.planetware.com/wpimages/2018/11/france-ski-resorts-meribel-skier-on-mountain-top.jpg",
            buttonText: "BOOK NOW"
        },
        {
            name: "ATV Riding",
            location: "philippines",
             budget: "medium",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6d/3a/01/2018-mayon-lava-taril.jpg?w=1200&h=-1&s=1",
            buttonText: "BOOK NOW"
        }
        // Add more activities here
    ];

    const hotelsGrid = document.querySelector('.hotels-grid');
    const locationSelect = document.getElementById('location');
    const budgetSelect = document.getElementById('budget');

    // Function to display hotels
    function displayHotels(filteredHotels) {
        hotelsGrid.innerHTML = ''; // Clear current cards
        if (filteredHotels.length === 0) {
            hotelsGrid.innerHTML = '<p style="color: white;">No matching activities found.</p>';
            return;
        }
        filteredHotels.forEach(hotel => {
            const card = document.createElement('div');
            card.className = 'hotel-card';
            card.innerHTML = `
                <div class="hotel-image" style="background-image: url('${hotel.image}')"></div>
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <p>${hotel.description}</p>
                    <p><strong>Location:</strong> ${hotel.location}</p>
                    <a href="#" class="book-btn">Book Now</a>
                </div>
            `;
            hotelsGrid.appendChild(card);
        });
    }

    // Initial display
    displayHotels(hotels);

    // Filtering function
    function filterHotels() {
        const selectedLocation = locationSelect.value.toLowerCase();
        const selectedBudget = budgetSelect.value;

        const filtered = hotels.filter(hotel => {
            const locationMatch = !selectedLocation || hotel.location.includes(selectedLocation);
            const budgetMatch = !selectedBudget || hotel.budget === selectedBudget;
            return locationMatch && budgetMatch;
        });

        displayHotels(filtered);
    }

    // Event listeners
    locationSelect.addEventListener('change', filterHotels);
    budgetSelect.addEventListener('change', filterHotels);
});
