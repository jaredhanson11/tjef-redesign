/* Parallex scrolling function */
function parallaxScroll(currentScroll) {
  const scrollSpeed = .25;
  var backgroundScroll = (currentScroll * scrollSpeed).toString() + 'px';
  $('body').css('background-position-y', backgroundScroll);
}
//// Spotlight Carousel ////
state_SpotlightIndex = 0
state_DescriptionActive = false

// TODO: fills in divs for new slide
function genSlide(spotlight, img, dots) {
  const spotlightHtml = Handlebars.templates['spotlight']({
    spotlight: spotlight,
    img: img,
    dots: dots
  })
  $('.section#spotlight').html(spotlightHtml)
  spotlightEventListeners()
}

// changes to arbitrary slide
function changeSlide(n, descriptionActive) {
  state_SpotlightIndex = n % slideShow.length
  state_DescriptionActive = descriptionActive
  if (state_SpotlightIndex < 0) {
    state_SpotlightIndex = slideShow.length + state_SpotlightIndex
  }
  dots = slideShow.map((_, i) => {
    var ret = {num: i}
    if (i == state_SpotlightIndex) {
      ret.active = true
    }
    return ret
  })
  _data = slideShow[state_SpotlightIndex]
  img = _data.imgs[0]
  spotlight = {description: _data.desc, class: 'description-inactive'}
  if (descriptionActive) {
    spotlight.class = 'description-active'
  }
  genSlide(spotlight, img, dots)
}

// changes to next slide
function nextSlide() {
  changeSlide(state_SpotlightIndex += 1 % slideShow.length, false)
}

// changes to previous slide
function previousSlide() {
  changeSlide(state_SpotlightIndex -= 1 % slideShow.length, false)
}

function spotlightEventListeners() {
  //dot event listeners
  $('.dot').click(function(e) {
    changeSlide($(event.target).data('i'), false)
  })
  $('.right').click(nextSlide)
  $('.left').click(previousSlide)
  $('.spotlight-overlay').click(() => {
    changeSlide(state_SpotlightIndex, !state_DescriptionActive)
  })
}

$(document).ready(function() {
  Handlebars.partials = Handlebars.templates;
  changeSlide(state_SpotlightIndex, false)
})

/// End Spotlight Carousel ////

//// Persons boxes ////
function setPersonItemHeight(personBoxes) {
  personBoxes.each(function(){
    var width = $(this).width();
    $(this).height(width);
  });
};

// Init height
$(window).on('load', function(){
  var personBoxes = $('.persons').children('.person-item');
  setPersonItemHeight(personBoxes);
});

// On window resize
$(window).resize(function(){
  var personBoxes = $('.persons').children('.person-item');
  setPersonItemHeight(personBoxes);
});

function exitButton() {
  return $('<div/>', {'class': 'exit'})
    .append($('<div/>', {'class': 'exit-button'})
        .html('&#10006;'));
}

function closeModal() {
  $('.modal-background').removeClass('active');
  $('.modal-contents').remove();
}

//// End Persons boxes ////
//// Nav-bar setup ////
/*function sideNavToggle(closeOnly){
  var sideNav = $('.side-nav');
  var modalBackground = $('.modal-background');
  if (sideNav.is(':visible') || closeOnly == true) {
    sideNav.animate({
      'width': '0'
    }, function (){
      sideNav.css('display', '');
    });
    modalBackground.fadeOut(function(){
      modalBackground.removeClass('sidebar');
      modalBackground.css('display','');
    });
  } else {
    sideNav.css('display', 'flex');
    modalBackground.addClass('sidebar');
    modalBackground.fadeIn('fast');
    sideNav.animate({
      width: '33%'
    }, function() {
    });
  }
}

function navBarSetup() {
  function navItemsListen() {
    $('.nav-item').click(function(){
      var scrollTo = '.section#' + $(this).data('scroll-to');
      var offset = $(scrollTo).offset().top - 50;
      $('html, body').animate({
        scrollTop: offset
      }, 1000);
      sideNavToggle(true);
    })
  };

  function navBrandListen() {
    $('.nav-brand').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  };

  function navbarMenuListen() {
    var sideNav = $('.side-nav');
    $(window).resize(function(){
      if ($(window).width() > 768) {
        sideNavToggle(true);
      }
    });
    sideNav.find('.exit-button').click(function() {
      sideNavToggle(true);
    });
    $('.menu-button').click(function(){
      sideNavToggle();
    });
  };

  function setupSideBar() {
    var sideNav = $('.side-nav');
    var navItems = $('.nav-item').clone();
    sideNav.append(exitButton());
    sideNav.append(navItems);

    $('.modal-background').click(function(event){
      if ($(this).hasClass('sidebar') && event.target === this) {
        sideNavToggle(true);
      }
    })
  };

  setupSideBar();
  navbarMenuListen();
  navItemsListen();
  navBrandListen();
};
*/

$(document).ready(function() {
  /*//////// Event listeners ////////*/

  //// Stick navbar to top ////
/*
 * The commented out features below are due to the fact that navigation bar
 * are currently disabled.


  var navBar = $('.nav-bar').first();
*/
  $(window).scroll(function() {
    const windowHeight = $(window).height();
    const currentScroll = $(window).scrollTop();
/*
    var fixedTop = navBar.hasClass('fixed-top');
    if ((currentScroll > 0) && (!fixedTop)) {
        navBar.addClass('fixed-top');
    } else if ((currentScroll <= 0) && (fixedTop)) {
        navBar.removeClass('fixed-top');
        sideNavToggle(true);
    }
*/
    parallaxScroll(currentScroll);
  });
  //// End stick navbar to top ////

/*
  navBarSetup();
*/

  //// Pop up goal modal ////
  var goalButton = $('.goal-button');
  goalButton.click(function(){
    var modalBackground = $('.modal-background');
    var modalContents = $(this).clone();
    modalContents.addClass('modal-contents');
    modalContents.prepend(exitButton());
    modalContents.find('.exit-button').click(function(){
      closeModal();
    });
    modalBackground.addClass('active');
    modalBackground.append(modalContents);
  });
  //// End Pop up goal modal ////

  //// Pop up person modal ////
  var persons = $('.person-item');
  persons.click(function(){
    var modalBackground = $('.modal-background');
    var modalContents = $(this).find('.person-content').clone();
    modalContents.addClass('modal-contents');
    modalContents.prepend(exitButton());
    modalContents.find('.exit-button').click(function(){
      closeModal();
    });
    modalBackground.addClass('active');
    modalBackground.append(modalContents);
  });

  $('.modal-background').click(function(event){
    if ($(this).hasClass('active') && event.target === this){
      closeModal();
    }
  });

  //// End Pop up person modal ////

  /*//////// End Event listeners ////////*/
});
