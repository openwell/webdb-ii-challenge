const db = require("../../data/dbConfig");

module.exports = {
  get,
  insert,
  update,
  remove
};

function get() {
  return db("cars");
}

function getById(id) {
  return db('cars')
    .where({ id })
    .first();
}

function insert(account) {
  return db("cars")
    .insert(account)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("cars")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("cars")
    .where("id", id)
    .del();
}
