const client = require('../database');

class Category {
    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const {rows} = await client.query('SELECT * FROM categories');
            return rows.map(row => new Category(row));

        } catch (error) {
            console.log(error);
            return(error);
        }
    }

    static async findOne(id) {
        try {
            const preparedQuery = {
                text: 'SELECT * FROM categories WHERE id=$1',
                values: [id]
            }
            const {rows} = await client.query(preparedQuery);
            if (rows[0]) {
                return new Category(rows[0]);
            }
        } catch(error) {
            console.log(error);
            return(error);
        }
    }
}

module.exports = Category;