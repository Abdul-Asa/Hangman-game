var myDisplay = document.querySelector("#display");
var userInput = document.querySelectorAll(".userIn");
var myComment = document.querySelector("#comment");
var tryA = document.querySelector("#tryAgain");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var nextButton = document.querySelector("#nextQ");
var exitButton = document.querySelector("#bye");
var buttonPad = document.querySelector(".buttons");
var playerLife = document.querySelector("#liveBar");

container2.style.display = "none";
container3.style.display = "none";

var countries = [
  { name: "FRANCE", hint: "Famous for the Eiffel Tower and croissants" },
  {
    name: "NIGERIA",
    hint: "Most populous African country, known for Nollywood",
  },
  { name: "JAPAN", hint: "Land of the rising sun, famous for sushi and anime" },
  {
    name: "BRAZIL",
    hint: "Largest South American country, home to Amazon rainforest",
  },
  { name: "CANADA", hint: "Known for maple syrup and politeness" },
  {
    name: "MEXICO",
    hint: "Famous for tacos, tequila, and ancient Mayan ruins",
  },
  { name: "GERMANY", hint: "Known for beer, cars, and Oktoberfest" },
  { name: "AUSTRALIA", hint: "Home to kangaroos and the Great Barrier Reef" },
  { name: "EGYPT", hint: "Land of pyramids and the Nile River" },
  { name: "CHINA", hint: "Most populous country, built the Great Wall" },
  { name: "INDIA", hint: "Birthplace of yoga and home to the Taj Mahal" },
  { name: "RUSSIA", hint: "Largest country in the world, famous for vodka" },
  { name: "ITALY", hint: "Boot-shaped country, birthplace of pizza and pasta" },
  { name: "SPAIN", hint: "Famous for flamenco dancing and bullfighting" },
  { name: "ARGENTINA", hint: "Home of tango and famous for beef" },
  {
    name: "THAILAND",
    hint: "Known as the Land of Smiles, famous for pad thai",
  },
  { name: "SWEDEN", hint: "Scandinavian country, home of IKEA and ABBA" },
  { name: "NORWAY", hint: "Land of fjords and the Northern Lights" },
  {
    name: "PORTUGAL",
    hint: "Famous for port wine and explorers like Vasco da Gama",
  },
  { name: "GREECE", hint: "Birthplace of democracy and the Olympics" },
  {
    name: "TURKEY",
    hint: "Bridges Europe and Asia, famous for Turkish delight",
  },
  { name: "POLAND", hint: "Famous for pierogi and birthplace of Chopin" },
  {
    name: "IRELAND",
    hint: "Emerald Isle, famous for leprechauns and Guinness",
  },
  { name: "SCOTLAND", hint: "Home of kilts, bagpipes, and Loch Ness" },
  { name: "ENGLAND", hint: "Home of Big Ben, tea, and the Royal Family" },
  { name: "WALES", hint: "Known for its dragons and rugby" },
  { name: "SWITZERLAND", hint: "Famous for chocolate, watches, and the Alps" },
  { name: "AUSTRIA", hint: "Mozart's birthplace, known for classical music" },
  {
    name: "BELGIUM",
    hint: "Famous for waffles, chocolate, and EU headquarters",
  },
  { name: "NETHERLANDS", hint: "Land of tulips, windmills, and bicycles" },
  { name: "DENMARK", hint: "Home of LEGO and Viking heritage" },
  { name: "FINLAND", hint: "Land of a thousand lakes and saunas" },
  { name: "ICELAND", hint: "Land of fire and ice, famous for geysers" },
  { name: "PERU", hint: "Home to Machu Picchu and the Inca civilization" },
  { name: "CHILE", hint: "Long, narrow country famous for wine" },
  { name: "COLOMBIA", hint: "Famous for coffee and emeralds" },
  {
    name: "VENEZUELA",
    hint: "Home to Angel Falls, the world's highest waterfall",
  },
  {
    name: "ECUADOR",
    hint: "Named after the equator, home to Galapagos Islands",
  },
  {
    name: "BOLIVIA",
    hint: "Landlocked country with the world's largest salt flat",
  },
  { name: "PARAGUAY", hint: "Landlocked South American country" },
  {
    name: "URUGUAY",
    hint: "Small South American country, won first FIFA World Cup",
  },
  { name: "SOUTH AFRICA", hint: "Rainbow Nation with 11 official languages" },
  { name: "MOROCCO", hint: "Gateway to Africa, famous for tagine and markets" },
  { name: "TUNISIA", hint: "North African country where Arab Spring began" },
  { name: "ALGERIA", hint: "Largest African country by area" },
  { name: "LIBYA", hint: "North African country rich in oil" },
  { name: "SUDAN", hint: "Country where the Blue and White Nile meet" },
  { name: "ETHIOPIA", hint: "Birthplace of coffee, never fully colonized" },
  { name: "KENYA", hint: "Famous for safari and Maasai warriors" },
  { name: "TANZANIA", hint: "Home to Mount Kilimanjaro and Serengeti" },
  { name: "UGANDA", hint: "Pearl of Africa, source of the Nile" },
  { name: "GHANA", hint: "First African country to gain independence" },
  { name: "SENEGAL", hint: "Westernmost country in Africa" },
  { name: "MALI", hint: "Ancient empire famous for Timbuktu" },
  { name: "BURKINA FASO", hint: "Land of upright people in West Africa" },
  { name: "IVORY COAST", hint: "World's largest cocoa producer" },
  { name: "CAMEROON", hint: "Africa in miniature, diverse landscapes" },
  { name: "ZAMBIA", hint: "Landlocked country with Victoria Falls" },
  { name: "ZIMBABWE", hint: "Home to Great Zimbabwe ancient ruins" },
  { name: "BOTSWANA", hint: "Diamond-rich country with the Kalahari Desert" },
  { name: "NAMIBIA", hint: "Desert country with ancient sand dunes" },
  { name: "MADAGASCAR", hint: "Large island off Africa, home to lemurs" },
  { name: "MAURITIUS", hint: "Island paradise in the Indian Ocean" },
  { name: "SEYCHELLES", hint: "115 tropical islands in the Indian Ocean" },
  { name: "SOUTH KOREA", hint: "Home of K-pop, kimchi, and Samsung" },
  { name: "NORTH KOREA", hint: "Isolated country on Korean Peninsula" },
  { name: "VIETNAM", hint: "S-shaped country famous for pho and coffee" },
  { name: "CAMBODIA", hint: "Home to Angkor Wat temple complex" },
  { name: "LAOS", hint: "Landlocked Southeast Asian country" },
  { name: "MYANMAR", hint: "Former Burma, home to golden pagodas" },
  { name: "MALAYSIA", hint: "Twin Towers country, mix of cultures" },
  { name: "SINGAPORE", hint: "City-state known for cleanliness and food" },
  {
    name: "INDONESIA",
    hint: "World's largest archipelago with 17,000 islands",
  },
  { name: "PHILIPPINES", hint: "7,000 islands in Southeast Asia" },
  { name: "BRUNEI", hint: "Small oil-rich sultanate on Borneo" },
  { name: "BANGLADESH", hint: "River delta country, former East Pakistan" },
  { name: "PAKISTAN", hint: "Land of the pure, home to K2 mountain" },
  { name: "AFGHANISTAN", hint: "Landlocked country, crossroads of Asia" },
  { name: "IRAN", hint: "Ancient Persia, famous for carpets and poetry" },
  { name: "IRAQ", hint: "Ancient Mesopotamia, cradle of civilization" },
  { name: "SYRIA", hint: "Ancient country on the Mediterranean" },
  { name: "LEBANON", hint: "Cedar country, Paris of the Middle East" },
  { name: "JORDAN", hint: "Home to Petra, the rose-red city" },
  { name: "PALESTINE", hint: "🍉🍉🍉" },
  { name: "SAUDI ARABIA", hint: "Birthplace of Islam, home to Mecca" },
  { name: "YEMEN", hint: "Arabia Felix, ancient incense route" },
  { name: "OMAN", hint: "Sultanate on the Arabian Peninsula" },
  { name: "QATAR", hint: "Rich peninsular country, hosted FIFA 2022" },
  { name: "BAHRAIN", hint: "Island kingdom in the Persian Gulf" },
  { name: "KUWAIT", hint: "Small oil-rich country in the Gulf" },
  {
    name: "UNITED ARAB EMIRATES",
    hint: "Seven emirates, home to Dubai and Abu Dhabi",
  },
  {
    name: "GEORGIA",
    hint: "Crossroads of Europe and Asia, birthplace of wine",
  },
  { name: "ARMENIA", hint: "First Christian nation, Mount Ararat" },
  { name: "AZERBAIJAN", hint: "Land of fire, Caspian Sea oil" },
  { name: "KAZAKHSTAN", hint: "Largest landlocked country, space launch site" },
  { name: "UZBEKISTAN", hint: "Silk Road country with Samarkand" },
  {
    name: "TURKMENISTAN",
    hint: "Desert country with gas crater 'Door to Hell'",
  },
  { name: "KYRGYZSTAN", hint: "Mountainous Central Asian country" },
  { name: "TAJIKISTAN", hint: "Mountainous country in Central Asia" },
  { name: "MONGOLIA", hint: "Land of Genghis Khan and nomads" },
  { name: "NEPAL", hint: "Home to Mount Everest and Buddha's birthplace" },
  {
    name: "BHUTAN",
    hint: "Last Himalayan kingdom, measures Gross National Happiness",
  },
  { name: "SRI LANKA", hint: "Teardrop island, famous for tea and cinnamon" },
  { name: "MALDIVES", hint: "1,200 coral islands in the Indian Ocean" },
  { name: "CUBA", hint: "Caribbean island, home of cigars and salsa" },
  { name: "JAMAICA", hint: "Birthplace of reggae and Bob Marley" },
  { name: "HAITI", hint: "First independent black republic" },
  { name: "DOMINICAN REPUBLIC", hint: "Shares Hispaniola island with Haiti" },
  { name: "PUERTO RICO", hint: "US territory in the Caribbean" },
  { name: "BARBADOS", hint: "Easternmost Caribbean island" },
  {
    name: "TRINIDAD AND TOBAGO",
    hint: "Twin island nation, birthplace of calypso",
  },
  { name: "BAHAMAS", hint: "700 islands where Columbus first landed" },
  { name: "BELIZE", hint: "Only English-speaking Central American country" },
  { name: "GUATEMALA", hint: "Heart of the Mayan world" },
  { name: "HONDURAS", hint: "Central American country with Mayan ruins" },
  { name: "EL SALVADOR", hint: "Smallest Central American country" },
  { name: "NICARAGUA", hint: "Land of lakes and volcanoes" },
  { name: "COSTA RICA", hint: "No army, rich coast, pure life (Pura Vida)" },
  { name: "PANAMA", hint: "Connects two continents with famous canal" },
  {
    name: "GREENLAND",
    hint: "World's largest island, autonomous Danish territory",
  },
  {
    name: "NEW ZEALAND",
    hint: "Land of the long white cloud, home of hobbits",
  },
];
var question;
var answer;
var currentCountry;
var lives = 5;
var str = "";
var hintDisplay = document.querySelector("#hint");
var usedCountries = new Set(); // Keep track of used countries

function playGame() {
  // Reset lives display
  str = "";
  for (let i = 0; i < lives; i++) {
    str = str + "&#9829 ";
  }
  playerLife.innerHTML = "Chances : " + str;

  // Get random country that hasn't been used yet
  let availableCountries = countries.filter(
    (country) => !usedCountries.has(country.name)
  );

  // If all countries have been used, reset the game
  if (availableCountries.length === 0) {
    usedCountries.clear();
    availableCountries = countries;
    tryA.innerHTML =
      "🏆 Amazing! You've completed all countries! Starting fresh...";
  }

  // Select random country
  const randomIndex = Math.floor(Math.random() * availableCountries.length);
  currentCountry = availableCountries[randomIndex];
  answer = currentCountry.name;
  usedCountries.add(answer);

  // Display hint
  hintDisplay.innerHTML = "💡 Hint: " + currentCountry.hint;
  hintDisplay.style.display = "block";

  // Reset UI
  myComment.style.display = "none";
  tryA.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  buttonPad.style.display = "grid";
  nextButton.innerHTML = "Next";
  question = [];

  // Create blank spaces for letters
  for (let i = 0; i < answer.length; i++) {
    question.push("_");
  }
  myDisplay.innerHTML = question.join(" ");
  console.log(answer);

  // Reset button states
  resetButtonStates();
}

