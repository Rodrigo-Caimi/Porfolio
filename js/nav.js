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
  var steps = document.querySelectorAll('.step');
  if (!steps.length) return;

  function canHover() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  steps.forEach(function (step) {
    step.addEventListener('click', function () {
      if (canHover()) return;
      var open = step.classList.contains('is-flipped');
      steps.forEach(function (other) {
        other.classList.remove('is-flipped');
      });
      if (!open) step.classList.add('is-flipped');
    });

    step.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      step.classList.toggle('is-flipped');
    });
  });
})();
