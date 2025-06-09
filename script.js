/* JavaScript + jQuery (script.js) */
$(document).ready(function () {
  // Fade-in on scroll
  $(window).on("scroll", function () {
    $(".program-section").each(function () {
      const sectionTop = $(this).offset().top;
      const scrollPos = $(window).scrollTop() + $(window).height() - 100;
      if (scrollPos > sectionTop) {
        $(this).fadeIn(1000);
      }
    });

    // Show/hide back-to-top button
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // Scroll to top
  $('#back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

  // Initially hide all sections
  $('.program-section').hide();
});
// JavaScript Document