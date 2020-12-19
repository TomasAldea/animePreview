## Anime Preview

# Descripcion 

Se trata de una app que contendra una base de datos de animes, cuyo obejtivo es la previsualizacion de imagenes y comentarios, los usuarios podran 
añadir nuevos animes y publicar comentarios sobre estos.

# User Stories
- 404: como usuario, quiero ver una buena página 404 cuando voy a una página que no existe para saber que fue mi culpa.
- 500: Como usuario, quiero ver una bonita página de error cuando el súper equipo lo arruine para que sepa que no es mi culpa.
- registrarse: Como usuario,quiero mirar mi perfil,subir mi foto de perfil,ver los comentarios creados por el usuario,lista de eventos a los que asiste el usuario.
- página de inicio: como usuario, quiero poder acceder a la página de inicio para ver de qué se trata la aplicación e iniciar sesión y registrarme.
- inicio de sesión: como usuario, quiero poder iniciar sesión en la página web para poder volver a mi cuenta.
- cerrar sesión: como usuario, quiero poder cerrar sesión en la página web para asegurarme de que nadie acceda a mi cuenta.
- lista de animes - Como usuario quiero ver todos los animes disponibles.
- crear anime: como usuario, quiero añadir nuevos animes, eliminar o modificar.

## ROUTES:

- GET /

- render the homepage
GET /auth/signup

- redirige a / si el usuario inició sesión
muestra el formulario de registro
POST /auth/signup

- redirige a / si el usuario inició sesión:
username
email
password
GET /auth/login

- redirige a / si el usuario conectado
renderiza el formulario de inicio de sesión
POST /auth/login

- redirige a / si el usuario inició sesión
body:
username
password
POST /auth/logout

body: (empty)
GET /animes

- renderiza la lista de animes 
get /animes/create
- renderiza el formulario de creacion de un anime
POST /animes/create

- Redirige a / si la usuario es anónimo
body:
name
rate
description
GET /anime/:id

- muestra la página de detalles del anime

- Redirige a /login si la usuario es anónimo
body: (vacío: el usuario ya está almacenado en la sesión)

- eliminar o editar un anime
PUT /anime/:id
DELETE /anime/:id

## Models
# User model

- username: String
- password: String
- email: string
- created anime: [ { type: Schema.Types.ObjectId, ref: "Anime" } ]

# Anime model

- owner:  { type: Schema.Types.ObjectId, ref: "user" } 
- name: String
- description: String
- rate: number
- image: string

# backlog

- favoritos
- comentarios

## Links

# Trello

[Link trello](https://trello.com/b/l6MtU9S4/working-space)


# Git

[Link HitHub](https://github.com/TomasAldea/animePreview)


# Slides / Wireframe


[wireframe](https://wireframepro.mockflow.com/view/M79b1be2408dd7d3753b53fb51632d72e1608378012239)


