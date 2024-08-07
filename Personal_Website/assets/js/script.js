let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'github':
      url = 'https://github.com/NRH25';
      break;
    case 'linkedin':
      url = 'https://www.linkedin.com/in/nicholas-rodchenko-highfield-09673a2b8/';
      break;
    case 'email':
      url = 'https://t.me/NikkiRH';
      break;
    case 'cv':
      url = 'https://drive.google.com/file/d/1koN2VjOoeZ5YEKNDGTZaF9G63hpICcxr/view'
  }

  window.open(url);
}

function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('welcome.', { delay: 600 }) // reduced delay from 1200
    .pause(500) // reduced pause from 1000
    .delete(null, { delay: 500 }) // reduced delay from 1000
    .type(`${mobile ? 'tap' : 'press any key'} to enter.`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 1500); // reduced delay from 2500
}

function startMainTyping() {
  new TypeIt('#dynamic-text', {
    speed: 50,
    loop: true,
    nextStringDelay: 500, // reduced delay from 1000
    lifeLike: true,
  })
  .type('software engineer', { delay: 500 }) // reduced delay from 2000
  .pause(500) // reduced pause from 2000
  .delete(17, { delay: 500 }) // reduced delay from 1000
  .type('marine oceanographer', { delay: 500 }) // reduced delay from 2000
  .pause(500) // reduced pause from 2000
  .delete(21, { delay: 500 }) // reduced delay from 1000
  .type('data analyst', { delay: 500 }) // reduced delay from 2000
  .pause(500) // reduced pause from 2000
  .delete(12, { delay: 500 }) // reduced delay from 1000
  .go();
}

function switchScreen() {
  document.title = 'Nikki RH';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });

  ['background', 'rain'].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});
