(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get('contacto') !== 'ok') return;

  var success = document.getElementById('contact-success');
  var form = document.getElementById('contact-form');
  if (success) {
    success.hidden = false;
  }
  if (form) {
    form.reset();
  }

  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, '', window.location.pathname + '#contacto');
  }
})();
