/**
 * Removes the maintenance overlay and displays the home section
 */
function removeMaintenanceOverlay() {
    document.querySelector('.maintenance-overlay').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}