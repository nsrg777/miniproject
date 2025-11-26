// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            navLinks.style.display = 'none';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navigation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !navLinks.classList.contains('active')) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar .btn-primary');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // In a real app, this would redirect to a search results page
        alert(`Searching for: ${searchTerm}`);
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
});

// Allow search on Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    };
});

// Sample data for food items and reviews
const foodItemsData = {
    'pizza': {
        id: 'pizza',
        name: 'Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.7,
        price: '₹399',
        description: 'Classic Italian pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil on our signature thin crust.',
        category: 'Italian',
        prepTime: '20-25 mins',
        reviews: [
            {
                id: 1,
                userName: 'Rahul Sharma',
                userInitial: 'RS',
                rating: 5,
                date: '2 days ago',
                text: 'Absolutely delicious! The crust was perfectly crispy and the flavors were amazing. Will definitely order again!',
                helpful: 12
            },
            {
                id: 2,
                userName: 'Priya Patel',
                userInitial: 'PP',
                rating: 4,
                date: '1 week ago',
                text: 'Great pizza, though I wish there was a bit more cheese. The crust was perfect though!',
                helpful: 5
            }
        ]
    },
    'burger': {
        id: 'burger',
        name: 'Classic Cheeseburger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.5,
        price: '₹249',
        description: 'Juicy beef patty with cheddar cheese, fresh lettuce, tomatoes, pickles, and our special sauce on a toasted brioche bun.',
        category: 'American',
        prepTime: '15-20 mins',
        reviews: [
            {
                id: 1,
                userName: 'Amit Singh',
                userInitial: 'AS',
                rating: 5,
                date: '3 days ago',
                text: 'One of the best burgers I\'ve had! The patty was perfectly cooked and the sauce was amazing.',
                helpful: 8
            },
            {
                id: 2,
                userName: 'Neha Gupta',
                userInitial: 'NG',
                rating: 4,
                date: '1 week ago',
                text: 'Really good burger, though a bit pricey. The fries that came with it were perfectly crispy!',
                helpful: 4
            }
        ]
    },
    'biryani': {
        id: 'biryani',
        name: 'Hyderabadi Chicken Biryani',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.8,
        price: '₹299',
        description: 'Authentic Hyderabadi dum biryani made with basmati rice, tender chicken pieces, and a blend of aromatic spices, slow-cooked to perfection.',
        category: 'Indian',
        prepTime: '25-30 mins',
        reviews: [
            {
                id: 1,
                userName: 'Vikram Joshi',
                userInitial: 'VJ',
                rating: 5,
                date: '1 day ago',
                text: 'Tastes just like the biryani I had in Hyderabad! The flavors were perfectly balanced and the chicken was so tender.',
                helpful: 15
            },
            {
                id: 2,
                userName: 'Ananya Reddy',
                userInitial: 'AR',
                rating: 5,
                date: '4 days ago',
                text: 'Absolutely loved it! The biryani was packed with flavors and the portion size was generous. Will definitely order again!',
                helpful: 9
            }
        ]
    }
};

