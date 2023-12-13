document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    function hideAllSections() {
        sections.forEach(function (section) {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    function handleNavLinkClick(link) {
        const targetSectionId = link.getAttribute('href').substring(1);
        hideAllSections();
        showSection(targetSectionId);

        navLinks.forEach(function (otherLink) {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            handleNavLinkClick(link);
        });
    });

    // Simulate a click on the "Home" link to load the section on page load
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="#home"]');
    if (homeLink) {
        handleNavLinkClick(homeLink);
    }
});
