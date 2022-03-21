import{Schema,model}from 'mongoose'

export default class ComentarioModelo{

    static comentarioschema=new Schema({
      comentarios:String
    },{
      versionKey:false
    });

    static ComentarioModelo:any=model('comentarios',this.comentarioschema);
}


