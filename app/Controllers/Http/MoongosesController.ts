// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { handleError } from "@adonisjs/ace";
import mongoose from "mongoose";
import ComentarioModelo from "App/Models/Comentario";

export default class MoongosesController {
  public async conexion(){
    try{ await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log("conexion establecida")
  }catch
  {
    console.log("no se pudo realizar la conexion")
  }

  }
  public async insertar({request,response}){
   await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/prueba?retryWrites=true&w=majority')


   const mandar=request.input(['usuario'])
    const comentar=request.input(['comentarios'])

    const crear=new ComentarioModelo.ComentarioModelo({usuario:mandar,comentarios:comentar})
    await crear.save()
    return response.json(crear)


  }
  public async mostrar({response}){
    await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/prueba?retryWrites=true&w=majority')

   const buscar= await ComentarioModelo.ComentarioModelo.find()
   return buscar

  }
}
