$(document).ready(() => {
  $('#hamburger-menu').click(() => {
    $('#hamburger-menu').toggleClass('active')
    $('#nav-menu').toggleClass('active')
  });

  // setting owl carousel

  let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: false,
    autoplayHoverPause: false
  });

  $('#top-movies-slide').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });

  $('.movies-slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    loop: true,
    center: true,
    navText: navText,
    margin: 15,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 3
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });
});


$(document).ready(function() {
  $('#movie01').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/theatre-dead.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Theatre of the Dead');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie02').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(https://www.themoviedb.org/t/p/original/8yLzd8z7xRQzWG0neDrVLc34Jmx.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Transformes');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie03').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/resident-evil.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Resident Evil');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie04').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/captain-marvel.png), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Captan Marvel');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie05').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/hunter-killer.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Hunter Killer');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie06').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/blood-shot.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Bloodshot');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
  $('#movie07').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/call.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title').text('Call');
    $('.star span').text('6.1');
    $('.time span').text('2h 29m');
    $('.class span').text('12+');
    $('.item-content-description').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action').css({
      display: 'none'
    });

  });
});