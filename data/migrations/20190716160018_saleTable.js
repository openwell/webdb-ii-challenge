exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.integer("phone", 11).notNullable();
    tbl.string("price", 255).notNullable();
    tbl
      .integer("car_id")
      .references('id')
      .inTable('cars')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
