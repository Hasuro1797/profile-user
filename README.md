# Prueba Técnica

## Configuración del Proyecto

Este proyecto utiliza [Vite](https://vitejs.dev/) y [React](https://reactjs.org/).

### Prerrequisitos

- Node.js (versión 20 o superior)
- npm (versión 10 o superior)
- yarn (versión 1.22 o superior) (opcional)

### Instalación

Clona el repositorio e instala las dependencias.

```bash
git clone https://github.com/aproctur/landing-page.git
cd landing-page
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto lanzará la aplicación en modo de desarrollo y estará disponible en http://localhost:3000.

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

Para servir los archivos de producción, puedes usar un servidor estático como [serve](https://www.npmjs.com/package/serve):

```bash
npx serve -s dist
```

## Información Adicional

- [Documentación de Vite](https://vitejs.dev/guide/):
- [Documentación de React](https://es.react.dev/learn):
