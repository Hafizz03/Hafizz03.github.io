/**
 * Removes the maintenance overlay and displays the home section with animation
 */
function removeMaintenanceOverlay() {
    const overlay = document.querySelector('.maintenance-overlay');
    const homeSection = document.getElementById('home');

    // Fade out overlay
    gsap.to(overlay, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            overlay.style.display = 'none';
            homeSection.style.display = 'block';

            // Animate in hero content
            gsap.from(".hero-content", {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power3.out"
            });
        }
    });
}
