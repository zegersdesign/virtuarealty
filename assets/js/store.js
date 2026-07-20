// Almacen compartido de propiedades.
// Junta las propiedades de ejemplo (propiedades.js) con las que el usuario
// carga desde el panel (guardadas en el navegador con localStorage).
// En el MVP final, localStorage se reemplaza por una base de datos real.

const CLAVE_STORAGE = "vivatour_propiedades";

function leerCargadas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || [];
  } catch (e) {
    return [];
  }
}

function guardarCargadas(lista) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(lista));
}

// Lista completa: primero las cargadas (mas nuevas arriba), luego las de ejemplo.
function obtenerPropiedades() {
  const semilla = typeof PROPIEDADES !== "undefined" ? PROPIEDADES : [];
  return [...leerCargadas(), ...semilla];
}

function buscarPropiedad(id) {
  return obtenerPropiedades().find((p) => p.id === id) || null;
}

function agregarPropiedad(prop) {
  const lista = leerCargadas();
  prop.id = "prop-" + Date.now();
  lista.unshift(prop);
  guardarCargadas(lista);
  return prop;
}

function eliminarCargada(id) {
  guardarCargadas(leerCargadas().filter((p) => p.id !== id));
}

// --- Formato y enlaces ---

function formatearPrecio(p) {
  if (p.operacion === "arriendo" && p.precioCLP) {
    return `$${Number(p.precioCLP).toLocaleString("es-CL")} <small>/ mes</small>`;
  }
  if (p.precioUF) {
    return `UF ${Number(p.precioUF).toLocaleString("es-CL")} <small>aprox.</small>`;
  }
  return "Consultar precio";
}

function linkWhatsApp(p) {
  const msg = encodeURIComponent(
    `Hola, vi la propiedad "${p.titulo}" (${p.comuna}) en VivaTour y quiero mas informacion.`
  );
  return `https://wa.me/${p.whatsapp}?text=${msg}`;
}
