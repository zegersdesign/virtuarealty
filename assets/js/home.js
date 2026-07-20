// Dibuja la grilla de propiedades en la portada.

function tarjetaHTML(p) {
  const foto = (p.fotos && p.fotos[0]) || "";
  const badge = p.operacion === "arriendo" ? "Arriendo" : "Venta";
  return `
    <a class="tarjeta" href="propiedad.html?id=${p.id}">
      <div class="foto">
        <span class="badge">${badge}</span>
        ${p.tour360 ? '<span class="badge tour360">360&deg;</span>' : ""}
        <img src="${foto}" alt="${p.titulo}" loading="lazy" />
      </div>
      <div class="info">
        <div class="precio-card">${formatearPrecio(p)}</div>
        <h3>${p.titulo}</h3>
        <div class="ubic-card">${p.comuna}, ${p.ciudad}</div>
        <div class="mini-specs">
          ${p.dormitorios} dorm &middot; ${p.banos} banos &middot; ${p.metrosUtiles} m&sup2;
        </div>
      </div>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grilla = document.getElementById("grilla");
  const lista = obtenerPropiedades();
  if (lista.length === 0) {
    grilla.innerHTML = '<p class="vacio">Aun no hay propiedades. Publica la primera.</p>';
    return;
  }
  grilla.innerHTML = lista.map(tarjetaHTML).join("");
});
