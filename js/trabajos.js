(function () {
  function asset(path) {
    const base = document.documentElement.dataset.assetBase || './';
    return base + path;
  }

  function proyectoHref(slug) {
    const base = document.documentElement.dataset.trabajosBase || './trabajos/';
    return base + slug;
  }

  function getProyecto(id) {
    return PROYECTOS.find(function (p) { return p.id === id; });
  }

  function renderWorkGrid(container) {
    if (!container) return;

    const layoutOrder = [6, 7, 3, 5, 1, 2, 4];
    const ordered = layoutOrder
      .map(function (id) { return getProyecto(id); })
      .filter(Boolean);

    container.innerHTML = ordered.map(function (proyecto) {
      const thumb = proyecto.cardImage
        ? '<img loading="lazy" decoding="async" alt="' + proyecto.cardAlt + '" src="' + asset(proyecto.cardImage) + '" />'
        : '';
      const category = proyecto.category
        ? '<span class="card-category">' + proyecto.category + '</span>'
        : '';
      const body =
        '<div class="card-body">' +
          '<div class="card-text">' +
            category +
            '<span class="card-title">' + proyecto.title + '</span>' +
          '</div>' +
        '</div>';

      if (proyecto.placeholder) {
        return (
          '<div class="card ' + proyecto.cardClass + '" aria-label="' + proyecto.title + '">' +
            '<div class="thumb">' + thumb + '</div>' +
            body +
          '</div>'
        );
      }

      return (
        '<a class="card ' + proyecto.cardClass + '" href="' + proyectoHref(proyecto.slug) + '">' +
          '<div class="thumb">' + thumb + '</div>' +
          body +
        '</a>'
      );
    }).join('');
  }

  function isVideoItem(item) {
    return item && (item.type === 'video' || /\.(mp4|webm|ogg)$/i.test(item.src || ''));
  }

  function isDriveItem(item) {
    return item && item.type === 'drive';
  }

  function drivePreviewUrl(link) {
    if (!link || link.indexOf('PEGAR_LINK') !== -1) return '';
    const match = String(link).match(/\/d\/([a-zA-Z0-9_-]+)/) || String(link).match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (!match) return link.indexOf('drive.google.com') !== -1 ? link : '';
    return 'https://drive.google.com/file/d/' + match[1] + '/preview';
  }

  function driveViewUrl(link) {
    if (!link || link.indexOf('PEGAR_LINK') !== -1) return '';
    const match = String(link).match(/\/d\/([a-zA-Z0-9_-]+)/) || String(link).match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (!match) return link;
    return 'https://drive.google.com/file/d/' + match[1] + '/view';
  }

  // iOS/móvil: el embed de Drive deja play/controles trabados a mitad de pantalla
  function shouldOpenDriveExternally() {
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMobileViewport = window.matchMedia('(max-width: 920px)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return isIOS || isMobileViewport || coarsePointer;
  }

  function drivePosterHtml(preview, viewUrl, poster, alt, mainClass, eager) {
    const label = shouldOpenDriveExternally() ? 'Ver video en Drive' : 'Reproducir video';
    const eagerAttrs = eager
      ? ' decoding="async" fetchpriority="high"'
      : ' decoding="async"';
    return (
      '<button type="button" class="drive-poster" data-drive-preview="' + (preview || '') + '" data-drive-view="' + (viewUrl || '') + '" data-drive-title="' + (alt || 'Video') + '" aria-label="' + label + '">' +
        '<img id="main-media" class="' + (mainClass || '') + '" src="' + (poster || '') + '" alt="' + (alt || '') + '"' + eagerAttrs + ' />' +
        '<span class="drive-poster-label">' + label + '</span>' +
      '</button>'
    );
  }

  function renderGallery(container, proyecto) {
    if (!container || !proyecto.gallery.length) return;

    const mainClass = proyecto.galleryContain ? 'img-contain' : '';
    const first = proyecto.gallery[0];
    let mainMedia;

    if (isDriveItem(first)) {
      const preview = drivePreviewUrl(first.src);
      const viewUrl = driveViewUrl(first.src);
      const poster = asset(first.poster || '');
      if (preview || viewUrl) {
        mainMedia = drivePosterHtml(preview, viewUrl, poster, first.alt, mainClass, true);
      } else {
        mainMedia =
          '<div class="drive-fallback">' +
            '<img id="main-media" class="' + mainClass + '" src="' + poster + '" alt="' + first.alt + '" decoding="async" />' +
          '</div>';
      }
    } else if (isVideoItem(first)) {
      mainMedia = '<video id="main-media" class="' + mainClass + '" controls playsinline poster="' + asset(first.poster || '') + '" src="' + asset(first.src) + '"></video>';
    } else {
      mainMedia = '<img id="main-media" class="' + mainClass + '" loading="eager" decoding="async" fetchpriority="high" src="' + asset(first.src) + '" alt="' + first.alt + '" />';
    }

    const thumbs = proyecto.gallery.map(function (item, index) {
      const thumbSrc = asset(item.thumb || item.poster || item.src);
      const poster = asset(item.poster || item.src);
      let attrs;

      if (isDriveItem(item)) {
        attrs = ' data-type="drive" data-full="' + drivePreviewUrl(item.src) + '" data-view="' + driveViewUrl(item.src) + '" data-poster="' + poster + '"';
      } else if (isVideoItem(item)) {
        attrs = ' data-type="video" data-full="' + asset(item.src) + '" data-poster="' + poster + '"';
      } else {
        attrs = ' data-type="image" data-full="' + asset(item.src) + '"';
      }

      return (
        '<div class="thumb-item' + ((isVideoItem(item) || isDriveItem(item)) ? ' is-video' : '') + (index === 0 ? ' is-active' : '') + '"' + attrs + '>' +
          '<img class="thumb-img" loading="lazy" decoding="async" src="' + thumbSrc + '" alt="' + item.alt + '" />' +
        '</div>'
      );
    }).join('');

    container.innerHTML =
      '<div class="gallery" data-gallery>' +
        '<div class="main-image">' + mainMedia + '</div>' +
        '<div class="thumbnails">' + thumbs + '</div>' +
      '</div>';

    initGallery(container.querySelector('[data-gallery]'), mainClass);
  }

  function loadDriveEmbed(mainWrap, preview, title) {
    if (!mainWrap || !preview) return;
    mainWrap.classList.add('is-drive-playing');
    mainWrap.innerHTML =
      '<iframe id="main-media" class="drive-embed" src="' + preview + '" title="' + (title || 'Video') + '" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen webkitallowfullscreen playsinline></iframe>';
  }

  function openDriveExternal(viewUrl, preview) {
    const url = viewUrl || (preview ? String(preview).replace('/preview', '/view') : '');
    if (!url) return false;
    window.open(url, '_blank', 'noopener');
    return true;
  }

  function showMainMedia(mainWrap, type, src, poster, alt, mainClass, viewUrl) {
    if (!mainWrap) return;
    mainWrap.classList.remove('is-drive-playing');

    if (type === 'drive') {
      if (src || viewUrl) {
        // Poster + click: en móvil abre Drive; en desktop carga iframe al pedir
        mainWrap.innerHTML = drivePosterHtml(src, viewUrl, poster, alt, mainClass, false);
        bindDrivePoster(mainWrap);
      } else {
        mainWrap.innerHTML =
          '<div class="drive-fallback">' +
            '<img id="main-media" class="' + mainClass + '" src="' + (poster || '') + '" alt="' + (alt || '') + '" decoding="async" />' +
          '</div>';
      }
      return;
    }

    if (type === 'video') {
      mainWrap.innerHTML =
        '<video id="main-media" class="' + mainClass + '" controls playsinline webkit-playsinline autoplay poster="' + (poster || '') + '" src="' + src + '"></video>';
      return;
    }

    // Reutilizar la misma <img> para evitar saltos de scroll al cambiar fotos
    var existing = mainWrap.querySelector('#main-media');
    if (existing && existing.tagName === 'IMG') {
      // Si venimos de un poster/button, volver a un img suelto
      if (existing.closest('.drive-poster, .drive-fallback')) {
        mainWrap.innerHTML =
          '<img id="main-media" class="' + mainClass + '" src="' + src + '" alt="' + (alt || '') + '" decoding="async" />';
        return;
      }
      existing.className = mainClass || '';
      existing.alt = alt || '';
      if (existing.getAttribute('src') !== src) {
        existing.setAttribute('src', src);
      }
      return;
    }

    mainWrap.innerHTML =
      '<img id="main-media" class="' + mainClass + '" src="' + src + '" alt="' + (alt || '') + '" decoding="async" />';
  }

  function bindDrivePoster(mainWrap) {
    if (!mainWrap) return;
    const btn = mainWrap.querySelector('.drive-poster');
    if (!btn || btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', function () {
      const preview = btn.getAttribute('data-drive-preview') || '';
      const viewUrl = btn.getAttribute('data-drive-view') || '';
      const title = btn.getAttribute('data-drive-title') || 'Video';

      // Evita el bug de iPhone: UI de Drive atrapada a mitad de pantalla
      if (shouldOpenDriveExternally()) {
        openDriveExternal(viewUrl, preview);
        return;
      }

      if (preview) {
        loadDriveEmbed(mainWrap, preview, title);
        return;
      }

      openDriveExternal(viewUrl, preview);
    });
  }

  function initGallery(gallery, mainClass) {
    if (!gallery) return;

    const mainWrap = gallery.querySelector('.main-image');
    const thumbItems = gallery.querySelectorAll('.thumb-item');

    bindDrivePoster(mainWrap);

    thumbItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const type = item.getAttribute('data-type') || 'image';
        const full = item.getAttribute('data-full') || '';
        const poster = item.getAttribute('data-poster') || '';
        const viewUrl = item.getAttribute('data-view') || '';
        const alt = item.querySelector('.thumb-img') ? item.querySelector('.thumb-img').alt : '';
        const scrollY = window.scrollY || window.pageYOffset || 0;

        thumbItems.forEach(function (thumb) { thumb.classList.remove('is-active'); });
        item.classList.add('is-active');

        showMainMedia(mainWrap, type, full, poster, alt, mainClass || '', viewUrl);

        // Mantener la posición al cambiar (evita el salto en Aurora / fotos horizontales)
        requestAnimationFrame(function () {
          window.scrollTo(0, scrollY);
          requestAnimationFrame(function () {
            window.scrollTo(0, scrollY);
          });
        });
      });
    });
  }

  function renderActions(container, proyecto) {
    if (!container || !proyecto.actions || !proyecto.actions.length) {
      if (container) container.innerHTML = '';
      return;
    }

    const rows = proyecto.actions.map(function (action) {
      if (action.href && String(action.href).indexOf('PEGAR_LINK') !== -1) return '';

      const href = action.external ? action.href : asset(action.href);
      const attrs = action.external
        ? ' target="_blank" rel="noopener"'
        : (action.download
          ? ' target="_blank" rel="noopener" download="' + (action.download || '') + '"'
          : ' target="_blank" rel="noopener"');

      var prompt = action.external
        ? (action.label && /reel|video|drive/i.test(action.label)
          ? 'Si querés visualizar el proyecto'
          : 'Si querés visitar el proyecto')
        : 'Si querés más información del proyecto';

      return (
        '<div class="project-action-row">' +
          '<p class="project-action-prompt">' + prompt + '</p>' +
          '<svg class="project-action-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
          '</svg>' +
          '<a href="' + href + '"' + attrs + ' class="btn btn-primary project-action-btn">' + action.label + '</a>' +
        '</div>'
      );
    }).join('');

    container.innerHTML = '<div class="project-actions-list">' + rows + '</div>';
  }

  function renderMeta(container, proyecto) {
    if (!container) return;

    if (!proyecto.category && !proyecto.role && !proyecto.tools) {
      container.innerHTML = '';
      container.hidden = true;
      return;
    }

    container.hidden = false;
    container.innerHTML =
      '<div class="project-meta">' +
        (proyecto.category ? '<p><span>Categoría</span> ' + proyecto.category + '</p>' : '') +
        (proyecto.role ? '<p><span>Rol</span> ' + proyecto.role + '</p>' : '') +
        (proyecto.tools ? '<p><span>Herramientas</span> ' + proyecto.tools + '</p>' : '') +
      '</div>';
  }

  function renderProcess(container, proyecto) {
    if (!container) return;

    const items = proyecto.process.map(function (item) {
      return (
        '<div class="golden-item">' +
          '<h3>' + item.title + '</h3>' +
          '<p>' + item.text + '</p>' +
        '</div>'
      );
    }).join('');

    container.innerHTML =
      '<h2>' + proyecto.processTitle + '</h2>' +
      '<div class="golden-vertical">' + items + '</div>';
  }

  function renderOtherProjects(container, currentId) {
    if (!container) return;

    const proyecto = getProyecto(currentId);
    if (!proyecto) return;

    const cards = proyecto.related.map(function (id) {
      const related = getProyecto(id);
      if (!related || related.placeholder) return '';

      return (
        '<a class="other-project-card" href="./' + related.slug + '">' +
          '<div class="other-project-image">' +
            '<img loading="lazy" src="' + asset(related.cardImage) + '" alt="' + related.title + '">' +
          '</div>' +
          '<div class="other-project-content">' +
            '<h3>' + related.title + '</h3>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    container.innerHTML =
      '<h2>Otros proyectos</h2>' +
      '<div class="other-projects-grid">' + cards + '</div>';
  }

  function renderProjectTitle(container, proyecto) {
    if (!container || !proyecto) return;
    container.innerHTML = '<h1>' + proyecto.title + '</h1>';
  }

  function renderProjectDetail(proyectoId) {
    const proyecto = getProyecto(proyectoId);
    if (!proyecto) return;

    document.title = proyecto.title + ' — Rodrigo Caimi';

    renderProjectTitle(document.querySelector('[data-proyecto-title]'), proyecto);
    renderGallery(document.querySelector('[data-proyecto-gallery]'), proyecto);
    renderMeta(document.querySelector('[data-proyecto-meta]'), proyecto);
    renderProcess(document.querySelector('[data-proyecto-process]'), proyecto);
    renderActions(document.querySelector('[data-proyecto-actions]'), proyecto);
    renderOtherProjects(document.querySelector('[data-proyecto-related]'), proyectoId);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.work-container[data-render="grid"]');
    if (grid) {
      renderWorkGrid(grid);
    }

    const proyectoId = Number(document.body.dataset.proyectoId);
    if (proyectoId) {
      renderProjectDetail(proyectoId);
    }
  });
})();
