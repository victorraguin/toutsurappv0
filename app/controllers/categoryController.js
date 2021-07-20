const Category = require('../models/categories');

const categoryController = {
    findAll: async (_, res) => {
        const categories = await Category.findAll();
        res.json(categories);
    },

    findOne: async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const category = await Category.findOne(id);
        if (category) {
            res.json(category);
        } else {
            // Penser à insérer ici un middle pour gérer les 404
            next();
        }
    },
};

module.exports = categoryController;