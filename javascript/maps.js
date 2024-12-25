const mapsList = [
    {
      name: "Sunset",
      description: "A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.",
      image: "../assets/images/maps/sunset/minimap.avif"
    },
    {
      name: "Lotus",
      description: "A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.",
      image: "../assets/images/maps/lotus/minimap.avif"
    },
    {
      name: "Pearl",
      description: "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.",
      image: "../assets/images/maps/pearl/minimap.avif"
    },
    {
      name: "Fracture",
      description: "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
      image: "../assets/images/maps/fracture/minimap.avif"
    },
    {
      name: "Breeze",
      description: "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
      image: "../assets/images/maps/breeze/minimap.avif"
    },
    {
      name: "Icebox",
      description: "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
      image: "../assets/images/maps/icebox/minimap.avif"
    }
  ];
  
  
  const mapsContainer = document.getElementById("maps-container");
  
  // Function to render maps
  function renderMaps() {
    mapsList.forEach(map => {
      const mapCard = document.createElement("div");
      mapCard.classList.add("map-card");
  
      mapCard.innerHTML = `
        <img src="${map.image}" alt="${map.name} Map">
        <div class="map-details">
          <h2>${map.name}</h2>
          <p>${map.description}</p>
        </div>
      `;
  
      mapsContainer.appendChild(mapCard);
    });
  }
  
  // Call render function
  renderMaps();
  