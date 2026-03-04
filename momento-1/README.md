# Momento 1 - Frontend II

## 📋 Descripción

Este proyecto implementa una interfaz web responsiva con componentes React reutilizables. Incluye una sección principal con tarjetas de contenido y un diseño visual atractivo con paleta de colores azul.

## 🛠️ Tecnologías

- **React** - Librería JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción moderna y rápida
- **CSS3** - Estilos personalizados con flexbox y diseño responsivo
- **ESLint** - Validación de código JavaScript

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Card.jsx              # Componente de tarjeta reutilizable
│   ├── Componente1.jsx       # Componente de encabezado
│   ├── Componente2.jsx       # Componente contenedor principal
│   ├── Componente3.jsx       # Componente adicional
│   └── StylesComponents.css  # Estilos centralizados
├── pages/
│   └── Home.jsx              # Página principal
├── App.jsx                   # Componente raíz
├── App.css                   # Estilos de la app
├── main.jsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js 16 o superior
- npm o yarn

### Instalación

```bash
cd momento-1
npm install
```

### Desarrollo

Ejecuta el servidor de desarrollo con Hot Module Replacement (HMR):

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Construcción

Para generar la versión optimizada para producción:

```bash
npm run build
```

###Vista previa

Para previsualizar la compilación de producción:

```bash
npm run preview
```

## 🎨 Componentes

### Componente1
Encabezado de la aplicación con fondo azul claro y texto centrado.

### Componente2
Contenedor principal que organiza el contenido en una grilla de tarjetas.

### Card
Tarjeta reutilizable para mostrar información con diseño modular.

### Componente3
Componente adicional para contenido complementario.

## 📝 Características

- ✅ Diseño responsivo con flexbox
- ✅ Componentes modulares y reutilizables
- ✅ Paleta de colores consistente
- ✅ Hot Module Replacement para desarrollo rápido
- ✅ Validación de código con ESLint

## 📚 Notas de Desarrollo

- Los estilos están centralizados en `StylesComponents.css`
- Cada componente tiene clases CSS prefijadas para evitar conflictos
- El proyecto usa variables de altura calculadas (calc()) para layouts responsivos

## 🔗 Enlaces útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [MDN - CSS Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)
