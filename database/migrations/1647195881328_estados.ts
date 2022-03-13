import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estados extends BaseSchema {
  protected tableName = 'estados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_estado')
      table.string('estado')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { precision: 6 }).nullable()
      table.timestamp('updated_at', { precision: 6 }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
