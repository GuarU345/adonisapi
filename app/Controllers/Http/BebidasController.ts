// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Bebida from "App/Models/Bebida"

export default class BebidasController {
  public async crearBebida({request,response}){
    const bebida=request.input(['bebida'])

    const nuevo=new Bebida()

    nuevo.bebida=bebida
    nuevo.save()
    return response.json({nuevo})
  }
  public async mostrarBebidas(){
    const bebida= await Database.query().from('bebidas').select('*').orderBy('id_bebida')
    return bebida
  }

}
