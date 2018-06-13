var carpetInfo = document.getElementById('carpetButton'); 
var chemInfo = document.getElementById('chemButton');
var hogInfo = document.getElementById('hogButton');
var treeInfo = document.getElementById('treeButton')

// When carpet python button is clicked, adds HTML information into DOM
carpetInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "test";
       }
};

chemInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "test";
       }
};

hogInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "test";
       }
};

treeInfo.onclick = function() {
    var infoShow = document.getElementById('info');
    if (infoShow.style.display == 'block') {
        infoShow.style.display = 'none';      
      }
    else {
        infoShow.style.display = 'block';
        infoShow.innerHTML = "test";
       }
};