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
  public async insertar({request,response}){
   const connection= mongoose.createConnection('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/prueba?retryWrites=true&w=majority')
    const {Schema}=mongoose

    const comentar=request.input(['comentarios'])

    const comentarioschema=new Schema({
      comentarios:String

    },{
      versionKey:false
    });

    const comentario=connection.model('comentarios',comentarioschema);

    const crear=new comentario({comentarios:comentar})
    await crear.save()
    return response.json(crear)


  }
  public async mostrar({response}){
    const connection= mongoose.createConnection('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/prueba?retryWrites=true&w=majority')
    const {Schema}=mongoose

    const comentarioschema=new Schema({
      comentarios:String
    });

    const comentario=connection.model('comentarios',comentarioschema);
   const buscar= comentario.findOne().sort({$natural:-1});
   return buscar

  }
}
