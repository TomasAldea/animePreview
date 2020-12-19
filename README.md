## Anime Preview

# Descripcion 

Se trata de una app que contendra una base de datos de animes, cuyo obejtivo es la previsualizacion de imagenes y videos, los usuarios podran 
añadir a su perfil los favoritos y publicar comentarios sobre sus animes.

# User Stories
- 404: como usuario, quiero ver una buena página 404 cuando voy a una página que no existe para saber que fue mi culpa.
- 500: Como usuario, quiero ver una bonita página de error cuando el súper equipo lo arruine para que sepa que no es mi culpa.
- página de inicio: como usuario, quiero poder acceder a la página de inicio para ver de qué se trata la aplicación e iniciar sesión y registrarme.
- registrarse - Como usuario quiero registrarme en la página web para poder ver todos los eventos a los que podría asistir.
- inicio de sesión: como usuario, quiero poder iniciar sesión en la página web para poder volver a mi cuenta.
- cerrar sesión: como usuario, quiero poder cerrar sesión en la página web para asegurarme de que nadie acceda a mi cuenta.
- lista de eventos - Como usuario quiero ver todos los eventos disponibles para poder elegir a cuáles quiero asistir.
- Lista de otras características fuera del alcance de los MVP

## User profile:

- mirar mi perfil.
- subir mi foto de perfil.
- ver los comentarios creados por el usuario.
- lista de eventos a los que asiste el usuario.

## ROUTES:

- GET /

- render the homepage
GET /auth/signup

- redirige a / si el usuario inició sesión
muestra el formulario de registro (con mensaje flash)
POST / autenticación / registro

- redirige a / si el usuario inició sesión:
username
email
password
GET /auth/login

- redirects to / if usuario conectado
renderiza el formulario de inicio de sesión (con mensaje flash)
POST /auth/login

- redirige a / si el usuario inició sesión
body:
username
password
POST /auth/logout

body: (empty)
GET /events

- renderiza la lista de eventos + el formulario de creación
POST /events/create

- Redirige a / si la usuario es anónima
body:
name
date
location
description
GET /events/:id

- muestra la página de detalles del evento
    incluye la lista de asistentes
    botón de asistencia si el usuario aún no ha asistido
POST /events/:id/attend

- Redirige a / si la usuario es anónima
body: (vacío: el usuario ya está almacenado en la sesión)

## Models
# User model

- username: String
- password: String

# Event model

owner: ObjectId<User>
name: String
description: String
date: Date
attendees: [ObjectId<User>]

# to do

- Detalles de eventos: como usuario, quiero ver los detalles del evento y la lista de asistentes de un evento para poder decidir si quiero asistir.
- eventos crear: como usuario, quiero crear un evento para poder invitar a otros a asistir
- asistir al evento: como usuario, quiero poder asistir al evento para que los organizadores puedan contar conmigo en reserva
- ver el perfil de otros usuarios
- 

## Links

Trello

[Link trello](https://trello.com/b/l6MtU9S4/working-space)


## Git

[Link HitHub](https://github.com/TomasAldea/animePreview)
[Link HitHub](https://github.com/LucasFeli/animePreview)


## Slides

[Slides](https://github.com/LucasFeli/animePreview)

