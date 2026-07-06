# 🚀 Portafolio - Carla Cardozo

Portafolio web profesional de Carla Cardozo, Full Stack Developer especializada en React, Vue, Node.js y MongoDB.

## 📋 Características

- ✨ Diseño minimalista y responsivo
- 🎯 Secciones bien organizadas (Inicio, Sobre mí, Proyectos, Habilidades, Contacto)
- 📱 Totalmente responsive (móvil, tablet, desktop)
- ⚡ Animaciones suaves en scroll
- 🎨 Interfaz moderna con gradientes y efectos hover
- 📂 Fácil de personalizar

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- GitHub Pages (para hosting)

## 📝 Cómo Personalizar

### 1. Agregar tu LinkedIn
En el archivo `index.html`, busca la sección de contacto y descomenta la línea de LinkedIn:

```html
<!-- En la sección Contact -->
<a href="https://linkedin.com/in/tu-usuario" target="_blank" class="contact-link">
    <i class="fab fa-linkedin"></i>
    <span>LinkedIn</span>
</a>
```

Reemplaza `tu-usuario` con tu nombre de usuario de LinkedIn.

### 2. Agregar Nuevos Proyectos
En la sección de "Proyectos Destacados", puedes duplicar una tarjeta de proyecto y modificarla:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Tu Proyecto</h3>
        <span class="tech-badge">React</span>
        <span class="tech-badge">Node.js</span>
    </div>
    <p class="project-description">
        Descripción de tu proyecto aquí.
    </p>
    <div class="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
    </div>
    <a href="https://github.com/tu-usuario/tu-proyecto" target="_blank" class="project-link">
        Ver en GitHub <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

### 3. Cambiar Colores
En `styles.css`, modifica las variables CSS:

```css
:root {
  --primary-color: #6366f1;      /* Color principal */
  --secondary-color: #818cf8;    /* Color secundario */
  --dark-bg: #0f172a;           /* Fondo oscuro */
  --light-bg: #f8fafc;          /* Fondo claro */
}
```

### 4. Actualizar Información de Experiencia
Modifica la sección "Sobre Mí" y "Experiencia Profesional" directamente en el HTML.

## 🌐 Desplegar en GitHub Pages

1. Ve a la configuración de tu repositorio
2. En "Pages", selecciona la rama `main` y la carpeta `/root`
3. Espera a que se construya (suele tardar unos segundos)
4. Tu portafolio estará disponible en: `https://cicu90.github.io/carlacardozo-portafolio`

## 📧 Contacto

- Email: carlacardozo990@gmail.com
- GitHub: [@cicu90](https://github.com/cicu90)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.
