const {Router} = require('express');
const articleController = require('./controllers/articleController');
const fetchController = require('./controllers/fetchController');

const router = Router();

// Route de test
router.get('/', (req, res) => res.send("salut, ça farte ?"));

router.get('/articles', articleController.findAll);
router.get('/articles/:id', articleController.findOne);


// Route de l'API Flux RSS
router.get('/API/articles', fetchController.findAll);

module.exports = router;