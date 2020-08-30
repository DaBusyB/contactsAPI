
exports.up = function(knex) {
    return knex.schema

    .createTable('users', tbl => {
        tbl.increments()

        tbl.text('username', 100)
            .unique()
            .notNullable()

        tbl.text('password', 150)
            .notNullable()
    })
};


  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contacts').dropTableIfExists('users')
  };
