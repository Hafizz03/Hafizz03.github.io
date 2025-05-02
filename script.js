// Show main content after clicking 'Kembali'
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
