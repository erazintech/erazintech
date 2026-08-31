// Review data - store the full review information
const reviewsData = {
    1: {
        name: 'Mr Shipanga Wilbard',
        image: '/images/reviews/1.jpg',
        rating: 4,
        comment: 'I am thoroughly impressed with the building plan and graphic designs provided by Eraz Intech. The attention to detial and innovative solutions are evident in every element. the building plan offers a thoughtful and functional layout, while the graphic designs are visually appealing and effectively communicate the intended message. I am confident that these professional services will greatly enhance our projects. Highly recommended.'
    },
    2: {
        name: 'Emilie Endjala',
        image: '/images/reviews/2.jpg',
        rating: 5,
        comment: 'I had a fantastic experience with Erazintech. Their customer service was top-notch, friendly, responsive, and super proffesional throughout the entire process. The graphic design work they delivered was creative, high-quality and exactly what I needed. They really took the time to understand my vision and brought it to life better than I expected. Highly recommend their services to anyone looking for reliable and talented designers.'
    },
    3: {
        name: 'Mr Filemon Shalonda',
        image: '/images/reviews/3.jpg',
        rating: 5,
        comment: 'The best and most affordable quality designs i have come across. The level of proffesionalism, creativity and attention to detial is truly understanding. This is a clear 5-star service, without hesitation, a solid 10/10. I am genuinely impressed by the consistency and excellence demonstrated and I highly recommend their work to anyone seeking exceptional design solutions.'
    },
    4: {
        name: 'Becelecia Cashloan',
        image: '/images/reviews/4.jpg',
        rating: 5,
        comment: 'We are delighted to give ErazIntech a five-star rating for the expectional work and creativity they poured into our new logo design. The final product has exceeded our expectations, and our entire team is overjoyed. We extend our sincerest gratitude to the managment and team, and we highly recommend their services.'
    },
    5: {
        name: 'Ms. Saima Ilonga',
        image: '/images/reviews/5.jpg',
        rating: 4,
        comment: 'I am leaving a glowing four-star review for ErazIntech! They provided me with truly expectional architectural design services. From the initial consultation all the way to the final deliverables, their attention to detial, creativity, and professionalism were second to none. The team was responsive, collaborative and went above and beyond to ensure that my vision was brought to life.'
    },
    6: {
        name: 'ForOne Trading CC',
        image: '/images/reviews/6.jpg',
        rating: 4,
        comment: 'I Highly recommend ErazIntech for logo design services. They truly know how to follow instructions and have a great ability to turn complexity into simplicity. Their attention to detial is impressive, and working with them was effortless. I did not even need any revisions the first concept they provided was more than enough to work with. Overall, a smooth, affordable and professional experience. '
    }
};

// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty-star">☆</span>';
        }
    }
    return stars;
}

// Function to open modal
function openModal(reviewId) {
    const review = reviewsData[reviewId];
    const modal = document.getElementById('reviewModal');
    
    // Set modal content
    document.getElementById('modalImage').src = review.image;
    document.getElementById('modalName').textContent = review.name;
    document.getElementById('modalRating').innerHTML = generateStarRating(review.rating);
    document.getElementById('modalComment').textContent = review.comment;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('reviewModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reviewId = this.closest('.review-card').getAttribute('data-review');
            openModal(reviewId);
        });
    });

    // Close modal when close button is clicked
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    const modal = document.getElementById('reviewModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});