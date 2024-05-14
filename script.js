document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to toggle the visibility of the submenu when clicking on Services
    document.getElementById("servicesBtn").addEventListener("click", function() {
        const submenu = document.getElementById("servicesMenu");
        // Toggle the visibility of the submenu
        if (submenu.style.display === "none" || submenu.style.display === "") {
            submenu.style.display = "flex"; // Show submenu
        } else {
            submenu.style.display = "none"; // Hide submenu
        }
    });
});

function openSubNav() {
    document.getElementById("servicesMenu").style.display = "block";
}

function closeSubNav() {
    document.getElementById("servicesMenu").style.display = "none";
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

//skifter billede
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
