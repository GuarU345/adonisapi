import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Guiso extends BaseModel {
  @column({ isPrimary: true })
  public id_guiso: number

  @column()
  public guiso

  @column()
  public disponible

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
