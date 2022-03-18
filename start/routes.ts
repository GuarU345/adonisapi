/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
//Usuarios
Route.post('register','UsuariosController.register')
Route.post('login','UsuariosController.login')
Route.get('token','UsuariosController.token')

//Productos
Route.get('consulta1','ProductosController.traerProductos')
Route.post('crear','ProductosController.crearProducto')

//Personas
Route.post('crearpersona','PersonasController.crearPersona')

//Guisos
Route.post('crearguiso','GuisosController.crearGuiso')
Route.get('obtenerguiso','GuisosController.mostrarGuisos')
Route.get('disponibles','GuisosController.guisosDisponibles')
Route.put('modificarguiso/:id','GuisosController.modificarGuiso')

//Estados
Route.post('crearestado','DisponiblesController.crearEstados')

//conexion
Route.get('conexion','MoongosesController.conexion')
Route.get('insertar','MoongosesController.insertar')



