exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin", 17)
      .notNullable()
      .unique();
    tbl.string("make", 255).notNullable();
    tbl.integer("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("type", 255);
    tbl.string("status", 255);
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
