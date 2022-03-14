// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Guiso from "App/Models/Guiso"
import Producto from "App/Models/Producto"

export default class GuisosController {
  public async mostrarGuisos(){

    const guiso=await Database.query().from('guisos').select('*').orderBy('id_guiso')
    return guiso

}
public async guisosDisponibles(){
  const guiso=await Database.query().from('guisos').select('*').orderBy('id_guiso').where('disponible','=','1')
    return guiso
}
public async crearGuiso({request,response}){
    const nombre=request.input(['guiso'])
    const dispo=request.input(['disponible'])



    const guiso=new Guiso()

    guiso.guiso=nombre
    guiso.disponible=dispo


    await guiso.save()
    response.json({guiso})


  }
  public async modificarGuiso({request,response,params}){
    const disp=request.input(['disponible'])

     const guiso=await Guiso.findOrFail(params.id)
     guiso.disponible=disp

     await guiso.save()
     response.json(guiso)
  }
}
