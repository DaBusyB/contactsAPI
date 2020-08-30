
exports.up = function(knex) {
    return knex.schema

    .createTable('contacts', tbl => {
        tbl.increments();

        tbl.string('name', 128)
            .notNullable();

        tbl.integer('number')
            .unique()
            .notNullable();

        tbl.string('email')
            .unique()
    })

    .createTable('users', tbl => {
        tbl.increments()

        tbl.string('username', 100)
            .notNullable()
            .unique()

        tbl.string('password', 150)
            .notNullable()
    })
};


exports.down = function(knex) {
return knex.schema.dropTableIfExists('users')
};
