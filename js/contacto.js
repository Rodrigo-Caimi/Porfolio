(function () {
  var form = document.getElementById('contact-form');
  var success = document.getElementById('contact-success');
  var errorBox = document.getElementById('contact-error');
  var button = form ? form.querySelector('button[type="submit"]') : null;

  function show(el, text) {
    if (!el) return;
    if (text) el.textContent = text;
    el.hidden = false;
  }

  function hide(el) {
    if (!el) return;
    el.hidden = true;
  }

  var params = new URLSearchParams(window.location.search);
  if (params.get('contacto') === 'ok') {
    show(success);
    if (form) form.reset();
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, '', window.location.pathname + '#contacto');
    }
  }

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    hide(success);
    hide(errorBox);

    var honey = form.querySelector('[name="_honey"]');
    if (honey && honey.value) return;

    var data = {
      nombre: (form.elements.nombre && form.elements.nombre.value) || '',
      email: (form.elements.email && form.elements.email.value) || '',
      mensaje: (form.elements.mensaje && form.elements.mensaje.value) || '',
      _subject: 'Nuevo mensaje — Portafolio Rodrigo Caimi',
      _template: 'table',
      _captcha: 'false'
    };

    if (button) {
      button.disabled = true;
      button.textContent = 'Enviando...';
    }

    fetch('https://formsubmit.co/ajax/ds.rodrigocaimi@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (payload) {
          return { ok: response.ok, status: response.status, payload: payload };
        });
      })
      .then(function (result) {
        if (!result.ok) {
          throw new Error((result.payload && result.payload.message) || ('Error ' + result.status));
        }
        form.reset();
        show(success, '¡Mensaje enviado! Te voy a responder a la brevedad.');
        if (success) success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        show(
          errorBox,
          'No se pudo enviar ahora. Escribime a ds.rodrigocaimi@gmail.com o probá de nuevo en un minuto.'
        );
      })
      .finally(function () {
        if (button) {
          button.disabled = false;
          button.textContent = 'Enviar';
        }
      });
  });
})();
