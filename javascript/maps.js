const mapsList = [
  {
    name: "Sunset",
    description:
      "A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.",
    image: "../assets/images/maps/sunset/minimap.avif",
    images: [
      "../assets/images/maps/sunset/img1.avif",
      "../assets/images/maps/sunset/img2.avif",
      "../assets/images/maps/sunset/img3.avif",
    ],
  },
  {
    name: "Lotus",
    description:
      "A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.",
    image: "../assets/images/maps/lotus/minimap.avif",
    images: [
      "../assets/images/maps/lotus/img1.avif",
      "../assets/images/maps/lotus/img2.avif",
      "../assets/images/maps/lotus/img3.avif",
    ],
  },
  {
    name: "Pearl",
    description:
      "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.",
    image: "../assets/images/maps/pearl/minimap.avif",
    images: [
      "../assets/images/maps/pearl/img1.avif",
      "../assets/images/maps/pearl/img2.avif",
      "../assets/images/maps/pearl/img3.avif",
    ],
  },
  {
    name: "Fracture",
    description:
      "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
    image: "../assets/images/maps/fracture/minimap.avif",
    images: [
      "../assets/images/maps/fracture/img1.avif",
      "../assets/images/maps/fracture/img2.avif",
      "../assets/images/maps/fracture/img3.avif",
    ],
  },
  {
    name: "Breeze",
    description:
      "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
    image: "../assets/images/maps/breeze/minimap.avif",
    images: [
      "../assets/images/maps/breeze/img1.avif",
      "../assets/images/maps/breeze/img2.avif",
      "../assets/images/maps/breeze/img3.avif",
    ],
  },
  {
    name: "Icebox",
    description:
      "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
    image: "../assets/images/maps/icebox/minimap.avif",
    images: [
      "../assets/images/maps/icebox/img1.avif",
      "../assets/images/maps/icebox/img2.avif",
      "../assets/images/maps/icebox/img3.avif",
    ],
  },
];

const mapsContainer = document.getElementById("maps-container");

// Function to render maps
function renderMaps() {
  mapsList.forEach((map) => {
    // Create the map card
    const mapCard = document.createElement("div");
    mapCard.classList.add("map-section");
    mapCard.classList.add("map-card");

    // Main image section with title and description
    mapCard.innerHTML = `
      <div class="map-details">
        <h2>${map.name}</h2>
        <p>${map.description}</p>
      </div>
      <div class="map-image-container">
        <img id="${map.name}-main-image" src="${map.image}" alt="${map.name} Map">
      </div>
      <div class="thumbnails" id="${map.name}-thumbnails"></div>
    `;

    // Append the card to the container
    mapsContainer.appendChild(mapCard);

    // Get the thumbnails container
    const thumbnailsContainer = mapCard.querySelector(
      `#${map.name}-thumbnails`
    );

    // Add the minimap as the first thumbnail
    const minimapElement = document.createElement("img");
    minimapElement.src = map.image; // Use minimap as the first thumbnail
    minimapElement.alt = `${map.name} Minimap`;
    minimapElement.classList.add("active"); // Highlight the initially selected thumbnail
    minimapElement.onclick = () => {
      // Change the main image to minimap
      const mainImage = document.getElementById(`${map.name}-main-image`);
      mainImage.src = map.image;
      updateActiveThumbnail(minimapElement);
    };
    thumbnailsContainer.appendChild(minimapElement); // Add minimap as the first thumbnail

    // Generate other thumbnails dynamically
    map.images.forEach((thumb, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = thumb;
      imgElement.alt = `${map.name} Image ${index + 1}`;
      imgElement.onclick = () => {
        // Change the main image to the clicked thumbnail
        const mainImage = document.getElementById(`${map.name}-main-image`);
        mainImage.src = thumb;
        updateActiveThumbnail(imgElement);
      };
      thumbnailsContainer.appendChild(imgElement); // Add thumbnail to the container
    });
  });
}

// Function to handle active thumbnail styling
function updateActiveThumbnail(selectedThumbnail) {
  const thumbnails = selectedThumbnail.parentElement.querySelectorAll("img");
  thumbnails.forEach((thumb) => thumb.classList.remove("active")); // Remove active class
  selectedThumbnail.classList.add("active"); // Add active class to the clicked one
}

// Call render function
renderMaps();
