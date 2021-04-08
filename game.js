var imagePaths = [
    "story1.jpg",
    "story2.jpg"
];

//

// scrollmagic init
let ctrl = new ScrollMagic.Controller();

// each image
[].forEach.call(document.querySelectorAll('.story-img'), function(e) {

    // gsap timeline
    let tl = new TimelineMax();
    tl.from(e, 1, { xPercent: -100, ease: Expo.easeInOut }, 0);
    tl.from(e.querySelector('.story'), 1, { xPercent: 100, ease: Expo.easeInOut }, 0);

    // scrollmagic scene
    let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .6 })
        .setTween(tl)
        .addTo(ctrl);

});

//document.getElementsByClass("story").style.display = "none";

// var lastImage = false;

// var lastImageShown = 1;
// var ticking = false;

// function showNextImage() {

//     var storyBox = document.getElementById("story" + lastImageShown);
//     storyBox.style.display = "inline"
//     lastImageShown++;
// }



// document.addEventListener('scroll', function(e) {

//     if (!ticking) {
//         window.requestAnimationFrame(function() {
//             showNextImage();
//             ticking = false;
//         });

//         ticking = true;
//     }
// });



// document.addEventListener('keypress', function(event) {
//     if (event.code == 'Space') {
//         showNextImage();
//     };
// })