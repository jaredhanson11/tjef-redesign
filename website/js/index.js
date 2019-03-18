/* Parallex scrolling function */
function parallaxScroll(currentScroll) {
  const scrollSpeed = .25;
  var backgroundScroll = (currentScroll * scrollSpeed).toString() + 'px';
  $('body').css('background-position-y', backgroundScroll);
}

////Spotlight section////

function changeSlide(n, fadeSpeed) {
  console.log("changeSlide called")
  $('#spotlightImg').fadeOut(fadeSpeed, function() {
    var dots = $('.dot')
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[n-1].className += ' active'

    var varName = 'slide' + n
    $('#spotlightImg').attr('src', window[varName].imageSrc)
    $('#spotlight-description').html(window[varName].desc)

  }).fadeIn(fadeSpeed)
  //fixSize($('#spotlightImg'))
}

function nextSlide(fadeSpeed) {
    var imageSrc = $('#spotlightImg').fadeOut().attr('src')
    var slideIndex = imageSrc.substring(imageSrc.lastIndexOf('t') + 1, imageSrc.lastIndexOf('t') + 2)

    if (slideIndex == slideTotal)
      slideIndex = 0

    changeSlide(Number(slideIndex) + 1, fadeSpeed)
}

function lastSlide(fadeSpeed) {
  console.log("lastSlide called")
  var imageSrc = $('#spotlightImg').fadeOut().attr('src')
  var slideIndex = imageSrc.substring(imageSrc.lastIndexOf('t') + 1, imageSrc.lastIndexOf('t') + 2)

  if (slideIndex == 1)
    slideIndex = slideTotal

  changeSlide(Number(slideIndex), fadeSpeed)
}

function createDots() {
  $('<span  class="arrow left">❮</span>').appendTo('#dots')
  $('<span class="dot active"></span>').appendTo('#dots')
  for (var i = 0; i < (slideTotal-1); i++) {
    $('<span class="dot"></span>').appendTo('#dots')
  }
  $('<span class="arrow right">❯</span>').appendTo('#dots')
}

function fixSize(image) {
  console.log(image.width())
  if (image.width() < '100%') {
    image.width('100%')
    console.log(image.width())
  }
  
  //if (image.height < maxHeight) {
    //var paddingAddString = Number(maxHeight - image.height) + 'px'
    //$(image).css({'padding-top': paddingAddString})
  //}
}

var intervalId

function startSlideShow() {

  intervalId = setTimeout(nextSlide(750), 30000)
}

function stopSlideShow() {
  clearTimeout(intervalId)
}

//dot event listeners
$(document).ready(function() {
  createDots()
  startSlideShow()

  $('.dot').each(function(index){
    $(this).click(function() {
      stopSlideShow()
      changeSlide(index + 1, 100);
      startSlideShow();
    });
  });

  $('.right').click(function() {
    stopSlideShow()
    nextSlide(10)
    startSlideShow()
  })

  $('.left').click(function() {
    console.log("left arrow clicked")
    stopSlideShow()
    lastSlide(10)
    startSlideShow()
  })
})
////End spotlight sections////

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

/*
  //// Stick navbar to top ////
  var navBar = $('.nav-bar').first();
  $(window).scroll(function() {
    const windowHeight = $(window).height();
    const currentScroll = $(window).scrollTop();
    var fixedTop = navBar.hasClass('fixed-top');
    if ((currentScroll > 0) && (!fixedTop)) {
        navBar.addClass('fixed-top');
    } else if ((currentScroll <= 0) && (fixedTop)) {
        navBar.removeClass('fixed-top');
        sideNavToggle(true);
    }
    parallaxScroll(currentScroll);
  });
  //// End stick navbar to top ////

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
