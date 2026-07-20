// Maneja el formulario de carga: lee los archivos, los convierte a data URL
// (texto que se puede guardar) y publica la propiedad.

// Convierte un archivo de imagen en una cadena base64 que el navegador puede mostrar.
function archivoADataURL(file) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.onload = () => resolve(lector.result);
    lector.onerror = reject;
    lector.readAsDataURL(file);
  });
}

// Cambia la etiqueta del precio segun venta/arriendo.
const selOperacion = document.getElementById("operacion");
const lblPrecio = document.getElementById("lblPrecio");
selOperacion.addEventListener("change", () => {
  lblPrecio.textContent =
    selOperacion.value === "arriendo" ? "Precio mensual (CLP)" : "Precio (UF)";
});

// Vista previa de fotos al elegirlas.
let fotosData = [];
document.getElementById("fotos").addEventListener("change", async (e) => {
  const previa = document.getElementById("previaFotos");
  previa.innerHTML = "";
  fotosData = [];
  for (const file of e.target.files) {
    const url = await archivoADataURL(file);
    fotosData.push(url);
    const img = document.createElement("img");
    img.src = url;
    previa.appendChild(img);
  }
});

// Vista previa del tour 360.
let tour360Data = null;
document.getElementById("tour360").addEventListener("change", async (e) => {
  const previa = document.getElementById("previaTour");
  previa.innerHTML = "";
  tour360Data = null;
  if (e.target.files[0]) {
    tour360Data = await archivoADataURL(e.target.files[0]);
    const img = document.createElement("img");
    img.src = tour360Data;
    previa.appendChild(img);
  }
});

// Enviar formulario.
document.getElementById("formCarga").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;

  if (fotosData.length === 0) {
    alert("Agrega al menos una foto.");
    return;
  }

  const operacion = f.operacion.value;
  const precio = parseFloat(f.precio.value) || 0;

  const prop = {
    titulo: f.titulo.value.trim(),
    operacion,
    precioUF: operacion === "venta" ? precio : null,
    precioCLP: operacion === "arriendo" ? precio : null,
    comuna: f.comuna.value.trim(),
    ciudad: f.ciudad.value.trim(),
    dormitorios: parseInt(f.dormitorios.value) || 0,
    banos: parseInt(f.banos.value) || 0,
    estacionamientos: parseInt(f.estacionamientos.value) || 0,
    metrosUtiles: parseInt(f.metrosUtiles.value) || 0,
    metrosTotales: null,
    descripcion: f.descripcion.value.trim(),
    destacados: f.destacados.value
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean),
    fotos: fotosData,
    video: null,
    tour360: tour360Data,
    whatsapp: f.whatsapp.value.replace(/[^0-9]/g, ""),
  };

  try {
    const guardada = agregarPropiedad(prop);
    location.href = "propiedad.html?id=" + guardada.id;
  } catch (err) {
    alert(
      "No se pudo guardar (el navegador tiene un limite de espacio). " +
        "Prueba con fotos mas livianas. Detalle: " + err.message
    );
  }
});
