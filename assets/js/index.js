$(document).ready(function(e) {
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();

  resizeLeftNav($win, $navbar, width);

  // Resize event for window (browser)
  $win.resize(() => resizeLeftNav($win, $navbar, width));

  // Toggle left navigation
  $toggle.click(() => $navbar.toggleClass("toggle-left"));

});

const resizeLeftNav = ($win , $navbar, width) => {
  if ($win.width() < 768) {
    $navbar.css({left: `-${width}px`})
  } else {
    $navbar.css({left: '0px'});
  }
}

const typed = new Typed('#typed', {
  strings: [
    'from San Francisco.',
    'a Software Engineer.'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Fade-in => IntersectionObservers
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.25
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});