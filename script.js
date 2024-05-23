
// Video med lyd på index.html

document.addEventListener("DOMContentLoaded", function() {
    const backgroundVideo = document.getElementById('background-video');

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        backgroundVideo.addEventListener('mouseenter', function() {
            backgroundVideo.muted = false; // Unmute video on hover
        });

        backgroundVideo.addEventListener('mouseleave', function() {
            backgroundVideo.muted = true; // Mute video when mouse leaves
        });
    } else {
        backgroundVideo.addEventListener('mouseover', function() {
            backgroundVideo.muted = false; // Unmute video on hover
        });

        backgroundVideo.addEventListener('mouseout', function() {
            backgroundVideo.muted = true; // Mute video when mouse leaves
        });
    }
});

// ARRANGEMENTER OG EVENTS DROPDOWN
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.closest('.dropdown');
        dropdown.classList.toggle('open');
    });
});

// Common code for all HTML pages
document.addEventListener("DOMContentLoaded", function() {
    const servicesBtn = document.getElementById("servicesBtn");
    const submenu = document.getElementById("servicesMenu");

    // Function to toggle the submenu visibility
    function toggleSubmenu() {
        if (submenu.classList.contains("open")) {
            submenu.style.opacity = 0; // Add opacity to submenu
            setTimeout(() => {
                submenu.style.display = "none"; // Hide submenu after transition
                submenu.classList.remove("open"); // Remove the "open" class for transition
                servicesBtn.classList.add("submenu-open"); // Add the class
                toggleArrowIcon(false); // Hide the arrow icon
            }, 300); // Adjust the time based on your transition duration
        } else {
            submenu.style.display = "flex"; // Show submenu
            submenu.classList.add("open"); // Add the "open" class for transition
            setTimeout(() => {
                submenu.style.opacity = 1; // Make submenu visible
                toggleArrowIcon(true); // Show the arrow icon
            }, 10); // Adding a small delay for transition
            servicesBtn.classList.remove("submenu-open"); // Remove the class
        }
    }

    // Add event listener to the button to toggle submenu visibility
    servicesBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleSubmenu();
    });

    // Close the submenu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (submenu.style.display === "flex" && !event.target.closest(".subnav-content-container")) {
            submenu.style.opacity = 0; // Add opacity to submenu
            setTimeout(() => {
                submenu.style.display = "none"; // Hide submenu after transition
            }, 300); // Adjust the time based on your transition duration
        }
    });
});

//historie video
document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.querySelector(".historie-container video");
    console.log(videoElement); // This should log the video element if it exists
});


// JavaScript specific to index.html
var i = 0;
var images = [
    'img/forside/Greta.jpg',
    'img/forside/junglebass.jpg',
    'img/forside/lillastage.jpg',
    'img/forside/dillistone.jpg',
    'img/forside/daghygge.jpg',
    'img/forside/neonpriest.jpg',
    'img/forside/fest.jpg',
    'img/forside/astride.jpg'
];
var time = 1000;

function changeImg() {
    document.getElementById("slide").src = images[i]; // Update to use getElementById

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displayUpcoming_slide");
        intervalId = setInterval(nextUpcoming_slide, 5000);
    }
}

function showUpcoming_slide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayUpcoming_slide");
    });
    slides[slideIndex].classList.add("displayUpcoming_slide");
}

function prevUpcoming_slide(){
    clearInterval(intervalId);
    slideIndex--;
    showUpcoming_slide(slideIndex);
}

function nextUpcoming_slide(){
    slideIndex++;
    showUpcoming_slide(slideIndex);
}

// index.html når man klikker på OM VOLUME VILLAGE

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".scroll-to-opdag");

    button.addEventListener("click", function() {
        const target = document.getElementById("forside_opdag");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");
    const textToType = "FEEL FREE TO FUCK UP : (";
    const textToShow = "FEEL FREE TO FUCK UP :))";
    let currentText = "";
    let index = 0;
    const typingSpeed = 100; // justér hastigheden efter behov

    function typeText() {
        if (index < textToType.length) {
            currentText += textToType[index];
            textElement.textContent = currentText;
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Udskift ':' med ':)'
            setTimeout(() => {
                textElement.textContent = textToShow;
            }, typingSpeed);
        }
    }

    typeText();
});
