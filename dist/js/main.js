//  make the Bootstrap dropdown behave like a select
$("#search-dropdown ul li a").click(function(e){
  e.preventDefault();
  var selText = $(this).text();

  $(this)
    .parents('#search-dropdown')
    .find('.dropdown-toggle')
    .html(selText+' <span class="caret"></span>');
});

// slider setup
$('.carousel').carousel({
  interval: false
})

/* When user clicks the Icon */
// $('.nav-toggle').click(function(e) {
//   e.preventDefault();
//   $(this).toggleClass('active');
// });

/* When user open mobile-menu */
$('#mobile-menu').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('#toggle-mobile-navigation .nav-toggle').toggleClass('active');
  $('.header-nav').toggleClass('open');
});
