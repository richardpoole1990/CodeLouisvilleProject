var button = document.getElementById('carpetButton'); //

button.onclick = function() {
    var div = document.getElementById("carpet");
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

console.log("test");