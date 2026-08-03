const PROYECTOS = [
  {
    id: 1,
    slug: 'proyecto-1.html',
    title: 'Horizonte',
    cardClass: 'card-third',
    cardImage: 'IMAGENES/horizonte-imagen-principal.png',
    cardAlt: 'Horizonte - Creación de marca',
    galleryContain: false,
    gallery: [
      { src: 'IMAGENES/HORIZONTE EN CALLE.png', alt: 'Horizonte en calle' },
      { src: 'IMAGENES/tarjeta de presentacion.png', alt: 'Tarjeta de presentación Horizonte' },
      { src: 'IMAGENES/bolsa horizonte.png', alt: 'Bolsa Horizonte' },
      { src: 'IMAGENES/pin de logo.png', alt: 'Pin de logo Horizonte' }
    ],
    processTitle: 'Proceso del proyecto',
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
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/Afiche-de-campana.webp',
    cardAlt: 'Mayo Amarillo - Campaña',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/Afiche-de-campana.webp', alt: 'Afiche de campaña Mayo Amarillo' },
      { src: 'IMAGENES/5-PosteoIgMayo.webp', alt: 'Posteo Instagram Mayo Amarillo 5' },
      { src: 'IMAGENES/4-PosteoIGMayoa.png', alt: 'Posteo Instagram Mayo Amarillo 4' },
      { src: 'IMAGENES/1-PosteoIgMayoA.webp', alt: 'Posteo Instagram Mayo Amarillo EN VIVO' }
    ],
    processTitle: 'Proceso del proyecto',
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
        href: 'DOCUMENTOS/Mayo%20Amarillo.pdf',
        download: 'Mayo-Amarillo-campaña.pdf'
      }
    ],
    related: [1, 4]
  },
  {
    id: 3,
    slug: 'proyecto-3.html',
    title: 'Totem de Café',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/TOTEM-CAFE.png',
    cardAlt: 'Totem de Café - Interfaz digital',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/TOTEM-CAFE.png', alt: 'Totem de Café - Menú principal' },
      { src: 'IMAGENES/RECARGA-CAFE.png', alt: 'Recarga completada Totem de Café' },
      { src: 'IMAGENES/METODO-DE-PAGO CAFE.png', alt: 'Pago Totem de Café' },
      { src: 'IMAGENES/COMPRACAFE.png', alt: 'Gracias por su compra Totem de Café' }
    ],
    processTitle: 'Diseño de experiencia',
    process: [
      {
        title: 'Objetivo',
        text: 'Crear una experiencia digital intuitiva que mejore la interacción de los clientes, facilitando la visualización del menú y la gestión de pedidos de manera eficiente, mejorando cada punto de contacto entre cliente y cafetería.'
      },
      {
        title: 'Metodología',
        text: 'Investigación de usuarios y diseño centrado en la usabilidad, prototipado interactivo en Figma con iteraciones basadas en feedback constante, garantizando una interfaz clara, funcional y accesible para todos.'
      },
      {
        title: 'Resultado',
        text: 'Un totem digital con interfaz moderna que permite navegar intuitivamente, realizando pedidos con facilidad y mejorando significativamente la experiencia del cliente. Un sistema completo que optimiza el flujo de compra y atención.'
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
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/fotografia cerveza.jpg',
    cardAlt: 'Proyecto Fotográfico',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/fotografia cerveza.jpg', alt: 'Fotografía cerveza' },
      { src: 'IMAGENES/joyeriaCreacion.jpg', alt: 'Joyeria Creación' },
      { src: 'IMAGENES/lo-que-no-vemos4.JPG', alt: 'Lo que no vemos 4' },
      { src: 'IMAGENES/lo-que-no-vemos.JPG', alt: 'Lo que no vemos' }
    ],
    processTitle: 'Proceso del proyecto',
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
        href: 'DOCUMENTOS/Proyecto%20fotografico.pdf',
        download: 'Proyecto-fotografico.pdf'
      }
    ],
    related: [1, 3]
  },
  {
    id: 5,
    slug: 'proyecto-5.html',
    title: 'Campaña Reel ORT',
    cardClass: 'card-pair',
    cardImage: 'IMAGENES/Frame1 Final (2).png',
    cardAlt: 'Campaña Reel ORT',
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
    processTitle: 'Proceso del proyecto',
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
    cardClass: 'card-third',
    cardImage: 'IMAGENES/noir-interior.png',
    cardAlt: 'Noir Estudio - Identidad de marca',
    galleryContain: true,
    gallery: [
      { src: 'IMAGENES/noir-interior.png', alt: 'Interior Noir Barbería & Estilo' },
      { src: 'IMAGENES/noir-herramientas.png', alt: 'Herramientas y productos Noir Estudio' },
      { src: 'IMAGENES/noir-productos.png', alt: 'Línea de coloración Noir Estudio' },
      { src: 'IMAGENES/noir-experiencia.png', alt: 'Experiencia Noir Estudio' }
    ],
    processTitle: 'Proceso del proyecto',
    process: [
      {
        title: 'Concepto de marca',
        text: 'Noir Estudio nace como una barbería & estilo de estética premium. Se buscó una identidad oscura, elegante y contemporánea, con tipografía limpia y una paleta de negros, carbón y acentos dorados que transmiten exclusividad.'
      },
      {
        title: 'Diseño en Figma',
        text: 'En Figma se construyó el sistema visual: logo, aplicaciones de marca, mockups de productos, ambientación del local y piezas de comunicación. Cada soporte se diseñó para mantener coherencia entre el espacio físico y la experiencia de marca.'
      },
      {
        title: 'Resultado',
        text: 'Un universo de marca completo para Noir Estudio, con identidad aplicada a interiorismo, packaging y herramientas profesionales. El sistema comunica sofisticación y precisión en cada detalle del servicio.'
      }
    ],
    actions: [
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
    cardClass: 'card-third',
    cardImage: 'IMAGENES/don-pascual-botella-fuego.png',
    cardAlt: 'Don Pascual - Edición Limitada Invierno 2026',
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
    processTitle: 'Proceso del proyecto',
    process: [
      {
        title: 'Campaña y concepto',
        text: 'Campaña publicitaria para la Edición Limitada Invierno 2026 de vino blanco Don Pascual. Se trabajó una narrativa cálida y premium: reinterpretación de logo, etiqueta con ilustración y un video promocional que comunica la experiencia de la cosecha especial.'
      },
      {
        title: 'Producción con IA',
        text: 'Las imágenes se generaron con ChatGPT. El video se creó en Runway, la música en Suno y los diálogos en ElevenLabs. El flujo combina generación de piezas fijas, movimiento, audio y voz para construir la campaña completa.'
      },
      {
        title: 'Resultado',
        text: 'Un sistema de piezas para la edición limitada: etiqueta ilustrada, aplicaciones de marca y video publicitario. La campaña conecta el producto con una atmósfera de invierno íntima y contemporánea.'
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
