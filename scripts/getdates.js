
// 1. Set the current year in the footer
document.addEventListener('DOMContentLoaded', function () {
    // Get current year
    const currentYear = new Date().getFullYear();

    // Update the first paragraph in footer with copyright year
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = `©${currentYear} 😍Colebay Kaps Kamanda Sierra Leone😍`;
    }

    // 2. Set the last modified date in the footer's second paragraph
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});


