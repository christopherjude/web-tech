const gunsList = [
    { 
        name: "CLASSIC", 
        type: "SIDEARMS",
        description: "Lightweight and versatile, the default weapon for all is an instant classic.",
        image: "../assets/images/arsenal/classic.avif" 
    },
    { 
        name: "SHORTY", 
        type: "SIDEARMS",
        description: "Surprise your enemy up close for max effectiveness.",
        image: "../assets/images/arsenal/shorty.avif" 
    },
    { 
        name: "FRENZY", 
        type: "SIDEARMS",
        description: "Up close, hold the trigger. From afar...try something else.",
        image: "../assets/images/arsenal/frenzy.avif" 
    },
    { 
        name: "GHOST", 
        type: "SIDEARMS",
        description: "Sleek, silenced, and proficient at any range.",
        image: "../assets/images/arsenal/ghost.avif" 
    },
    { 
        name: "SHERIFF", 
        type: "SIDEARMS",
        description: "A modern six-shooter for the headshot searcher.",
        image: "../assets/images/arsenal/sheriff.avif" 
    },
    { 
        name: "STINGER", 
        type: "SMGS",
        description: "They'll know it's over when the Stinger splash hits.",
        image: "../assets/images/arsenal/stinger.avif" 
    },
    { 
        name: "SPECTRE", 
        type: "SMGS",
        description: "Balanced and versatile, perfect for run-and-gun.",
        image: "../assets/images/arsenal/spectre.avif" 
    },
    { 
        name: "BUCKY", 
        type: "SHOTGUNS",
        description: "Close quarters chaos with alternate fire for range.",
        image: "../assets/images/arsenal/bucky.avif" 
    },
    { 
        name: "JUDGE", 
        type: "SHOTGUNS",
        description: "Fully automatic shotgun that dominates up close.",
        image: "../assets/images/arsenal/judge.avif" 
    },
    { 
        name: "BULLDOG", 
        type: "RIFLES",
        description: "Low-cost automatic rifle with burst-fire mode.",
        image: "../assets/images/arsenal/bulldog.avif" 
    },
    { 
        name: "GUARDIAN", 
        type: "RIFLES",
        description: "Powerful semi-automatic rifle for precision shots.",
        image: "../assets/images/arsenal/guardian.avif" 
    },
    { 
        name: "PHANTOM", 
        type: "RIFLES",
        description: "Silent and deadly, perfect for mid-range battles.",
        image: "../assets/images/arsenal/phantom.avif" 
    },
    { 
        name: "VANDAL", 
        type: "RIFLES",
        description: "High damage and precision, deadly at all ranges.",
        image: "../assets/images/arsenal/vandal.avif" 
    },
    { 
        name: "MARSHAL", 
        type: "SNIPER RIFLES",
        description: "Quick-scope sniper for agile long-range attacks.",
        image: "../assets/images/arsenal/marshal.avif" 
    },
    { 
        name: "OPERATOR", 
        type: "SNIPER RIFLES",
        description: "The ultimate long-range weapon with one-shot kills.",
        image: "../assets/images/arsenal/operator.avif" 
    },
    { 
        name: "ARES", 
        type: "HEAVY",
        description: "High bullet volume for suppressive fire and crowd control.",
        image: "../assets/images/arsenal/ares.avif" 
    },
    { 
        name: "ODIN", 
        type: "HEAVY",
        description: "High-rate LMG perfect for holding angles with sheer firepower.",
        image: "../assets/images/arsenal/odin.avif" 
    },
    { 
        name: "MELEE", 
        type: "MELEE",
        description: "Close combat precision for quick eliminations.",
        image: "../assets/images/arsenal/melee.avif" 
    }
];


const gunsGrid = document.getElementById("guns-grid");

gunsList.forEach(gun => {
    const card = document.createElement("div");
    card.classList.add("gun-card");

    card.innerHTML = `
        <div class="gun-image-container">
            <img src="${gun.image}" alt="${gun.name}">
        </div>
        <h3>${gun.name}.</h3>
        <p class="gun-type">TYPES // <span>${gun.type}</span></p>
        <p class="gun-description">${gun.description}</p>
    `;

    gunsGrid.appendChild(card);
});
