// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Disponible from "App/Models/Disponible"

export default class DisponiblesController {
 public async crearEstados({request,response}){
   const disponibilidad=request.input(['disponibilidad'])

   const disp=new Disponible()

   disp.disponibilidad=disponibilidad
   disp.save()
   return response.json({disp})


 }
}
