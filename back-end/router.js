
const router = require('express').Router();

const cardController = require('./controllers/card');



router.post('/addCard', cardController.createCard);
router.get('/getAllCards', cardController.fetchCards);

module.exports = router;

