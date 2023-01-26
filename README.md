Trabajo E-comerce Ausone 3D

Introducción:
El Proyecto fue reescrito en base a rubricas por CoderHouse, plataforma en la cual estudie Desarrollo Frontend,  con orientacion (ReactJs).

En la aplicacion (App) creada, se muestran los componentes, en lo que a React corresponde, sin estilos particulares y tratando de lograr una logica funcional del codigo.
El proyecto contiene datos y funcionabilidad de e-commerce, conectada a una base de datos (en esta oportunidad Firebase)

La carpeta Assets corresponde a imagenes locales pertenecientes a el estilo solamente de la pagina.

ORGANIZACION DE ARCHIVOS:
Se organiza y manifiesta de esta manera el orden de los componentes tanto los de logica presentacional y logica funcional.

Lista de componentes dentro (/src): 
.Assets
.Components
.Context
.Firebase

Lista de componentes (/components):
.CartWidget
.Home
.NavBar
.Routes

Lista de rutas (/routes):
.Cart
.CheckOut (Correspondiente al Formulario de compra)
.Error (Correspondiente a "mensaje" de una ruta no encontrada)
.Item  (Componente presentacional)
.ItemCount
.ItemDetail (Componente presentacional)
.ItemDetailContainer (Componente contenedor)
.ItemList (Componente presentacional)
.ItemListContainer (Componente contenedor)


COMPONENTES CONTENEDORES:
Los componentes contenedores en este caso traen de la base de datos de firebase mediante su sintaxis que justamente posee firebase usando useEffect, para que levante una vez que la aplicacion se monta.

COMPONENTES PRESENTACIONALES:
Componentes utilizados para mostrar visualmente en la aplicacion web.

Librerias:
-React-router-dom 

Almacenamiento:
LocalStorage Firebase (Base de datos).


CONTEXTO (CartContext) al nivel de componentes detallado al principio de la lista de componentes, nos permite pasar informacion / Funciones , hacia cualquier componente de nuestra App con tan solo importarlo.
Componentes que utilizan funciones del cartcontext:
.ItemDetail
.Cart
.CartWidget
.checkout para el formulario para info seleccionada por el usuario y luego recopilar datos de dicha compra.

Sintesis:
La funcionalidad de la app es simple con el objetivo de realizar un E-commerce sin enfasis en los estilos los cuales se pueden mejorar significativamente.
Saludos Cordiales, Lucas Cucci.






