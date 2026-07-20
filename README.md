# 👟 Corredora Virtual - VivaTour Demo

Demo web de un agencia inmobiliaria virtual 100% digital con tours 360°, conexión a redes sociales y WhatsApp Business.

Construida como un **prototipo HTML/CSS/JavaScript** para demostrar el concepto de corredora virtual con tours interactivos VivaTour.

**Status**: ✅ Demo / MVP completado

## 🎯 Características

- ✅ Tours 360° inmersivos con VivaTour
- ✅ Galería de propiedades
- ✅ Integración WhatsApp Business
- ✅ Enlaces a redes sociales
- ✅ Diseño responsive

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (recomendado para desarrollo)

## 🚀 Cómo Abrir

### Opción 1: Abrir directamente
```bash
# Simplemente abre en el navegador
./index.html
# O arrastra el archivo a tu navegador
```

### Opción 2: Con servidor local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npm)
npx http-server

# Con PHP
php -S localhost:8000
```
Luego abre: http://localhost:8000

## 📂 Estructura

```
corredora-virtual/
├── index.html          # Página principal
├── propiedad.html      # Detalle de propiedad
├── cargar.html         # Carga de nuevas propiedades
├── assets/             # Imágenes y resources
└── README.md
```

## 🎨 Archivos Principales

- **index.html** — Landing page con catálogo de propiedades
- **propiedad.html** — Vista detallada con tour 360° VivaTour
- **cargar.html** — Formulario para agregar propiedades nuevas

## 🔗 Integración VivaTour

Los tours 360° se cargan desde URLs de VivaTour. Reemplaza `YOUR_VIVATOUR_ID` en los iframes con los IDs reales de tus tours.

## 📱 Responsive

El proyecto está optimizado para:
- 📱 Móvil (375px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1200px+)

## 👨‍💻 Hecho por

Claude Code | 2026