// Sample data for restaurants
const restaurantsData = {
    'mojo-pizza': {
        id: 'mojo-pizza',
        name: 'MOJO Pizza',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.5,
        cuisine: 'Pizza, Italian, Fast Food',
        deliveryTime: '30-40 mins',
        priceForTwo: '₹400 for two',
        discount: '30% OFF',
        description: 'Serving authentic Italian pizzas with the finest ingredients and traditional recipes. Our wood-fired pizzas are made fresh to order with homemade dough and signature sauces.',
        address: '123 Food Street, Mumbai, 400001',
        timing: '11:00 AM - 11:00 PM',
        reviews: [
            {
                id: 1,
                userName: 'Rahul Verma',
                userInitial: 'RV',
                rating: 5,
                date: '2 days ago',
                text: 'Best pizza in town! The crust is always perfect and the toppings are fresh. The delivery was quick too!',
                helpful: 8
            },
            {
                id: 2,
                userName: 'Priya Nair',
                userInitial: 'PN',
                rating: 4,
                date: '1 week ago',
                text: 'Great pizza place! Tried their margherita and it was delicious. The only reason for 4 stars is that it was a bit too oily for my taste.',
                helpful: 5
            },
            {
                id: 3,
                userName: 'Amit Desai',
                userInitial: 'AD',
                rating: 5,
                date: '2 weeks ago',
                text: 'Consistently good quality and taste. Their garlic bread is a must-try!',
                helpful: 12
            }
        ]
    },
    'box8': {
        id: 'box8',
        name: 'Box8',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.3,
        cuisine: 'North Indian, Chinese, Biryani',
        deliveryTime: '25-35 mins',
        priceForTwo: '₹450 for two',
        discount: '20% OFF',
        description: 'Serving delicious and hygienic meals with a modern twist on Indian cuisine. Our biryanis and curries are made with authentic spices and fresh ingredients.',
        address: '456 Main Road, Mumbai, 400002',
        timing: '11:30 AM - 11:30 PM',
        reviews: [
            {
                id: 1,
                userName: 'Neha Kapoor',
                userInitial: 'NK',
                rating: 4,
                date: '3 days ago',
                text: 'Good quality food with generous portions. The biryani was flavorful and the chicken was tender.',
                helpful: 6
            },
            {
                id: 2,
                userName: 'Raj Malhotra',
                userInitial: 'RM',
                rating: 5,
                date: '1 week ago',
                text: 'One of my go-to places for biryani. The flavors are always on point and the packaging is excellent.',
                helpful: 10
            }
        ]
    },
    'biryani-blues': {
        id: 'biryani-blues',
        name: 'Biryani Blues',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop&auto=format&q=80',
        rating: 4.6,
        cuisine: 'Hyderabadi, Biryani, Mughlai',
        deliveryTime: '35-45 mins',
        priceForTwo: '₹500 for two',
        discount: '15% OFF',
        description: 'Specializing in authentic Hyderabadi and Awadhi cuisine, we bring you the royal flavors of the Nizams. Our biryanis are cooked on dum with the finest ingredients.',
        address: '789 Food Court, Mumbai, 400003',
        timing: '12:00 PM - 11:00 PM',
        reviews: [
            {
                id: 1,
                userName: 'Anil Kumar',
                userInitial: 'AK',
                rating: 5,
                date: '1 day ago',
                text: 'The best biryani in Mumbai! The flavors are amazing and the meat is always tender. A must-try for biryani lovers!',
                helpful: 15
            },
            {
                id: 2,
                userName: 'Meera Iyer',
                userInitial: 'MI',
                rating: 4,
                date: '5 days ago',
                text: 'Great taste and good quantity. The biryani was flavorful, though I wish they would add more meat pieces.',
                helpful: 7
            },
            {
                id: 3,
                userName: 'Vikram Singh',
                userInitial: 'VS',
                rating: 5,
                date: '2 weeks ago',
                text: 'Authentic Hyderabadi taste! The biryani is cooked to perfection with the right amount of spices. The raita that comes with it is also very good.',
                helpful: 12
            }
        ]
    }
};

