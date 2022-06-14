## React Boilerplate

Proyecto con la estructura inicial para todos los proyectos basados en React.js

## Que debo conocer antes de:

### Tecnologias

- React v18, no obstante utilizando los features de la v17
- Docker
- ESLint
- Prettier
- Husky

### Setup

1. Clonar el repositorio
2. Crear archivo `.env` con las variables especificadas en el `.env.sample` 
3. Para correrlo sin docker:
   3.1. Situarse en la raiz del proyecto, proceder a instalar las dependencias con `yarn install`
   3.2. Ejecutar `yarn start`
4. Para correrlo con docker:
    4.1. Construimos la imagen 
    ```
    docker build -t IMAGE_NAME:$TAG_IMAGE_DEV -f Dockerfile .
    ```
    4.2. Procedemos a crear el container 
    ```
    docker run -dp 3000:3000 --name PROJECT_NAME IMAGE_NAME:$TAG_IMAGE_DEV
    ```
5. Abrir el browser y dirigirse a `localhost:3000`


## Arquitectura

### Clean Architecture

En *Clean Architecture*, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.

Se basa en que la capa de dominio no dependa de ninguna capa exterior. 
La de aplicación sólo depende de la de dominio y el resto (normalmente presentación y acceso a datos) depende de la capa de aplicación. 
Esto se logra con la implementación de interfaces que luego tendrán que implementar las capas externas mediante la inyección de dependencias.

El siguiente diagrama representa la adaptación hecha de Clean Architecture para un proyecto Frontend basado en Typescrit y React

![CleanArchitectureReact](http://hudkregister.humano.local/canales-digitales/documentacion/-/wikis/uploads/d7c040e0a3f5e1a657fbdaef4a6b1d4e/CleanArchitectureReact.svg)