// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Producto from "App/Models/Producto"

export default class ProductosController {
  public async traerProductos()
  {
    const producto= await Database.query().from('productos').select('*').orderBy('id_producto')
    return producto

  }
  public async crearProducto({request,response}){
    const nombre=request.input(['nom_producto'])
    const precio=request.input(['precio'])
    const cantidad=request.input(['cantidad'])
    const guiso=request.input(['guiso'])
    const disp=request.input(['disponibilidad'])


    const producto=new Producto()

    producto.nom_producto=nombre
    producto.precio=precio
    producto.cantidad=cantidad
    producto.guiso=guiso
    producto.disponibilidad=disp

    await producto.save()
    response.json({producto})


  }
}
