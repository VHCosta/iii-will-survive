var imagePaths = [
    "story1.jpg",
    "story2.jpg"
];

document.getElementsByClass("story-img").style.display = 'none';

var lastImage = false;

var lastImageShown = 1;
var ticking = false;

function showNextImage() {



    var storyBox = document.getElementById("story" + lastImageShown);
    storyBox.style.display = "inline"
    lastImageShown++;



}



document.addEventListener('scroll', function(e) {

    if (!ticking) {
        window.requestAnimationFrame(function() {
            showNextImage();
            ticking = false;
        });

        ticking = true;
    }
});



document.addEventListener('keypress', function(event) {
    if (event.code == 'Space') {
        showNextImage();
    };
})