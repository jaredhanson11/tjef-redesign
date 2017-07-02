$(document).ready(function() {
  /*//////// Event listeners ////////*/

  //// Stick navbar to top ////
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
  });
  //// End stick navbar to top ////

  //// Navbar dropdown menu ////
  var dropdown = $('.nav-dropdown');
  dropdown.hover(
      handlerIn=function(){$('.dropdown').slideDown();},
      handlerOut=function(){$('.dropdown').slideUp();}
  )
  //// End Navbar dropdown menu ////

  //// Pop up goal modal ////
  var goalButton = $('.goal-button');
  goalButton.click(function(){
    var modalBackground = $('.modal-background');
    var modalContents = $(this).clone();
    modalContents.addClass('modal-contents');
    modalBackground.addClass('active');
    modalBackground.html(modalContents);
    modalBackground.click(function(event){
      if (event.target === this){
        modalBackground.removeClass('active');
        modalBackground.empty();
      }
    })
  })
  //// End Pop up goal modal ////

  /*//////// End Event listeners ////////*/
})
function storyShortener (story) {
    var storyLength = story.length;
    if (storyLength > 200) {
        var shortStory = story.substring(0, 200);
        return shortStory;
    };
};
