const isLocal = window.location.hostname === "localhost" || window.location.protocol === "file:";
const basePath = isLocal ? "." : "/web-tech"; 

function load_tag_content(tagName, filePath) {
    const fullPath = `${basePath}/${filePath}`;
    fetch(fullPath + '?v=' + Date.now()) 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fullPath}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(tagName).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

load_tag_content('header', 'components/header.html');
load_tag_content('footer', 'components/footer.html');