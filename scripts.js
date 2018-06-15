//When buttons are clicked, manipulates DOM to display information base on which button is selected

//Grabs button element and sets them to variable
var carpetInfo = document.getElementById('carpetInfo'); 
var chemInfo = document.getElementById('chemInfo');
var hogInfo = document.getElementById('hogInfo');
var treeInfo = document.getElementById('treeInfo');

// When carpet python button is clicked, adds HTML information into DOM
carpetInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';
        infoShow.innerHTML = " ";  
       }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "<img id='python' class='speciesPic' src='Images/python.jpeg' alt='Close up of pythons head'>"
        infoShow.innerHTML += "Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        infoShow.innerHTML += "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        infoShow.innerHTML += "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        infoShow.innerHTML += "<br><strong>Diet:</strong> Frozen mice or rats.";
       }
};

// When Chemeleon button is clicked, adds HTML information into DOM
chemInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
        }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "<img id='chem' class='speciesPic' src='Images/chem.jpg' alt='Chemeleon on branch'>"
        infoShow.innerHTML += "Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        infoShow.innerHTML += "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        infoShow.innerHTML += "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        infoShow.innerHTML += "<br><strong>Diet:</strong> Frozen mice or rats.";
        }
};

// When carpet Hognose is clicked, adds HTML information into DOM
hogInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "<img class='speciesPic' id='hog' src='Images/Hog.jpg' alt='Hognose in tank'>"
        infoShow.innerHTML += "<br>Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        infoShow.innerHTML += "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        infoShow.innerHTML += "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        infoShow.innerHTML += "<br><strong>Diet:</strong> Frozen mice or rats.";
        }
};

// When Tree Pythong button is clicked, adds HTML information into DOM
treeInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "<img id='gtp' class='speciesPic' src='Images/gtp.jpeg' alt='Green Tree Python on branch'>"
        infoShow.innerHTML += "Semiarboreal snakes inhabiting Queensland Australia, Jungle Carpets are a popular breed to keep for pets.";
        infoShow.innerHTML += "<br><strong>Temperment:</strong> Aside from a strong feeding response, docile and easy to handle.";
        infoShow.innerHTML += "<br><strong>Husbandry:</strong> Temps should be around 90\xB0 Ferenheit. Humidity should be between 40% and 60%. Some type of branch for the snake to perch on should be provided. Recommended substrate would be dirt, though newspaper and tile are common.";
        infoShow.innerHTML += "<br><strong>Diet:</strong> Frozen mice or rats.";
       }
};