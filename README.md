# 🌸 Empowering Phrases App

Una aplicación web interactiva diseñada para inspirar y empoderar a través de mensajes positivos. Este proyecto permite a las usuarias visualizar, añadir y gestionar frases motivadoras en un entorno moderno y eficiente.

## 🚀 Características

* **Galería Dinámica**: Visualización fluida de frases de empoderamiento.
* **Gestión de Contenido**: Formulario intuitivo para añadir nuevas aportaciones a la colección.
* **Edición Contextual**: Gracias al uso de rutas anidadas, es posible editar frases manteniendo la estructura principal de la aplicación.
* **Navegación Robusta**: Sistema de rutas centralizado que garantiza una experiencia de usuario sin recargas de página.

## 🛠️ Tecnologías Utilizadas

* **React 18**: Biblioteca base para la construcción de la interfaz de usuario.
* **React Router v7**: Gestión de la navegación, rutas hijas y el uso de `<Outlet />`.
* **Vite**: Herramienta de desarrollo ultra rápida para la compilación y ejecución del proyecto.
* **CSS3**: Estilos personalizados con diseño responsivo y moderno.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular para facilitar la colaboración entre compañeras:

* `src/components/`: Contiene los componentes reutilizables (Header, Footer) y las vistas específicas (ViewPhrases, NewPhraseForm, etc.).
* `src/router/`: Configuración centralizada del `createBrowserRouter` en el archivo `index.jsx`.
* `src/array/`: Archivo de datos centralizado (`Array.jsx`) que actúa como fuente de verdad para las frases.
* `src/assets/`: Recursos estáticos como imágenes y logos.

## ⚙️ Instalación y Configuración

Para ejecutar este proyecto en local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
2. **Instalar dependencias:**:
   ```bash
   npm install
3. **Iniciar el servidor de desarrollo:**:
   ```bash
   npm run dev

## 🧠 Aprendizajes Técnicos Clave

Durante el desarrollo y la reestructuración del proyecto, hemos consolidado conceptos fundamentales que han mejorado nuestro flujo de trabajo:

* **Gestión de Importaciones**: Aprendimos que al importar componentes, lo más importante es el nombre de la función exportada (`export default`), permitiéndonos mayor flexibilidad independientemente del nombre del archivo físico.
* **Rutas Anidadas y `<Outlet />`**: Implementamos una jerarquía de rutas donde el componente `App` actúa como contenedor principal y `ViewPhrases` puede albergar subcomponentes (como el editor) sin recargar la página completa.
* **Resolución de Conflictos de Rutas**: Tras la reestructuración de carpetas, ajustamos las rutas relativas (`../../`) para asegurar que tanto los archivos de datos (`Array.jsx`) como los estilos CSS conectaran correctamente en el nuevo árbol de directorios.
* **Limpieza de Caché de Herramientas**: Descubrimos la importancia de comandos como `npm run dev -- --force` para limpiar la memoria temporal de Vite cuando existen cambios estructurales profundos en el proyecto.

---

**Fem Coders F8**   
