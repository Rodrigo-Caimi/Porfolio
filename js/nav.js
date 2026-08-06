(function () {
  var header = document.querySelector('header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle('is-nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('is-nav-open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) setOpen(false);
  });
})();

(function () {
  var root = document.querySelector('[data-hero-morph]');
  if (!root) return;

  var photo = root.querySelector('[data-hero-photo]');
  var handle = root.querySelector('[data-hero-handle]');
  if (!photo || !handle) return;

  var reveal = 0; // 0 = solo foto, 1 = solo dibujo
  var dragging = false;
  var moved = false;
  var startX = 0;
  var startReveal = 0;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setReveal(value, animate) {
    reveal = Math.max(0, Math.min(1, value));
    var pct = (reveal * 100).toFixed(2);
    // Recorta la foto desde la derecha → deja ver el dibujo debajo
    photo.style.clipPath = 'inset(0 ' + pct + '% 0 0)';
    handle.style.left = (100 - reveal * 100).toFixed(2) + '%';
    root.classList.toggle('is-drawn', reveal > 0.92);
    root.classList.toggle('is-animating', !!animate && !reduceMotion);
    root.setAttribute(
      'aria-label',
      reveal > 0.5
        ? 'Versión ilustrada de Rodrigo Caimi. Arrastrá o tocá para volver a la foto.'
        : 'Foto de Rodrigo Caimi. Arrastrá o tocá para ver la versión ilustrada.'
    );
  }

  function animateTo(target) {
    setReveal(target, true);
    if (reduceMotion) return;
    window.setTimeout(function () {
      root.classList.remove('is-animating');
    }, 600);
  }

  function pointerX(event) {
    if (event.touches && event.touches.length) return event.touches[0].clientX;
    if (event.changedTouches && event.changedTouches.length) return event.changedTouches[0].clientX;
    return event.clientX;
  }

  function onStart(event) {
    if (event.type === 'mousedown' && event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = pointerX(event);
    startReveal = reveal;
    root.classList.add('is-dragging');
    root.classList.remove('is-animating');
  }

  function onMove(event) {
    if (!dragging) return;
    var rect = root.getBoundingClientRect();
    if (!rect.width) return;
    var dx = pointerX(event) - startX;
    if (Math.abs(dx) > 4) moved = true;
    // Arrastrar a la izquierda revela el dibujo
    var next = startReveal + (-dx / rect.width);
    setReveal(next, false);
    if (event.cancelable && moved) event.preventDefault();
  }

  function onEnd() {
    if (!dragging) return;
    dragging = false;
    root.classList.remove('is-dragging');

    if (!moved) {
      // Tap: cambia automáticamente al otro estado
      animateTo(reveal < 0.5 ? 1 : 0);
      return;
    }

    // Drag: completa solo hacia el dibujo o vuelve a la foto
    if (reveal >= 0.22) animateTo(1);
    else animateTo(0);
  }

  root.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  root.addEventListener('touchstart', onStart, { passive: true });
  root.addEventListener('touchmove', onMove, { passive: false });
  root.addEventListener('touchend', onEnd);
  root.addEventListener('touchcancel', onEnd);

  root.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      animateTo(reveal < 0.5 ? 1 : 0);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      animateTo(1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      animateTo(0);
    }
  });

  setReveal(0, false);
})();

(function () {
  var steps = document.querySelectorAll('.step');
  if (!steps.length) return;

  function useHoverFlip() {
    return window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1101px)').matches;
  }

  function flipStep(step) {
    var open = step.classList.contains('is-flipped');
    steps.forEach(function (other) {
      other.classList.remove('is-flipped');
    });
    if (!open) step.classList.add('is-flipped');
  }

  steps.forEach(function (step) {
    var startX = 0;
    var startY = 0;

    step.addEventListener('click', function () {
      if (useHoverFlip()) return;
      flipStep(step);
    });

    step.addEventListener('touchstart', function (event) {
      if (useHoverFlip() || !event.changedTouches.length) return;
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;
    }, { passive: true });

    step.addEventListener('touchend', function (event) {
      if (useHoverFlip() || !event.changedTouches.length) return;
      var dx = event.changedTouches[0].clientX - startX;
      var dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      event.preventDefault();
      flipStep(step);
    }, { passive: false });

    step.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      step.classList.toggle('is-flipped');
    });
  });
})();
