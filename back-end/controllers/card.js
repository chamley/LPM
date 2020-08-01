

const Card = require('./../models/card');

const createCard = async (req,res) => {
  const newCard = new Card(req.body);
  try {
    newCard.save();
  } catch (e) {
    res.status(400).send(`error in saving card: ${e}`);
  }
}

const fetchCards = async (req, res) => {
  try {
    const cardList = await URLSearchParams.find({});
    res.status(201).send(cardList);
  } catch (e) {
    res.status(404).send(`error finding cards: ${e}`);
  }
}

module.exports = {createCard, fetchCards}
