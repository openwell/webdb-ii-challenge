
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        { name: 'Noble Anwaka', phone: 080388383, price: '$300', car_id: 1 }
      ]);
    });
};
