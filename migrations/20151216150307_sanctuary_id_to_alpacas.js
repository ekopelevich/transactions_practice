
exports.up = function(knex, Promise) {
  return knex.schema.table('alpacas', function(table){
    table.integer('sanctuary_id').unsigned().references('id').inTable('sanctuary').onDelete('cascade');
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('alpacas', function(table){
    table.dropColumn('sanctuary_id');
  });
};
