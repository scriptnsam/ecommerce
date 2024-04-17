// Function to fetch and insert navigation content
function loadNavContent() {
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navContainer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching navigation content:', error));
}

// Load navigation content when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadNavContent);