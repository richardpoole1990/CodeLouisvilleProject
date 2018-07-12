//When buttons are clicked, manipulates DOM to display information base on which button is selected

//Grabs button element and sets them to variable
var carpetInfo = document.getElementById('carpetInfo'); //
var chemInfo = document.getElementById('chemInfo');     // Grabs element id's for each button, and set's a variable
var hogInfo = document.getElementById('hogInfo');       //
var treeInfo = document.getElementById('treeInfo');     //
var infoShow = document.getElementById('info');
var temperment = document.getElementById('temperment');
var husbandry = document.getElementById('husbandry'); 
var diet = document.getElementById('diet');          // Grabs blank div for adding HTML later

// When carpet python button is clicked, adds HTML information into DOM
carpetInfo.onclick = function() {                       //Listens for button click
    if (infoShow.style.display == 'none') {        //Checks current style display, and if block
        infoShow.style.display = 'none';                // change to none
        infoShow.innerHTML = " ";                       // blank out HTML
       }
    else {
        infoShow.style.display = 'flex';               // otherwise, display is block, and add below HTML
        infoShow.innerHTML = "<img id='python' class='speciesPic' src='Images/python.jpeg' alt='Close up of pythons head'>"
        infoShow.innerHTML += "<br>Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        temperment.innerHTML = "<strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        husbandry.innerHTML = "<strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        diet.innerHTML = "<strong>Diet:</strong> Frozen mice or rats.";
       }
};

// When Chemeleon button is clicked, adds HTML information into DOM
chemInfo.onclick = function() {
    if (infoShow.style.display == 'none') {
        infoShow.style.display = 'none';
        infoShow.innerHTML = " ";      
        }
    else {
        infoShow.style.display = 'flex';
        infoShow.innerHTML = "<img id='chem' class='speciesPic' src='Images/chem.jpg' alt='Chemeleon on branch'>"
        infoShow.innerHTML += "Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        temperment.innerHTML += "<strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        husbandry.innerHTML += "<strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        diet.innerHTML += "<strong>Diet:</strong> Frozen mice or rats.";
        }
};

// When carpet Hognose is clicked, adds HTML information into DOM
hogInfo.onclick = function() {
    if (infoShow.style.display == 'none') {
        infoShow.style.display = 'none';
        infoShow.innerHTML = " ";       
      }
    else {
        infoShow.style.display = 'flex';
        infoShow.innerHTML = "<img class='speciesPic' id='hog' src='Images/Hog.jpg' alt='Hognose in tank'>"
        infoShow.innerHTML += "<br>Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        temperment.innerHTML = "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        husbandry.innerHTML = "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        diet.innerHTML += "<br><strong>Diet:</strong> Frozen mice or rats.";
        }
};

// When Tree Pythong button is clicked, adds HTML information into DOM
treeInfo.onclick = function() {
    if (infoShow.style.display == 'none') {
        infoShow.style.display = 'none';
        infoShow.innerHTML = " ";       
      }
    else {
        infoShow.style.display = 'flex';
        infoShow.innerHTML = "<img id='gtp' class='speciesPic' src='Images/gtp.jpeg' alt='Green Tree Python on branch'>"
        infoShow.innerHTML += "<br>Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        temperment.innerHTML = "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        husbandry.innerHTML = "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        diet.innerHTML = "<br><strong>Diet:</strong> Frozen mice or rats.";
       }
};