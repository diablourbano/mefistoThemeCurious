// Sidebar functionality
document.querySelectorAll('.sidebar-toggle').forEach((sidebarToggle) => {
    sidebarToggle.addEventListener('click', (e) => {
        document.body.classList.toggle('sidebar--opened');
        e.preventDefault();
    });
});
const siteOverlay = document.querySelector('.sidebar-overlay');
if (siteOverlay) {
    siteOverlay.addEventListener('click', (e) => {
        document.body.classList.remove('sidebar--opened');
        e.preventDefault();
    });
}
