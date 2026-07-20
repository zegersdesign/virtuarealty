// Base de datos de propiedades (demo).
// Para agregar una propiedad nueva, copia un bloque { ... } y cambia los datos.
// En el MVP final esto vendra desde el panel de carga y/o una base de datos.

const PROPIEDADES = [
  {
    id: "casa-las-condes-001",
    titulo: "Casa luminosa en Las Condes",
    operacion: "venta",            // "venta" o "arriendo"
    precioUF: 12500,               // precio en UF (venta)
    precioCLP: null,               // si es arriendo, monto mensual en CLP
    comuna: "Las Condes",
    ciudad: "Santiago",
    dormitorios: 4,
    banos: 3,
    estacionamientos: 2,
    metrosUtiles: 180,
    metrosTotales: 320,
    descripcion:
      "Casa familiar con excelente luz natural, amplio living-comedor, " +
      "cocina equipada y jardin con quincho. A pasos del metro y colegios. " +
      "Lista para entrar a vivir.",
    destacados: [
      "Jardin con quincho",
      "Cocina equipada",
      "Cerca del metro",
      "Sin gastos comunes",
    ],
    // Fotos: por ahora desde Unsplash. Reemplaza por tus propias fotos.
    fotos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    // Video vertical para redes (opcional). Si no hay, deja null.
    video: null,
    // Imagen equirectangular 360 del living. Reemplaza por tu foto Insta360.
    tour360: "assets/img/tour-living.jpg",
    // WhatsApp del corredor (formato internacional, sin + ni espacios).
    whatsapp: "56912345678",
  },
];
