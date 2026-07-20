// Lee ?id= de la URL y dibuja la ficha completa de esa propiedad.

function render(p) {
  const wsp = linkWhatsApp(p);
  const ficha = document.getElementById("ficha");

  ficha.innerHTML = `
    <div class="galeria">
      <span class="badge">${p.operacion === "arriendo" ? "Arriendo" : "Venta"}</span>
      <img class="principal" id="fotoPrincipal" src="${p.fotos[0]}" alt="${p.titulo}" />
      <div class="miniaturas" id="miniaturas">
        ${p.fotos
          .map(
            (f, i) =>
              `<img src="${f}" data-src="${f}" class="${i === 0 ? "activa" : ""}" alt="Foto ${i + 1}" />`
          )
          .join("")}
      </div>
    </div>

    <div class="cuerpo">
      <h1>${p.titulo}</h1>
      <p class="ubic">${p.comuna}, ${p.ciudad}</p>
      <p class="precio">${formatearPrecio(p)}</p>

      <div class="specs">
        <div class="spec"><b>${p.dormitorios}</b><span>Dormitorios</span></div>
        <div class="spec"><b>${p.banos}</b><span>Banos</span></div>
        <div class="spec"><b>${p.metrosUtiles}</b><span>m&sup2; utiles</span></div>
        <div class="spec"><b>${p.estacionamientos}</b><span>Estac.</span></div>
      </div>

      ${
        p.tour360
          ? `<div class="seccion-titulo">Tour virtual 360&deg;</div>
             <div class="tour360" id="tour360"></div>
             <p class="tour-aviso">Arrastra para mirar en todas las direcciones.</p>`
          : ""
      }

      <div class="seccion-titulo">Descripcion</div>
      <p class="descripcion">${p.descripcion || ""}</p>

      ${
        p.destacados && p.destacados.length
          ? `<ul class="destacados">${p.destacados.map((d) => `<li>${d}</li>`).join("")}</ul>`
          : ""
      }

      <div class="acciones">
        <a class="btn btn-wsp" href="${wsp}" target="_blank" rel="noopener">Contactar por WhatsApp</a>
        <a class="btn btn-sec" href="tel:+${p.whatsapp}">Llamar</a>
      </div>
    </div>
  `;

  const principal = document.getElementById("fotoPrincipal");
  document.querySelectorAll("#miniaturas img").forEach((mini) => {
    mini.addEventListener("click", () => {
      principal.src = mini.dataset.src;
      document.querySelectorAll("#miniaturas img").forEach((m) => m.classList.remove("activa"));
      mini.classList.add("activa");
    });
  });

  if (window.pannellum && p.tour360) {
    pannellum.viewer("tour360", {
      type: "equirectangular",
      panorama: p.tour360,
      autoLoad: true,
      autoRotate: -2,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
    });
  }

  document.getElementById("wspFlotante").href = wsp;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id");
  const p = id ? buscarPropiedad(id) : obtenerPropiedades()[0];
  if (!p) {
    document.getElementById("ficha").innerHTML =
      '<div class="cuerpo"><p class="vacio">Propiedad no encontrada. <a href="index.html">Volver al inicio</a></p></div>';
    return;
  }
  render(p);
});
