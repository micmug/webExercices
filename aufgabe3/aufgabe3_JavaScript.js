window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY
  var background = document.querySelector('.body')
  var foreground = document.querySelector('.foreground')
  background.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'
})

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var background = document.querySelector('.body')
//   var foreground = document.querySelector('.foreground');
//   var main__wrapper = document.querySelector('.main__wrapper');

//   // Bewegt den Hintergrund (body) langsamer
//   document.body.style.backgroundPositionY = -(scrollPosition * 0.3) + 'px';

//   // Bewegt den Hauptinhalt normal
//   main__wrapper.style.transform = 'translateY(' + (-scrollPosition) + 'px)';

//   // Bewegt den Foreground schneller
//   foreground.style.transform = 'translateY(' + (-scrollPosition * 1.2) + 'px)';
// });
