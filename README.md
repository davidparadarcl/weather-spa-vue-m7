# Weather SPA Chile - Módulo 7

Aplicación SPA desarrollada con Vue 3, Vue Router, Vuex y Axios, basada en una plataforma de consulta climática para ciudades de Chile.

En esta versión se incorpora un sistema básico de autenticación de usuarios utilizando Vuex para administrar el estado global de la aplicación, junto con rutas protegidas y personalización de contenido según el usuario autenticado.

## Descripción del sistema de usuarios

La aplicación incluye un sistema de autenticación simulado mediante usuarios mock.

Cada usuario almacena información básica como:

- Nombre
- Correo electrónico
- Contraseña
- Lugares favoritos
- Preferencia de unidad de temperatura (°C o °F)

Al iniciar sesión correctamente, la información del usuario se guarda en Vuex y queda disponible para toda la aplicación.

## Funcionalidades principales

### Clima de ciudades chilenas

- Listado de ciudades de Chile.
- Búsqueda mediante v-model.
- Vista de detalle por ciudad.
- Consumo de API Open-Meteo.
- Pronóstico y estadísticas climáticas.

### Autenticación

- Inicio de sesión mediante formulario.
- Validación de credenciales.
- Mensaje de error para credenciales incorrectas.
- Estado global administrado con Vuex.
- Cierre de sesión.
- Visualización del usuario autenticado en la interfaz.

### Personalización por usuario

Cada usuario posee:

- Lista de lugares favoritos.
- Preferencia de unidad de temperatura.

La información se obtiene desde Vuex y se muestra dinámicamente según el usuario autenticado.

### Rutas protegidas

#### /login

Permite iniciar sesión.

#### /favoritos

Ruta protegida que solo puede ser visitada por usuarios autenticados.

Si un usuario intenta acceder sin iniciar sesión, es redirigido automáticamente a `/login`.

#### /

Página principal de la aplicación.

#### /ciudad/:id

Vista de detalle de la ciudad seleccionada.

## Tecnologías utilizadas

- Vue 3
- Vue Router
- Vuex 4
- Axios
- Vite
- JavaScript
- HTML5
- CSS3
- Open-Meteo API

## Usuario de prueba

Correo:

[david@test.com](mailto:david@test.com)

Contraseña:

123456

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/davidparadarcl/weather-spa-vue-m7.git
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:5173
```

## Repositorio GitHub

https://github.com/davidparadarcl/weather-spa-vue-m7

## Control de versiones

El proyecto fue versionado utilizando Git y GitHub, incorporando commits descriptivos para cada etapa del desarrollo:

- Version base weather SPA para modulo 7
- Agrega Vuex y gestión de autenticación
- Implementa login de usuarios
- Agregar favoritos y rutas protegidas