// Sample data for offers
const offersData = {
    'offer1': {
        id: 'offer1',
        title: '50% OFF on First Order',
        code: 'EAT50',
        description: 'Get a whooping 50% off on your first order above ₹199. Experience our delicious food at half the price!',
        image: 'https://images.unsplash.com/photo-1504674900247-0877039348bf?w=800&h=400&fit=crop&auto=format&q=80',
        terms: 'Valid on first order only. Max discount ₹200. Valid till 31st December 2023.',
        reviews: [
            {
                id: 1,
                userName: 'Sneha M',
                userInitial: 'SM',
                rating: 5,
                date: '2 days ago',
                text: 'Great deal! Got my favorite pizza at half price. The food was delicious and the delivery was quick.',
                helpful: 8
            },
            {
                id: 2,
                userName: 'Rahul K',
                userInitial: 'RK',
                rating: 4,
                date: '1 week ago',
                text: 'Good offer, but the maximum discount cap was a bit low considering the minimum order value.',
                helpful: 5
            }
        ]
    },
    'offer2': {
        id: 'offer2',
        title: 'Free Dessert on Orders Above ₹300',
        code: 'SWEET300',
        description: 'Order food worth ₹300 or more and get a free dessert of your choice. Perfect way to end your meal on a sweet note!',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704c?w=800&h=400&fit=crop&auto=format&q=80',
        terms: 'Valid on orders above ₹300. One dessert per order. Valid on selected restaurants only.',
        reviews: [
            {
                id: 1,
                userName: 'Priya S',
                userInitial: 'PS',
                rating: 5,
                date: '3 days ago',
                text: 'Loved the chocolate brownie I got for free! The portion was generous and it was absolutely delicious.',
                helpful: 12
            },
            {
                id: 2,
                userName: 'Amit P',
                userInitial: 'AP',
                rating: 4,
                date: '1 week ago',
                text: 'Good offer, but the dessert options were limited. Would be great to have more variety.',
                helpful: 4
            }
        ]
    },
    'offer3': {
        id: 'offer3',
        title: 'Buy 1 Get 1 Free on Pizzas',
        code: 'BOGO',
        description: 'Buy any medium or large pizza and get another one of equal or lesser value absolutely free! Perfect for pizza nights with friends and family.',
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&h=400&fit=crop&auto=format&q=80',
        terms: 'Valid on all medium and large pizzas. Not valid with other offers. Valid on weekdays from 4 PM to 7 PM.',
        reviews: [
            {
                id: 1,
                userName: 'Rahul M',
                userInitial: 'RM',
                rating: 5,
                date: '1 day ago',
                text: 'Amazing deal! Got two large pizzas for the price of one. The pizzas were fresh and delicious.',
                helpful: 15
            },
            {
                id: 2,
                userName: 'Neha G',
                userInitial: 'NG',
                rating: 4,
                date: '4 days ago',
                text: 'Great offer, but the restaurant was quite busy during happy hours. Had to wait a bit longer for the order.',
                helpful: 7
            },
            {
                id: 3,
                userName: 'Vikram S',
                userInitial: 'VS',
                rating: 5,
                date: '1 week ago',
                text: 'Perfect for pizza parties! The quality was consistent and the deal is unbeatable.',
                helpful: 10
            }
        ]
    }
};

