const Article = require('../models/articles');

const articleController = {
    findAll: async (_, res) => {
        const articles = await Article.findAll();
        res.json(articles);
    },

    findOne: async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const article = await Article.findOne(id);
        if (article) {
            res.json(article);
        } else {
            // Penser à insérer ici un middle pour gérer les 404
            next();
        }
    },
};

module.exports = articleController;