export const navLinks = [
  { label: "01 Inicio", path: "/", bg: "bg-[#FFE600] text-black" },
  { label: "02 Lineup", path: "/lineup", bg: "bg-[#00E5FF] text-black" },
  { label: "03 Galería", path: "/galeria", bg: "bg-[#FF0055] text-white" },
  { label: "04 Entradas", path: "/entradas", bg: "bg-white text-black" },
  { label: "05 Mapa", path: "/mapa", bg: "bg-[#0047FF] text-white" },
  { label: "06 Club", path: "/club", bg: "bg-[#FFE600] text-black" }
];

export const warholFotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1780766136511-dbacfcd8246a?auto=format&fit=crop&w=500&q=80",
    alt: "Vinilo Pop Art",
    marcoBg: "bg-[#00E5FF]",
    filtro: ""
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1789496820224-37b9f405fbe7?auto=format&fit=crop&w=500&q=80",
    alt: "Concierto en vivo",
    marcoBg: "bg-[#FF0055]",
    filtro: ""
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1789496820224-37b9f405fbe7?auto=format&fit=crop&w=500&q=80",
    alt: "Escenario Pop",
    marcoBg: "bg-[#FFE600]",
    filtro: "grayscale contrast-125"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1780766136511-dbacfcd8246a?auto=format&fit=crop&w=500&q=80",
    alt: "Cultura Vinilo",
    marcoBg: "bg-[#0047FF]",
    filtro: "grayscale contrast-125"
  }
];

export const lineupArtistas = [
  {
    id: 1,
    horario: "Vie · 21:00",
    badgeBg: "bg-black text-white",
    nombre: "The Pixels",
    descripcion: "Synth-pop y visuales retro en el escenario central.",
    cardBg: "bg-[#FFE600] text-black"
  },
  {
    id: 2,
    horario: "Vie · 23:00",
    badgeBg: "bg-[#FFE600] text-black border border-black",
    nombre: "Neon Wave",
    descripcion: "Electro-funk directo desde Madrid.",
    cardBg: "bg-[#FF0055] text-white"
  },
  {
    id: 3,
    horario: "Sáb · 20:30",
    badgeBg: "bg-[#0047FF] text-white",
    nombre: "Luna Pop",
    descripcion: "Indie pop con estética cómic en vivo.",
    cardBg: "bg-white text-black"
  },
  {
    id: 4,
    horario: "Sáb · 22:30",
    badgeBg: "bg-white text-black",
    nombre: "DJ Halftone",
    descripcion: "Sesión 100% vinilos disco y house.",
    cardBg: "bg-[#0047FF] text-white"
  },
  {
    id: 5,
    horario: "Dom · 19:00",
    badgeBg: "bg-[#FF0055] text-white",
    nombre: "Retro Kit",
    descripcion: "Guitarras garage y energía de los 60s.",
    cardBg: "bg-white text-black"
  },
  {
    id: 6,
    horario: "Dom · 21:30",
    badgeBg: "bg-[#00E5FF] text-black border border-black",
    nombre: "Sonic Ink",
    descripcion: "Cierre explosivo con banda y muralistas.",
    cardBg: "bg-[#FFE600] text-black"
  }
];

export const zonasArte = [
  {
    id: 1,
    zona: "ZONA A",
    zonaBg: "bg-[#FFE600] text-black",
    titulo: "Feria del Vinilo",
    descripcion: "Más de 40 stands con ediciones limitadas, portadas clásicas y tornamesas.",
    imagen: "https://images.unsplash.com/photo-1780766136511-dbacfcd8246a?auto=format&fit=crop&w=700&q=80",
    alt: "Mercado de Vinilos",
    marcoBg: "bg-[#00E5FF]",
    cardBg: "bg-white text-black",
    textoBg: "text-neutral-700",
    tipo: "imagen"
  },
  {
    id: 2,
    zona: "ZONA B",
    zonaBg: "bg-[#FF0055] text-white",
    titulo: "Murales en Vivo",
    descripcion: "12 ilustradores Pop Art pintando lienzos gigantes frente al público.",
    imagen: "https://images.unsplash.com/photo-1789496820224-37b9f405fbe7?auto=format&fit=crop&w=700&q=80",
    alt: "Escenario Pop",
    marcoBg: "bg-[#0047FF]",
    cardBg: "bg-[#FFE600] text-black",
    textoBg: "text-black",
    tipo: "imagen"
  },
  {
    id: 3,
    zona: "ZONA C",
    zonaBg: "bg-white text-black",
    titulo: "Museo Cómic",
    descripcion: "Cabinas de fotos estilo historieta y exhibición de serigrafía.",
    imagen: "",
    alt: "Museo Cómic",
    marcoBg: "bg-white",
    cardBg: "bg-[#00E5FF] text-black",
    textoBg: "text-black",
    tipo: "comic"
  }
];

export const entradasPlanes = [
  {
    id: 1,
    nombre: "Pase Día",
    badgeBg: "bg-white text-black",
    precio: "$35",
    beneficios: [
      "Acceso general 1 día",
      "Todos los escenarios",
      "Feria del vinilo y murales"
    ],
    botonTexto: "Comprar Día",
    botonBg: "bg-white text-black hover:bg-[#FFE600]",
    cardBg: "bg-[#00E5FF] text-black",
    destacado: false
  },
  {
    id: 2,
    nombre: "Full VIP 3 Días",
    badgeBg: "bg-black text-white",
    precio: "$85",
    beneficios: [
      "Acceso los 3 días sin filas",
      "Póster serigrafiado oficial",
      "Zona lounge y barra libre"
    ],
    botonTexto: "Comprar VIP",
    botonBg: "bg-[#FF0055] text-white hover:bg-black",
    cardBg: "bg-[#FFE600] text-black",
    destacado: true
  },
  {
    id: 3,
    nombre: "Pack x4 Amigos",
    badgeBg: "bg-[#FFE600] text-black",
    precio: "$120",
    beneficios: [
      "4 pases generales de 1 día",
      "Totebag Pop Art de regalo",
      "Descuento en merch oficial"
    ],
    botonTexto: "Comprar Pack",
    botonBg: "bg-white text-black hover:bg-[#00E5FF]",
    cardBg: "bg-[#FF0055] text-white",
    destacado: false
  }
];

export const datosRecinto = [
  {
    id: 1,
    numero: "12",
    etiqueta: "Murales Gigantes",
    bg: "bg-[#00E5FF] text-black"
  },
  {
    id: 2,
    numero: "18",
    etiqueta: "Food Trucks",
    bg: "bg-[#FF0055] text-white"
  }
];