// Modal functionality
const modal = document.getElementById('detailModal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

// Function to open modal with content
function openModal(content) {
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to close modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking the close button
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Function to render food details
function renderFoodDetails(foodId) {
    const food = foodItemsData[foodId];
    if (!food) return;
    
    const reviewsHTML = food.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer">
                    <div class="reviewer-avatar">${review.userInitial}</div>
                    <div class="reviewer-info">
                        <h4>${review.userName}</h4>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStarRating(review.rating)}
                </div>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-helpful">${review.helpful} people found this helpful</div>
        </div>
    `).join('');
    
    const content = `
        <div class="food-detail-header">
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <div class="food-info">
                <h2>${food.name}</h2>
                <div class="food-meta">
                    <span class="rating-badge">
                        <i class="fas fa-star"></i> ${food.rating}
                    </span>
                    <span>${food.category}</span>
                    <span>${food.prepTime}</span>
                    <span>${food.price}</span>
                </div>
                <p class="food-description">${food.description}</p>
                <button class="btn btn-primary" style="margin-top: 15px;">Add to Cart - ${food.price}</button>
            </div>
        </div>
        
        <div class="reviews-section">
            <h3>Customer Reviews (${food.reviews.length})</h3>
            ${reviewsHTML}
        </div>
    `;
    
    openModal(content);
}

// Function to render restaurant details
function renderRestaurantDetails(restaurantId) {
    const restaurant = restaurantsData[restaurantId];
    if (!restaurant) return;
    
    const reviewsHTML = restaurant.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer">
                    <div class="reviewer-avatar">${review.userInitial}</div>
                    <div class="reviewer-info">
                        <h4>${review.userName}</h4>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStarRating(review.rating)}
                </div>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-helpful">${review.helpful} people found this helpful</div>
        </div>
    `).join('');
    
    const content = `
        <div class="food-detail-header">
            <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
            <div class="food-info">
                <h2>${restaurant.name}</h2>
                <div class="food-meta">
                    <span class="rating-badge">
                        <i class="fas fa-star"></i> ${restaurant.rating}
                    </span>
                    <span>${restaurant.cuisine}</span>
                    <span>${restaurant.deliveryTime}</span>
                    <span>${restaurant.priceForTwo}</span>
                </div>
                <div class="restaurant-details" style="margin: 15px 0;">
                    <p><strong>Address:</strong> ${restaurant.address}</p>
                    <p><strong>Timing:</strong> ${restaurant.timing}</p>
                    <p><strong>Offer:</strong> ${restaurant.discount} on all orders</p>
                </div>
                <p class="food-description">${restaurant.description}</p>
                <div style="display: flex; gap: 15px; margin-top: 20px;">
                    <button class="btn btn-primary">View Menu</button>
                    <button class="btn btn-outline" style="color: var(--black); border-color: var(--black);">
                        <i class="fas fa-directions"></i> Direction
                    </button>
                </div>
            </div>
        </div>
        
        <div class="reviews-section">
            <h3>Customer Reviews (${restaurant.reviews.length})</h3>
            ${reviewsHTML}
        </div>
    `;
    
    openModal(content);
}

// Function to render offer details
function renderOfferDetails(offerId) {
    const offer = offersData[offerId];
    if (!offer) return;
    
    const reviewsHTML = offer.reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="reviewer">
                    <div class="reviewer-avatar">${review.userInitial}</div>
                    <div class="reviewer-info">
                        <h4>${review.userName}</h4>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStarRating(review.rating)}
                </div>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-helpful">${review.helpful} people found this helpful</div>
        </div>
    `).join('');
    
    const content = `
        <div class="food-detail-header">
            <img src="${offer.image}" alt="${offer.title}" loading="lazy">
            <div class="food-info">
                <h2>${offer.title}</h2>
                <div class="food-meta">
                    <span class="offer-tag">Use Code: ${offer.code}</span>
                </div>
                <p class="food-description" style="margin: 15px 0;">${offer.description}</p>
                <p><strong>Terms & Conditions:</strong> ${offer.terms}</p>
                <button class="btn btn-primary" style="margin: 20px 0;">Apply Offer</button>
            </div>
        </div>
        
        <div class="reviews-section">
            <h3>Customer Reviews (${offer.reviews.length})</h3>
            ${reviewsHTML}
        </div>
    `;
    
    openModal(content);
}

// Add click handlers to food items
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const foodId = this.getAttribute('href').replace('#', '');
        if (foodId && foodItemsData[foodId]) {
            renderFoodDetails(foodId);
        }
    });
});

// Add click handlers to restaurant cards
document.querySelectorAll('.restaurant-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        const restaurantId = this.getAttribute('data-restaurant-id');
        if (restaurantId && restaurantsData[restaurantId]) {
            renderRestaurantDetails(restaurantId);
        }
    });
});

// Add click handlers to offer cards
document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('click', function() {
        const offerId = this.getAttribute('data-offer-id');
        if (offerId && offersData[offerId]) {
            renderOfferDetails(offerId);
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Close mobile menu on larger screens
    function handleResize() {
        if (window.innerWidth > 992) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Run once on load
    
    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.category-card, .restaurant-card, .app-btn');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.category-card, .restaurant-card, .app-btn').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
