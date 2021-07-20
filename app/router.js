const {Router} = require('express');
const articleController = require('./controllers/articleController');
const categoryController = require('./controllers/categoryController');
const fetchController = require('./controllers/fetchController');

const router = Router();

// Route de test
router.get('/', (req, res) => res.send("Cette page est vide mec."));

// Routes pour récupérer des articles de la BDD
router.get('/articles', articleController.findAll);
router.get('/articles/:id', articleController.findOne);

// Routes pour récupérer des catégories de la BDD
router.get('/categories', categoryController.findAll);
router.get('/categories/:id', categoryController.findOne);

// Route de l'API Flux RSS
router.get('/API/articles', fetchController.findAll);

module.exports = router;