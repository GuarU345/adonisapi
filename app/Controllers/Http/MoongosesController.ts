// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { handleError } from "@adonisjs/ace";
import mongoose from "mongoose";

export default class MoongosesController {
  public async conexion(){
    try{ await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log("conexion establecida")
  }catch
  {
    console.log("no se pudo realizar la conexion")
  }

  }
  public async insertar(){
   const connection= mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const {Schema}=mongoose

    const comentarioschema=new Schema({
      comentario:String
    });

    const comentario=(await connection).model('comentario',comentarioschema)

    comentario.find({comentarios:'este es un comentario'})


  }
}
