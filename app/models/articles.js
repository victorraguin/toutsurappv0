const client = require('../database');

class Article {
    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const {rows} = await client.query('SELECT * FROM articles');
            return rows.map(row => new Article(row));

        } catch (error) {
            console.log(error);
        }
    }

    static async findOne(id) {
        try {
            const preparedQuery = {
                text: 'SELECT * FROM articles WHERE id=$1',
                values: [id]
            }
            const {rows} = await client.query(preparedQuery);
            if (rows[0]) {
                return new Article(rows[0]);
            }
            // Je sais pas à quoi ça sert, je laisse ça là pour voir s'il y a une erreur
            // return null;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = Article;