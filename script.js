function openSubNav(){
    document.getElementById("subNav").style.display = "block";
}

function closeSubNav() {
  document.getElementById("subNav").style.display = "none";
}

// forside billeder slideshow
var i = 0;
var images =[];
var time = 1200;

images[0] ='img/Greta.jpg';
images[1] ='img/VVlillelogo.png';
images[2] ='img/Greta.jpg'

//skifter billede
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;