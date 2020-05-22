$(document).ready(function(e) {
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();

  toggleLeftNav($win, $navbar, width);

  // Resize event for window (browser)
  $win.resize(() => toggleLeftNav($win, $navbar, width));

  $toggle.click(() => $navbar.toggleClass("toggle-left"));
});

const toggleLeftNav = ($win , $navbar, width) => {
  if ($win.width() < 768) {
    $navbar.css({left: `-${width}px`})
  } else {
    $navbar.css({left: '0px'});
  }
}