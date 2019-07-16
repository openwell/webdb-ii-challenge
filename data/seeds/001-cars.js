
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '1FUW3EDAXSP602411', make: 'Toyota', model: 2018, mileage: 1222 },
        { vin: '2FUW3EFAXSP602422', make: 'Maxda', model: 200, mileage: 00022 }
      ]);
    });
};
