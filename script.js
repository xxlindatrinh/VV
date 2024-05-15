document.addEventListener('DOMContentLoaded', function() {
    const servicesBtn = document.getElementById('servicesBtn');
    const servicesMenu = document.getElementById('servicesMenu');
  
    servicesBtn.addEventListener('click', function() {
      servicesMenu.classList.toggle('active'); // Toggle the active class
    });
  });

  
// Function to adjust the opacity of content divs
function adjustOpacity(divs, opacity) {
    divs.forEach(function(div) {
        div.style.opacity = opacity;
    });
}

// forside billeder slideshow
var i = 0;
var images = [];
var time = 1000;

images[0] = 'img/forside/Greta.jpg';
images[1] = 'img/forside/junglebass.jpg';
images[2] = 'img/forside/lillastage.jpg';
images[3] = 'img/forside/dillistone.jpg';
images[4] = 'img/forside/daghygge.jpg';
images[5] = 'img/forside/neonpriest.jpg';
images[6] = 'img/forside/fest.jpg';
images[7] = 'img/forside/greenstage.jpg';

//forside skifter billede hurtigt
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;

//forside image slider

const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displayUpcomming_slide");
        intervalId = setInterval(nextUpcomming_slide, 5000);
    }
}
function showUpcomming_slide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index <0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayUpcomming_slide");
    });
    slides[slideIndex].classList.add("displayUpcomming_slide");
}


function prevUpcomming_slide(){
    clearInterval(intervalId);
    slideIndex--;
    showUpcomming_slide(slideIndex);
}
function nextUpcomming_slide(){
    slideIndex++;
    showUpcomming_slide(slideIndex);
}

// Event side dropdown //

document.querySelectorAll('.dropdown-btn')[1].addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.style.display = 'none';
    });
    var links = document.querySelectorAll('.dropdown-content a');
    links.forEach(function(link) {
      link.style.display = 'block';
    });
  });
