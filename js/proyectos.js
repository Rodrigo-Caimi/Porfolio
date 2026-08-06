const PROYECTOS = [
  {
    id: 1,
    slug: 'proyecto-1.html',
    title: 'Horizonte',
    category: 'Branding',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/horizonte-imagen-principal.png',
    cardAlt: 'Horizonte - Creación de marca',
    role: 'Identidad de marca: concepto, sistema visual y aplicaciones',
    tools: 'Illustrator, Photoshop',
    galleryContain: false,
    gallery: [
      { src: 'IMAGENES/HORIZONTE EN CALLE.png', alt: 'Horizonte en calle' },
      { src: 'IMAGENES/tarjeta de presentacion.png', alt: 'Tarjeta de presentación Horizonte' },
      { src: 'IMAGENES/bolsa horizonte.png', alt: 'Bolsa Horizonte' },
      { src: 'IMAGENES/pin de logo.png', alt: 'Pin de logo Horizonte' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Cómo se pensó este proyecto',
        text: 'Horizonte surge de explorar un estudio de diseño que mira adelante. El concepto conecta "horizonte" con nuevas perspectivas. Se desarrolló una identidad que comunica innovación, claridad y amplitud, pensando en cómo el estudio se proyecta hacia el futuro del diseño gráfico.'
      },
      {
        title: 'Desarrollo y exploración',
        text: 'El proceso partió de la investigación sobre la marca Horizonte. Se exploraron múltiples direcciones visuales, definiendo tipografía y paleta. Se trabajó en soportes: señalética urbana, papelería, merchandising y piezas digitales, probando la flexibilidad del sistema en cada aplicación.'
      },
      {
        title: 'Resultado conceptual',
        text: 'Se logró un sistema de identidad completo y cohesivo. Funciona en múltiples contextos desde la calle hasta una tarjeta. Cada elemento refuerza la idea de una visión amplia y proyectada, manteniendo coherencia visual y comunicando valores de la marca constantemente.'
      }
    ],
    actions: [
      {
        label: 'Manual de marca',
        href: 'DOCUMENTOS/Manual-marca-Horizonte.pdf',
        download: 'Manual-marca-Horizonte.pdf'
      }
    ],
    related: [2, 3]
  },
  {
    id: 2,
    slug: 'proyecto-2.html',
    title: 'Mayo Amarillo',
    category: 'Campaña',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/mayo-amarillo-card.jpg',
    cardAlt: 'Mayo Amarillo - Campaña',
    role: 'Campaña de concientización: concepto, piezas gráficas y piezas digitales',
    tools: 'Photoshop, Illustrator',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/Afiche-de-campana.webp', alt: 'Afiche de campaña Mayo Amarillo' },
      { src: 'IMAGENES/5-PosteoIgMayo.webp', alt: 'Posteo Instagram Mayo Amarillo 5' },
      { src: 'IMAGENES/4-PosteoIGMayoa.png', alt: 'Posteo Instagram Mayo Amarillo 4' },
      { src: 'IMAGENES/1-PosteoIgMayoA.webp', alt: 'Posteo Instagram Mayo Amarillo EN VIVO' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Cómo se pensó esta campaña',
        text: 'Mayo Amarillo busca concientizar sobre la responsabilidad humana en el tránsito. La campaña impacta emocionalmente y genera reflexión sobre las consecuencias, usando la narrativa visual como herramienta de comunicación efectiva en espacios públicos y medios.'
      },
      {
        title: 'Desarrollo y producción',
        text: 'El proceso involucró investigación sobre casos reales y desarrollo de conceptos visuales, transmitiendo urgencia y responsabilidad en piezas tradicionales y digitales. Se trabajó con selective color para resaltar elementos clave del mensaje central.'
      },
      {
        title: 'Resultado y alcance',
        text: 'La campaña logró generar conciencia sobre la seguridad vial con mensajes claros, visualmente impactantes que conectan con la audiencia en múltiples canales, funcionando en formato impreso y redes sociales y manteniendo coherencia visual constantemente.'
      }
    ],
    actions: [
      {
        label: 'Información de la campaña',
        href: 'DOCUMENTOS/Mayo-amarillo-porfolio.pdf',
        download: 'Mayo-amarillo-porfolio.pdf'
      }
    ],
    related: [1, 4]
  },
  {
    id: 3,
    slug: 'proyecto-3.html',
    title: 'Totem de Café',
    category: 'UX/UI',
    cardClass: 'card-third',
    cardImage: 'IMAGENES/TOTEM-CAFE.png',
    cardAlt: 'Totem de Café - Interfaz digital',
    role: 'Diseño UX/UI end-to-end: flujos, pantallas y prototipo interactivo',
    tools: 'Figma',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/TOTEM-CAFE.png', alt: 'Totem de Café - Menú principal' },
      { src: 'IMAGENES/RECARGA-CAFE.png', alt: 'Recarga completada Totem de Café' },
      { src: 'IMAGENES/METODO-DE-PAGO CAFE.png', alt: 'Pago Totem de Café' },
      { src: 'IMAGENES/COMPRACAFE.png', alt: 'Gracias por su compra Totem de Café' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Problema',
        text: 'En una cafetería, el pedido en mostrador genera filas, dudas sobre el menú y fricción al pagar. Hacía falta una interfaz de totem clara para elegir, confirmar y pagar sin depender de una explicación oral.'
      },
      {
        title: 'Mi rol',
        text: 'Diseñé la experiencia de punta a punta: flujos de usuario, arquitectura de pantallas, prototipo interactivo en Figma y criterios de usabilidad para menú, recarga y métodos de pago.'
      },
      {
        title: 'Decisión clave',
        text: 'Prioricé un recorrido lineal y predecible (menú → pedido → pago → confirmación) en lugar de un menú denso con muchas opciones a la vez. Menos carga cognitiva, más velocidad en el totem.'
      },
      {
        title: 'Resultado',
        text: 'Un prototipo navegable que demuestra un pedido completo en pocos pasos, con pantallas consistentes y un flujo listo para validar con usuarios reales o pasar a desarrollo.'
      }
    ],
    actions: [
      {
        label: 'Documentación del proyecto',
        href: 'DOCUMENTOS/Totem-porfolio.pdf',
        download: 'Totem-porfolio.pdf'
      },
      {
        label: 'Ver prototipo en Figma',
        href: 'https://www.figma.com/proto/G9Ekaxi9RBCIMgIpGvHD1L/Totem-de-Caf%C3%A9?node-id=144-176&t=isyDNesqZTwTblLN-1&scaling=scale-down&content-scaling=fixed&page-id=74%3A556&starting-point-node-id=80%3A1112',
        external: true
      }
    ],
    related: [1, 4]
  },
  {
    id: 4,
    slug: 'proyecto-4.html',
    title: 'Proyecto Fotográfico',
    category: 'Fotografía',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/fotografia cerveza.jpg',
    cardAlt: 'Proyecto Fotográfico',
    role: 'Fotografía de producto y exploración técnica',
    tools: 'Cámara, Lightroom, Photoshop',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/fotografia cerveza.jpg', alt: 'Fotografía cerveza' },
      { src: 'IMAGENES/joyeriaCreacion.jpg', alt: 'Joyeria Creación' },
      { src: 'IMAGENES/lo-que-no-vemos4.JPG', alt: 'Lo que no vemos 4' },
      { src: 'IMAGENES/lo-que-no-vemos.JPG', alt: 'Lo que no vemos' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Objetivo',
        text: 'Explorar diferentes técnicas fotográficas para capturar la esencia de productos y espacios, combinando creatividad técnica con narrativa visual para comunicar mensajes de marca de manera impactante.'
      },
      {
        title: 'Técnicas aplicadas',
        text: 'Implementé técnicas avanzadas como barrido para crear dinamismo y movimiento, junto con iluminación controlada y composición estratégica para destacar texturas, colores y detalles que potencian la identidad visual de cada producto.'
      },
      {
        title: 'Resultado',
        text: 'Una serie fotográfica que integra diferentes técnicas creativas aplicadas a la fotografía de producto y espacios, generando imágenes que se transforman en recursos visuales para campañas publicitarias, packaging y material promocional.'
      }
    ],
    actions: [
      {
        label: 'Documentación del proyecto',
        href: 'DOCUMENTOS/Proyecto-fotografico-porfolio.pdf',
        download: 'Proyecto-fotografico-porfolio.pdf'
      }
    ],
    related: [1, 3]
  },
  {
    id: 5,
    slug: 'proyecto-5.html',
    title: 'Campaña Reel ORT',
    category: 'Audiovisual',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/ort-reel-card.jpg',
    cardAlt: 'Campaña Reel ORT',
    role: 'Reel promocional: concepto, generación audiovisual y edición',
    tools: 'ChatGPT, Runway, Premiere',
    galleryContain: true,
    gallery: [
      {
        type: 'drive',
        // Pegá acá el link de Drive (cualquiera de estos formatos funciona):
        // https://drive.google.com/file/d/ID_DEL_ARCHIVO/view
        src: 'https://drive.google.com/file/d/1jJUfmDSgZgIW8X82zi6upIzRgT_ATak-/view?usp=sharing',
        poster: 'IMAGENES/Frame1 Final (2).png',
        alt: 'Reel final Campaña ORT'
      },
      { src: 'IMAGENES/Frame1 Final (2).png', alt: 'Frame 1 - Entrada ORT' },
      { src: 'IMAGENES/Frame2 Final.png', alt: 'Frame 2' },
      { src: 'IMAGENES/Frame3 Final.png', alt: 'Frame 3' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Concepto y personaje',
        text: 'A partir del brief de ORT se definió la narrativa del reel y se creó un personaje con ChatGPT. Desde ahí se generaron las imágenes clave que guían la historia visual de la campaña.'
      },
      {
        title: 'Video y voces con IA',
        text: 'Las piezas fijas pasaron a movimiento en Runway, generando las secuencias de video. Las voces también se generaron con inteligencia artificial, alineadas al tono y al ritmo del relato.'
      },
      {
        title: 'Edición y pieza final',
        text: 'El material se editó en Premiere para unir imagen, video y voces generadas con IA. El resultado es un reel promocional que combina creación de personaje, generación audiovisual y postproducción.'
      }
    ],
    actions: [
      {
        label: 'Documentación del proyecto',
        href: 'DOCUMENTOS/ORT-porfolio.pdf',
        download: 'ORT-porfolio.pdf'
      },
      {
        label: 'Ver reel en Drive',
        href: 'https://drive.google.com/file/d/1jJUfmDSgZgIW8X82zi6upIzRgT_ATak-/view?usp=sharing',
        external: true
      }
    ],
    related: [1, 2]
  },
  {
    id: 6,
    slug: 'proyecto-6.html',
    title: 'Noir Estudio',
    category: 'Branding',
    cardClass: 'card-third',
    cardImage: 'IMAGENES/noir-interior-card.jpg',
    cardAlt: 'Noir Estudio - Identidad de marca',
    role: 'Dirección de identidad: concepto, sistema visual y aplicaciones',
    tools: 'Figma',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/noir-interior.png', alt: 'Interior Noir Barbería & Estilo' },
      { src: 'IMAGENES/noir-herramientas.png', alt: 'Herramientas y productos Noir Estudio' },
      { src: 'IMAGENES/noir-productos.png', alt: 'Línea de coloración Noir Estudio' },
      { src: 'IMAGENES/noir-experiencia.png', alt: 'Experiencia Noir Estudio' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Problema',
        text: 'Noir Estudio necesitaba una identidad premium para barbería & estilo: verse exclusivo sin perder claridad en local, packaging y comunicación. El riesgo era caer en un look genérico “oscuro” sin sistema.'
      },
      {
        title: 'Mi rol',
        text: 'Definí el concepto de marca y construí el sistema visual en Figma: logo, aplicaciones, mockups de productos, ambientación del espacio y piezas de comunicación con una misma lógica tipográfica y cromática.'
      },
      {
        title: 'Decisión clave',
        text: 'Elegí una paleta de negros/carbón con acentos dorados y tipografía limpia, en vez de sobrecargar con texturas o efectos. La sobriedad sostiene la percepción premium y escala mejor a distintos soportes.'
      },
      {
        title: 'Resultado',
        text: 'Un universo de marca coherente entre interior, productos y piezas gráficas, listo para presentarse como caso de estudio y para iterar aplicaciones reales del local.'
      }
    ],
    actions: [
      {
        label: 'Documentación del proyecto',
        href: 'DOCUMENTOS/Noir-estudio-porfolio.pdf',
        download: 'Noir-estudio-porfolio.pdf'
      },
      {
        label: 'Ver diseño en Figma',
        href: 'https://www.figma.com/design/NUjf3slMWEIzsOJaHKwF4n/Noir-Estudio?node-id=321-15&t=XFBXzoCxvzPb1thY-1',
        external: true
      }
    ],
    related: [3, 1]
  },
  {
    id: 7,
    slug: 'proyecto-7.html',
    title: 'Don Pascual',
    category: 'Campaña',
    cardClass: 'card-third',
    cardImage: 'IMAGENES/don-pascual-card.jpg',
    cardAlt: 'Don Pascual - Edición Limitada Invierno 2026',
    role: 'Campaña integral: concepto, piezas fijas, video y audio',
    tools: 'ChatGPT, Runway, Suno, ElevenLabs',
    galleryContain: true,
    gallery: [
      {
        type: 'drive',
        src: 'https://drive.google.com/file/d/1WydlpYJ0gdyQRTn3j-sHAU-dG0CKaq5O/view?usp=sharing',
        poster: 'IMAGENES/don-pascual-botella-fuego.png',
        alt: 'Video campaña Don Pascual Edición Limitada Invierno 2026'
      },
      { src: 'IMAGENES/don-pascual-afiche.png', alt: 'Afiche Don Pascual Edición Limitada' },
      { src: 'IMAGENES/don-pascual-campana.png', alt: 'Mockup terminado campaña Don Pascual' },
      { src: 'IMAGENES/don-pascual-botella.png', alt: 'Botella Don Pascual Chardonnay 2026' },
      { src: 'IMAGENES/don-pascual-etiqueta.jpg', alt: 'Etiqueta con ilustración Don Pascual' },
      { src: 'IMAGENES/don-pascual-omnibus.png', alt: 'Mockup publicidad en ómnibus Don Pascual' }
    ],
    processTitle: 'Cómo se pensó este proyecto',
    process: [
      {
        title: 'Problema',
        text: 'La Edición Limitada Invierno 2026 de Don Pascual necesitaba una campaña premium coherente: etiqueta, video y piezas de comunicación con una misma atmósfera, sin parecer un collage de herramientas distintas.'
      },
      {
        title: 'Mi rol',
        text: 'Definí el concepto creativo y produje el sistema de campaña: reinterpretación de marca, etiqueta ilustrada, afiche, aplicaciones y video promocional con música y voces alineadas al tono.'
      },
      {
        title: 'Decisión clave',
        text: 'Prioricé una narrativa cálida de invierno —íntima y contemporánea— y usé IA solo donde aceleraba producción (imagen, movimiento, audio), manteniendo dirección creativa y coherencia visual en todas las piezas.'
      },
      {
        title: 'Resultado',
        text: 'Un set de campaña listo para presentar: etiqueta, mockups de marca, piezas gráficas y video publicitario que conectan el producto con una atmósfera de cosecha especial.'
      }
    ],
    actions: [
      {
        label: 'Documentación del proyecto',
        href: 'DOCUMENTOS/DON-PASCUAL.pdf',
        download: 'DON-PASCUAL.pdf'
      },
      {
        label: 'Ver video en Drive',
        href: 'https://drive.google.com/file/d/1WydlpYJ0gdyQRTn3j-sHAU-dG0CKaq5O/view?usp=sharing',
        external: true
      }
    ],
    related: [6, 5]
  }
];
