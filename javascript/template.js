// Function to include HTML content
function load_tag_content(tagName, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(tagName).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// Load header and footer
load_tag_content('header', '../components/header.html');
load_tag_content('footer', '../components/footer.html');
