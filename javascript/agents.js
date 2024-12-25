// Agent List Data
const agentsList = [
    { 
        name: "BRIMSTONE", 
        description: "Tactical commander with area control abilities.",
        image: "../assets/images/agents/brimstone.avif" 
    },
    { 
        name: "PHOENIX", 
        description: "Flame-wielding duelist with self-healing powers.",
        image: "../assets/images/agents/phoenix.avif" 
    },
    { 
        name: "SAGE", 
        description: "Support healer with resurrection abilities.",
        image: "../assets/images/agents/sage.avif" 
    },
    { 
        name: "SOVA", 
        description: "Recon specialist with a bow that reveals enemy positions.",
        image: "../assets/images/agents/sova.avif" 
    },
    { 
        name: "VIPER", 
        description: "Toxic controller using poisonous gas to control the battlefield.",
        image: "../assets/images/agents/viper.avif" 
    },
    { 
        name: "CYPHER", 
        description: "Surveillance expert with cameras and traps.",
        image: "../assets/images/agents/cypher.avif" 
    },
    { 
        name: "REYNA", 
        description: "Self-sustaining duelist that thrives on frags.",
        image: "../assets/images/agents/reyna.avif" 
    },
    { 
        name: "RAZE", 
        description: "Explosive duelist with high damage grenades and rockets.",
        image: "../assets/images/agents/raze.avif" 
    },
    { 
        name: "BREACH", 
        description: "Initiator with seismic blasts to disorient opponents.",
        image: "../assets/images/agents/breach.avif" 
    },
    { 
        name: "OMEN", 
        description: "Mysterious controller that manipulates shadows and teleports.",
        image: "../assets/images/agents/omen.avif" 
    },
    { 
        name: "JETT", 
        description: "Agile duelist with quick movements and wind-based abilities.",
        image: "../assets/images/agents/jett.avif" 
    },
    { 
        name: "KILLJOY", 
        description: "Tech-savvy sentinel using bots and turrets to lock down areas.",
        image: "../assets/images/agents/killjoy.avif" 
    },
    { 
        name: "SKYE", 
        description: "Nature-based initiator with healing and scouting abilities.",
        image: "../assets/images/agents/skye.avif" 
    },
    { 
        name: "YORU", 
        description: "Duelist with deceptive abilities like teleporting and creating fake footsteps.",
        image: "../assets/images/agents/yoru.avif" 
    },
    { 
        name: "ASTRA", 
        description: "Controller manipulating the battlefield with cosmic abilities.",
        image: "../assets/images/agents/astra.avif" 
    },
    { 
        name: "KAY/O", 
        description: "Machine initiator that suppresses enemies' abilities.",
        image: "../assets/images/agents/kayo.avif" 
    },
    { 
        name: "CHAMBER", 
        description: "Sentinel with teleportation and lethal weapons.",
        image: "../assets/images/agents/chamber.avif" 
    },
    { 
        name: "NEON", 
        description: "Speed-focused duelist with electric abilities.",
        image: "../assets/images/agents/neon.avif" 
    },
    { 
        name: "FADE", 
        description: "Initiator who uses fear-based abilities to reveal enemies.",
        image: "../assets/images/agents/fade.avif" 
    },
    { 
        name: "HARBOR", 
        description: "Controller wielding water-based abilities to defend allies.",
        image: "../assets/images/agents/harbor.avif" 
    },
    { 
        name: "GEKKO", 
        description: "Initiator commanding creatures to disrupt and support the team.",
        image: "../assets/images/agents/gekko.avif" 
    },
    { 
        name: "DEADLOCK", 
        description: "Sentinel with nanowire technology to trap and immobilize enemies.",
        image: "../assets/images/agents/deadlock.avif" 
    },
    { 
        name: "VYSE", 
        description: "Water-based controller who bends tides to shape the battlefield.",
        image: "../assets/images/agents/vyse.avif" 
    },
    { 
        name: "ISO", 
        description: "Duelist with energy manipulation for precise and deadly engagements.",
        image: "../assets/images/agents/iso.avif" 
    },
    { 
        name: "CLOVE", 
        description: "Mischievous controller with life and death-altering abilities.",
        image: "../assets/images/agents/clove.avif" 
    }  
];


const agentsGrid = document.getElementById("agents-grid");

agentsList.forEach(agent => {
    const card = document.createElement("div");
    card.classList.add("agent-card");

    card.innerHTML = `
        <img src="${agent.image}" alt="${agent.name}">
        <h3>${agent.name}</h3>
        
    `;

    agentsGrid.appendChild(card);
});
