const boxContent = {
  box1: [
    "Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna",
    "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko",
  ],
  box2: ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"],
  box3: [
    "Stinger", "Spectre", "Bucky", "Judge", "Bulldog", "Guardian", "Phantom", "Vandal", "Marshal",
    "Operator", "Ares", "Odin",
  ],
};

const agents = [
  "All Agents", "Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett",
  "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko",
];

const secondaryWeapons = ["All Secondary Weapons", "Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"];

const primaryWeapons = [
  "All Primary Weapons", "Stinger", "Spectre", "Bucky", "Judge", "Bulldog", "Guardian", "Phantom",
  "Vandal", "Marshal", "Operator", "Ares", "Odin",
];

function generateRandom() {
  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

  const agentFilter = document.getElementById("agentFilter").value;
  const secondaryFilter = document.getElementById("secondaryFilter").value;
  const primaryFilter = document.getElementById("primaryFilter").value;

  const filteredBox1 = filterOptions(boxContent.box1, agentFilter);
  const filteredBox2 = filterOptions(boxContent.box2, secondaryFilter);
  const filteredBox3 = filterOptions(boxContent.box3, primaryFilter);

  document.getElementById("box1").innerText = getRandomItem(filteredBox1);
  document.getElementById("box2").innerText = getRandomItem(filteredBox2);
  document.getElementById("box3").innerText = getRandomItem(filteredBox3);
}

function filterOptions(options, filter) {
  return filter === "All" ? options : options.filter(option => option !== filter);
}

function populateFilterDropdowns() {
  const createOption = (selectElement, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    selectElement.appendChild(option);
  };

  agents.forEach(agent => createOption(document.getElementById("agentFilter"), agent));
  secondaryWeapons.forEach(secondary => createOption(document.getElementById("secondaryFilter"), secondary));
  primaryWeapons.forEach(primary => createOption(document.getElementById("primaryFilter"), primary));
}

// Populate filter dropdowns on page load
populateFilterDropdowns();

function toggleFilter() {
  var filterContainer = document.querySelector('.filter-container');
  filterContainer.classList.toggle('show-filter');
}


// Add click event listeners to boxes
document.getElementById("box1").addEventListener("click", generateRandom);
document.getElementById("box2").addEventListener("click", generateRandom);
document.getElementById("box3").addEventListener("click", generateRandom);

// Mobile 

  document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('touchstart', function(e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });
  });

