# Weather SPA Vue

Aplicación de clima desarrollada como SPA utilizando Vue 3, Vue Router y Axios.

El proyecto recrea la aplicación de clima desarrollada en módulos anteriores, manteniendo ciudades de Chile e incorporando navegación mediante Vue Router, consumo de API externa y visualización dinámica de información meteorológica.

## Descripción

La aplicación permite visualizar información climática de distintas ciudades de Chile.

Desde la vista principal el usuario puede buscar una ciudad y acceder a su detalle. En la vista de detalle se muestran datos climáticos obtenidos desde la API Open-Meteo, incluyendo temperatura actual, humedad, velocidad del viento, estadísticas semanales y pronóstico de varios días.

## Vistas del proyecto

### Home

Vista principal que muestra:

- Listado de ciudades.
- Buscador mediante v-model.
- Tarjetas con imágenes de cada ciudad.
- Navegación hacia la vista detalle.

### Detalle de Ciudad

Vista dinámica que muestra:

- Nombre de la ciudad.
- Imagen representativa.
- Coordenadas geográficas.
- Temperatura actual.
- Humedad.
- Velocidad del viento.
- Estadísticas semanales.
- Pronóstico semanal.
- Alerta climática.

## Rutas implementadas

### Ruta principal

/

Muestra el listado completo de ciudades.

### Ruta dinámica

/ciudad/:id

Muestra el detalle de la ciudad seleccionada.

## Tecnologías utilizadas

- Vue 3
- Vue Router
- Vite
- Axios
- Open-Meteo API
- JavaScript
- HTML5
- CSS3

## Funcionalidades implementadas

- Aplicación SPA con Vue Router.
- Navegación entre vistas sin recarga.
- Consumo de API externa mediante Axios.
- Uso de v-model para búsqueda.
- Uso de v-for para renderizar ciudades.
- Uso de v-if para renderizado condicional.
- Uso de props dinámicas desde la ruta.
- Estadísticas climáticas semanales.
- Pronóstico semanal.
- Alertas climáticas.
- Diseño responsivo.

## Instalación

1. Clonar o descargar el proyecto.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir una terminal en la raíz del proyecto.

Instalar dependencias:

npm install

Ejecutar servidor de desarrollo:

npm run dev

Abrir la URL entregada por Vite, normalmente:

http://localhost:5173/

## Repositorio GitHub

https://github.com/davidparadarcl/weather-spa-vue.git
