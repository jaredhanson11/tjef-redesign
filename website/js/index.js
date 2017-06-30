$(document).ready(function() {
  // Adding event listeners
  var navBar = $('.nav-bar').first();
  $(window).scroll(function() {
    const windowHeight = $(window).height();
    const currentScroll = $(window).scrollTop();
    var fixedTop = navBar.hasClass('fixed-top');
    if ((currentScroll > windowHeight) && (!fixedTop)) {
        navBar.addClass('fixed-top');
        $('body').addClass('navbar-offset');
    } else if ((currentScroll < windowHeight) && (fixedTop)) {
        navBar.removeClass('fixed-top');
        $('body').removeClass('navbar-offset');
    }
  })
})
function storyShortener (story) {
    var storyLength = story.length;
    if (storyLength > 200) {
        var shortStory = story.substring(0, 200);
        return shortStory;
    };
};