function checkAnswer(u) {
  str = "";
  var bool = false;
  var completeWord = true;

  // Disable the clicked button
  u.disabled = true;
  u.style.opacity = "0.5";
  u.style.cursor = "not-allowed";

  for (let i = 0; i < answer.length; i++) {
    if (u.value == answer[i]) {
      bool = true;
      question[i] = answer[i];
    }
  }

  myDisplay.innerHTML = question.join(" ");
  if (bool == true) {
    myComment.style.display = "block";
    myComment.innerHTML = "✅ Correct!";
    myComment.style.color = "#4ecdc4";
  } else {
    myComment.style.display = "block";
    myComment.innerHTML = "❌ Wrong!";
    myComment.style.color = "#ff6b6b";
    lives--;
    str = "";
    for (let i = 0; i < lives; i++) {
      str = str + "&#9829 ";
    }
    playerLife.innerHTML = "Chances : " + str;
  }

  if (lives == 0) {
    lives = 5;
    buttonPad.style.display = "none";
    tryA.style.display = "block";
    tryA.innerHTML = "Failed 😔 The answer was: " + answer;
    playerLife.innerHTML = "&#128148";
    container2.style.display = "block";
    nextButton.innerHTML = "Try again";
    hintDisplay.style.display = "none";
  }

  for (let i = 0; i < answer.length; i++) {
    if (question[i] == "_") {
      completeWord = false;
    }
  }
  if (completeWord == true) {
    buttonPad.style.display = "none";
    tryA.style.display = "block";
    tryA.innerHTML = "🎉 Complete! Well done!";
    container2.style.display = "block";
    hintDisplay.style.display = "none";
    // Check if all countries have been used
    if (usedCountries.size === countries.length) {
      nextButton.innerHTML = "Start Fresh!";
      tryA.innerHTML = "🏆 Congratulations! You've completed all countries!";
    }
  }
}

