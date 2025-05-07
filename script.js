function removeMaintenanceOverlay() {
    document.querySelector('.maintenance-overlay').style.display = 'none';
    document.querySelector('.hero').style.display = 'block';

    // Animate hero section
    gsap.from(".hero-content", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
}

// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("toggle");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Typing effect
const typedText = ["Seorang graduan baharu", "Suka membina sistem", "Minat dalam rangkaian & IT"];
let index = 0;
let charIndex = 0;
const typingElement = document.createElement("h2");
typingElement.className = "typing-text";
document.querySelector(".hero-content").insertBefore(typingElement, document.querySelector(".hero-content p"));

function type() {
    if (charIndex < typedText[index].length) {
        typingElement.textContent += typedText[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typedText[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % typedText.length;
        setTimeout(type, 500);
    }
}

type();

// Dark/Light Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.className = "theme-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Particle background
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 1 }
    }
});

// Modal functionality
function showContactForm() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeContactForm() {
    document.getElementById('contactModal').style.display = 'none';
}

// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Lightbox Image">
            <span class="close-lightbox">×</span>
        </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}

// Enhance carousel functionality with animations and transitions
function initializeCarousel(carousel) {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.add('hidden'));
        images[index].classList.remove('hidden');
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    images.forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });

    showImage(currentIndex);
}

// Initialize carousels in product cards
document.querySelectorAll('.product-card .carousel').forEach(carousel => {
    initializeCarousel(carousel);
});

// Modal functionality
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalCarouselImages = document.getElementById('modalCarouselImages');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalBuyLink = document.getElementById('modalBuyLink');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Prevent modal from opening if clicking the "Beli Sekarang" button
        if (e.target.closest('a')) return;

        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        const description = this.getAttribute('data-description');
        const images = JSON.parse(this.getAttribute('data-images'));
        const buyLink = this.querySelector('a').href;

        modalTitle.textContent = name;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modalBuyLink.href = buyLink;

        // Populate modal carousel
        modalCarouselImages.innerHTML = '';
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `${name} ${index + 1}`;
            img.classList.add('w-full', 'h-64', 'object-cover', index === 0 ? '' : 'hidden');
            modalCarouselImages.appendChild(img);
        });

        modal.style.display = 'flex';

        // Initialize carousel in modal
        initializeCarousel(modal.querySelector('.carousel'));
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
