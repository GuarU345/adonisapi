import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsuariosSchema extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.integer('rol').unsigned().references('id_rol').inTable('roles')
      table.integer('status').unsigned().references('id_estado').inTable('estados')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { precision: 6 }).nullable()
      table.timestamp('updated_at', { precision: 6 }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