function byeBye() {
  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "block";
}

function callBack(event) {
  checkAnswer(event.target);
}

playGame();

nextButton.addEventListener("click", playGame);
for (let i = 0; i < userInput.length; i++) {
  userInput[i].addEventListener("click", callBack);
}

exitButton.addEventListener("click", byeBye);

// Keyboard support
function handleKeyPress(event) {
  const key = event.key.toUpperCase();

  // Check if Next/Exit buttons are visible (game completed/failed)
  if (container2.style.display === "block") {
    if (event.code === "Space") {
      event.preventDefault(); // Prevent page scroll
      nextButton.click();
      return;
    }
    if (event.code === "Escape") {
      event.preventDefault();
      exitButton.click();
      return;
    }
  }

  // Check if it's a letter A-Z and game is active
  if (
    key.length === 1 &&
    key >= "A" &&
    key <= "Z" &&
    buttonPad.style.display === "grid"
  ) {
    // Find the corresponding button
    const button = Array.from(userInput).find((btn) => btn.value === key);
    if (button && !button.disabled) {
      checkAnswer(button);
    }
  }
}

// Function to reset button states
function resetButtonStates() {
  for (let i = 0; i < userInput.length; i++) {
    userInput[i].disabled = false;
    userInput[i].style.opacity = "1";
    userInput[i].style.cursor = "pointer";
  }
}

// Add keyboard event listener
document.addEventListener("keydown", handleKeyPress);
