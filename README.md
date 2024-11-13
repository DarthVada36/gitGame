# GitGame 🎮

Bienvenidos a **GitGame**, una plataforma completa para los apasionados de los videojuegos. Aquí encontrarás noticias, videos, lanzamientos y reseñas de los títulos más actuales y relevantes. Nuestra plataforma ofrece una experiencia personalizada con contenido exclusivo para usuarios registrados.

![image](https://github.com/user-attachments/assets/ee5b4c35-8c61-4dfe-a992-d7d48d590963)



## Índice
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Roles y Permisos](#roles-y-permisos)
- [Recursos de Diseño y Base de Datos](#recursos-de-diseño-y-base-de-datos)
- [Estructura del Proyecto](#estructura)
- [Uso](#uso)
- [Herramientas y Utilidades](#herramientas-y-utilidades)
- [Visionado de la Web](#visionado-de-la-web)




---

## Características

**GitGame** permite a los usuarios acceder a contenido sobre videojuegos de diversas maneras. Aquí están las secciones principales:

1. **Noticias**: Las últimas novedades sobre videojuegos, eventos, lanzamientos, y más.
2. **Videos**: Contenido multimedia relacionado con análisis, tráilers y eventos de videojuegos.
3. **Lanzamientos**: Información sobre próximos títulos y fechas de lanzamiento.
4. **Reviews**: Análisis y opiniones sobre los últimos lanzamientos, realizados por usuarios y administradores.

Además, GitGame ofrece un sistema de autenticación y control de usuarios para moderar el acceso y la creación de contenido.

## Tecnologías Utilizadas

GitGame está construido con una variedad de tecnologías modernas para ofrecer una experiencia de usuario rápida y una arquitectura robusta en el servidor. A continuación, se listan las principales herramientas y frameworks utilizados en el proyecto.

### Frontend (Client)
![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white): Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.
- **Vite**: Herramienta de construcción rápida y ligera para desarrollar proyectos con React.
- **Tailwind CSS**: Framework de CSS basado en utilidades para diseñar de forma rápida y eficiente.
- **Axios**: Cliente HTTP para realizar peticiones al backend de forma sencilla.
- **ESLint**: Herramienta de análisis estático para identificar y solucionar problemas en el código JavaScript.
- **PostCSS**: Herramienta para transformar CSS mediante plugins, usada aquí para personalizar Tailwind CSS.

### Backend (Server)
![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&logoColor=white): Entorno de ejecución de JavaScript en el servidor.
![Express.js](https://img.shields.io/badge/Express.js-4DB33A?style=for-the-badge&logo=express&logoColor=white): Framework de servidor para Node.js que simplifica la gestión de rutas y peticiones HTTP.
- **JWT (JSON Web Tokens)**: Tecnología para manejar la autenticación y autorización de usuarios.
- **Bcrypt**: Librería para el hash de contraseñas, asegurando la seguridad de los datos sensibles.
- **Multer**: Middleware para manejar la subida de archivos en las rutas del servidor.

## Instalación

Para ejecutar GitGame en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Wilder-Aguilar/gitGame.git

2. Instalar dependencias para el cliente:


          cd gitgame/client
          npm install
   
4. Instalar dependencias para el servidor:


          cd ../server
          npm install

5. Configurar variables de entorno: Crea un archivo .env en el directorio server con las configuraciones necesarias, como la conexión a la base de datos.

   
            DB_PASSWORD =12345
            DB_HOST=localhost
            DB_USER=root
            DB_DEV_NAME=git_game
            DB_TEST_NAME=git_game_test
            PORT=3000
            DB_PORT=3306
            JWT_SECRET=tu_clave_secreta_super_segura
   
   
7. Ejecutar el proyecto:

Inicia el servidor desde el directorio server:

          npm run dev
Inicia el cliente desde el directorio client:

          npm run dev


## Roles y Permisos

La plataforma define permisos específicos según el rol del usuario:

| Rol           | Permisos                                                                                           |
|---------------|----------------------------------------------------------------------------------------------------|
| **Usuario**   | Puede ver contenido y crear reseñas de videojuegos.                                       |
| **Admin**     | Puede crear, editar y eliminar noticias, videos, lanzamientos y reseñas.                           |


## Recursos de Diseño y Base de Datos

- [Diseño en Figma](https://www.figma.com/design/Of512zBJEbl0Xb7dhLwPqe/Untitled?node-id=17-3&node-type=canvas&t=DGR9bJCHvTUIh5bk-0) - Visualiza el diseño en Figma.
- [Esquema de Base de Datos en DrawSQL](https://drawsql.app/teams/f5-5/diagrams/git-games) - Consulta el esquema de la base de datos en DrawSQL.
  ![image](https://github.com/user-attachments/assets/cae33cf5-5618-4a21-9d2c-71787bf059de)



## Estructura

            gitgame/
          ├── client/                  # Código del frontend (interfaz de usuario)
          │   ├── node_modules/        # Dependencias del cliente
          │   ├── public/              # Archivos estáticos (imágenes, CSS, index.html)
          │   ├── src/                 # Código fuente de la aplicación cliente
          │   │   ├── components/      # Componentes reutilizables de React
          │   │   ├── pages/           # Páginas principales (Noticias, Videos, etc.)
          │   │   ├── services/        # Servicios y llamadas a la API
          │   │   ├── utils/           # Utilidades y funciones auxiliares
          │   │   └── App.js           # Componente principal de la aplicación
          │   ├── eslint.config.js     # Configuración de ESLint
          │   ├── postcss.config.js    # Configuración de PostCSS
          │   ├── tailwind.config.js   # Configuración de TailwindCSS
          │   └── vite.config.js       # Configuración de Vite
          ├── server/                  # Código del backend (API y lógica del servidor)
          │   ├── controllers/         # Controladores que gestionan la lógica de las rutas
          │   ├── database/            # Configuración de la base de datos
          │   ├── interfaces/          # Definiciones de tipos de datos e interfaces
          │   ├── middleware/          # Middleware para autenticación, logs, etc.
          │   ├── models/              # Modelos de la base de datos (ORM)
          │   ├── node_modules/        # Dependencias del servidor
          │   ├── routes/              # Definición de las rutas de la API
          │   ├── uploads/             # Archivos subidos por los usuarios
          │   ├── utils/               # Funciones de utilidad usadas en el servidor
          │   └── .env                 # Variables de entorno para el servidor
          └── README.md                # Documentación del proyecto

## Uso

Para usar GitGame, sigue los pasos a continuación:

**Registro e Inicio de Sesión**: Los usuarios deben registrarse o iniciar sesión para interactuar con la plataforma.

**Explorar Secciones**: Los usuarios pueden explorar noticias, videos y lanzamientos de forma libre.

**Crear Reseñas**: Los usuarios registrados pueden crear y ver reseñas.

**Acciones del Administrador**: Los administradores pueden crear, editar y eliminar noticias, videos, lanzamientos y reseñas.



## Herramientas y Utilidades

- **Git**: Sistema de control de versiones para seguimiento de cambios en el código.
- **GitHub**: Plataforma para alojar el repositorio, colaborar y gestionar issues.
- **dotenv**: Librería para manejar variables de entorno, manteniendo la configuración sensible segura y separada del código fuente.

---

Estas tecnologías fueron seleccionadas para ofrecer un equilibrio entre rendimiento, escalabilidad y facilidad de desarrollo, permitiendo que GitGame sea una plataforma rápida, segura y fácil de mantener.

## Visionado de la web

![image](https://github.com/user-attachments/assets/0f6a4829-f3fe-422f-881d-c75fb2f15e57) ![image](https://github.com/user-attachments/assets/52b2533f-8b10-4f67-96f6-381a69168b70) ![image](https://github.com/user-attachments/assets/3097400d-5c90-47a9-8890-8dac78a754f7) ![image](https://github.com/user-attachments/assets/a5ae141b-c87d-48d8-b6e9-056b85c7ffb5) ![image](https://github.com/user-attachments/assets/090e68c8-2056-4eb7-a9d1-a4561774c89d)



