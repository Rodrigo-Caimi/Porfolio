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

    const layoutOrder = [1, 2, 5, 4, 3];
    const ordered = layoutOrder
      .map(function (id) { return getProyecto(id); })
      .filter(Boolean);

    container.innerHTML = ordered.map(function (proyecto) {
      const thumb = proyecto.cardImage
        ? '<img loading="lazy" alt="' + proyecto.cardAlt + '" src="' + asset(proyecto.cardImage) + '" />'
        : '';

      if (proyecto.placeholder) {
        return (
          '<div class="card ' + proyecto.cardClass + '" aria-label="' + proyecto.title + '">' +
            '<div class="thumb">' + thumb + '</div>' +
            '<div class="card-body">' + proyecto.title + '</div>' +
          '</div>'
        );
      }

      return (
        '<a class="card ' + proyecto.cardClass + '" href="' + proyectoHref(proyecto.slug) + '">' +
          '<div class="thumb">' + thumb + '</div>' +
          '<div class="card-body">' + proyecto.title + '</div>' +
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

  function renderGallery(container, proyecto) {
    if (!container || !proyecto.gallery.length) return;

    const mainClass = proyecto.galleryContain ? 'img-contain' : '';
    const first = proyecto.gallery[0];
    let mainMedia;

    if (isDriveItem(first)) {
      const preview = drivePreviewUrl(first.src);
      const poster = asset(first.poster || '');
      mainMedia = preview
        ? '<iframe id="main-media" class="drive-embed" src="' + preview + '" title="' + first.alt + '" allow="autoplay" allowfullscreen></iframe>'
        : '<a class="drive-fallback" href="#" aria-label="' + first.alt + '">' +
            '<img id="main-media" class="' + mainClass + '" src="' + poster + '" alt="' + first.alt + '" />' +
            '<span class="drive-fallback-label">Subí el video a Drive y pegá el link</span>' +
          '</a>';
    } else if (isVideoItem(first)) {
      mainMedia = '<video id="main-media" class="' + mainClass + '" controls playsinline poster="' + asset(first.poster || '') + '" src="' + asset(first.src) + '"></video>';
    } else {
      mainMedia = '<img id="main-media" class="' + mainClass + '" loading="eager" src="' + asset(first.src) + '" alt="' + first.alt + '" />';
    }

    const thumbs = proyecto.gallery.map(function (item, index) {
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
          '<img class="thumb-img" loading="lazy" src="' + poster + '" alt="' + item.alt + '" />' +
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

  function showMainMedia(mainWrap, type, src, poster, alt, mainClass, viewUrl) {
    if (!mainWrap) return;

    if (type === 'drive') {
      if (src) {
        mainWrap.innerHTML =
          '<iframe id="main-media" class="drive-embed" src="' + src + '" title="' + (alt || 'Video') + '" allow="autoplay" allowfullscreen></iframe>';
      } else if (viewUrl) {
        window.open(viewUrl, '_blank', 'noopener');
      } else {
        mainWrap.innerHTML =
          '<div class="drive-fallback">' +
            '<img id="main-media" class="' + mainClass + '" src="' + (poster || '') + '" alt="' + (alt || '') + '" />' +
            '<span class="drive-fallback-label">Subí el video a Drive y pegá el link</span>' +
          '</div>';
      }
      return;
    }

    if (type === 'video') {
      mainWrap.innerHTML =
        '<video id="main-media" class="' + mainClass + '" controls playsinline autoplay poster="' + (poster || '') + '" src="' + src + '"></video>';
      return;
    }

    mainWrap.innerHTML =
      '<img id="main-media" class="' + mainClass + '" src="' + src + '" alt="' + (alt || '') + '" />';
  }

  function initGallery(gallery, mainClass) {
    if (!gallery) return;

    const mainWrap = gallery.querySelector('.main-image');
    const thumbItems = gallery.querySelectorAll('.thumb-item');

    thumbItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const type = item.getAttribute('data-type') || 'image';
        const full = item.getAttribute('data-full') || '';
        const poster = item.getAttribute('data-poster') || '';
        const viewUrl = item.getAttribute('data-view') || '';
        const alt = item.querySelector('.thumb-img') ? item.querySelector('.thumb-img').alt : '';

        thumbItems.forEach(function (thumb) { thumb.classList.remove('is-active'); });
        item.classList.add('is-active');

        showMainMedia(mainWrap, type, full, poster, alt, mainClass || '', viewUrl);
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
        : ' download="' + (action.download || '') + '"';

      return (
        '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">' +
          '<span style="color:#1C1C1C;font-size:18px;font-weight:500;">' +
            (action.external ? (action.label && action.label.indexOf('reel') !== -1 ? 'Mirá el reel completo' : 'Visualiza el prototipo interactivo') : 'Si quieres más información del proyecto') +
          '</span>' +
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#1C1C1C;">' +
            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
          '</svg>' +
          '<a href="' + href + '"' + attrs + ' class="btn btn-primary" style="padding:10px 20px;font-size:15px;">' + action.label + '</a>' +
        '</div>'
      );
    }).join('');

    container.innerHTML = '<div style="display:flex;flex-direction:column;gap:12px;">' + rows + '</div>';
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
      '<h2>Otros proyectos míos</h2>' +
      '<div class="other-projects-grid">' + cards + '</div>';
  }

  function renderProjectDetail(proyectoId) {
    const proyecto = getProyecto(proyectoId);
    if (!proyecto) return;

    document.title = proyecto.title + ' — Detalle';

    renderGallery(document.querySelector('[data-proyecto-gallery]'), proyecto);
    renderActions(document.querySelector('[data-proyecto-actions]'), proyecto);
    renderProcess(document.querySelector('[data-proyecto-process]'), proyecto);
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
