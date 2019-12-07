/* Parallex scrolling function */
function parallaxScroll(currentScroll) {
  const scrollSpeed = .25;
  var backgroundScroll = (currentScroll * scrollSpeed).toString() + 'px';
  $('body').css('background-position-y', backgroundScroll);
}

////Spotlight section////

// change to arbitrary slide, used by nextSlide, lastSlide
function changeSlide(n, fadeSpeed) {
  $('#spotlightImg').fadeOut(fadeSpeed, function() {

    // changes dot colors
    var dots = $('.dot')
    $.each(dots, function() {
      this.className = this.className.replace('active', '')
    })
    dots[n-1].className += ' active'

    var varName = 'slide' + n
    genSlide(window[varName])
//    $('#spotlightImg').attr('src', window[varName].imageSrc)
//    $('.spotlight-description').html(window[varName].desc)

  }).fadeIn(fadeSpeed)
  fixSize($('.spotlight-picture'))
}

// creates html code for the media of a slide
function genMedia(info) {
  let returnHtml = ''
  console.log(info['img'+0])
  for (let i = 0; i < info.mediaNum; ++i) {
    if (String('img' + i) in info)
      returnHtml += '<img class="spotlight-media" src=\"' + info['img'+i] + '\"/>'
    else if (String('vid' + i) in info) {
      returnHtml +=  '<iframe class="spotlight-media" src=\"' + info['img'+i] + '\"/>'
    }
  }
  return returnHtml
}


function readFile(filename) {
  let data
  $.get(filename, function(a) {
    data = a.toString();
  }, 'text')
  console.log(data);
  return data
}

//generates slide
function genSlide(info) {

  // handle possible subcaptions
  //if ('caption' in info)
    //$('#spotlight-caption').html(readFile(info.caption))
  //else
    //$('#spotlight-caption').html('')

  // put in desc
  //$('#spotlight-description').html(readFile(info.desc))

  //put in imgs/vids
  $('#spotlight-picture').html(genMedia(info))
}

// switches to next slide, used for whole slideshow
function nextSlide() {
    var imageSrc = $('#spotlightImg').fadeOut().attr('src')
    var slideIndex = imageSrc.substring(imageSrc.lastIndexOf('t') + 1, imageSrc.lastIndexOf('t') + 2) // gets current slide num
    slideIndex = Number(slideIndex) % slideShowInfo.slideTotal // if at last slide, go back to 0

    changeSlide(Number(slideIndex) + 1, slideShowInfo.fadeSpeed)
}

// switches to previous slide, used by left arrow btn
function lastSlide() {
  var imageSrc = $('#spotlightImg').fadeOut().attr('src')
  var slideIndex = imageSrc.substring(imageSrc.lastIndexOf('t') + 1, imageSrc.lastIndexOf('t') + 2)

  if (slideIndex == 1)
    slideIndex = slideShowInfo.slideTotal

  changeSlide(Number(slideIndex), slideShowInfo.fadeSpeed)
}

// creates dots based on slideTotal
function createDots() {
  $('<span  class="arrow left">❮</span>').appendTo('#dots')
  $('<span class="dot active"></span>').appendTo('#dots')
  for (var i = 0; i < (slideShowInfo.slideTotal-1); i++) {
    $('<span class="dot"></span>').appendTo('#dots')
  }
  $('<span class="arrow right">❯</span>').appendTo('#dots')
}

// resizes image
function fixSize(image) {
  image.children("img").each(function(){
      imgRatio = $(this).height() / $(this).width();
      containerRatio = $(this).parent().height() / $(this).parent().width();
      if (imgRatio > containerRatio) {
          $(this).css({
              height: '100%',
              width: 'auto'
          });
      } else {
          $(this).css({
              height: 'auto',
              width: '100%'
          });
      }
  });
}

$(document).ready(function() {
  createDots()
  nextSlide()

  //dot event listeners
  $('.dot').each(function(index){
    $(this).click(function() {
      changeSlide(index + 1, slideShowInfo.fadeSpeed);
    });
  });

  //media event listeners
  $('.media-container').each(function (index) {
  })

  $('.right').click(function() {
    nextSlide(slideShowInfo.fadeSpeed)
  })

  $('.left').click(function() {
    console.log("left arrow clicked")
    lastSlide(slideShowInfo.fadeSpeed)
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
