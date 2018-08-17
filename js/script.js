// smooth scrolling
$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
});

// hide hamburger menu clicking anywhere on the screen
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})

// lightbox

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}



// animation

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  orgin: 'bottom'
});
sr.reveal('.sp1', {
  duration: 2000,
  origin: 'bottom',
  distance: '600px'
});

sr.reveal('.sp2', {
  duration: 2000,
  origin: 'left',
  distance: '600px'
});

sr.reveal('.column', { 
  duration: 3000,
  scale: 0.9 }, 
  400);

sr.reveal('h2', {
  rotate: {x:360},
  duration: 1000
});

sr.reveal('.one', {
  duration: 2000,
  origin: 'left',
  distance: '600px'
});

sr.reveal('.two', {
  duration: 2000,
  origin: 'bottom',
  distance: '600px'
});

sr.reveal('.input-group', {
  duration: 2000,
  orgin: 'bottom'
});