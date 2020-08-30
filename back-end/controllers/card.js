

const Card = require('./../models/card');

const createCard = async (req,res) => {
  console.log('**************************************')
  console.log(req.body)
  const {id, user_id, title, text, user_name, posted_at} = req.body;
  const newCard = new Card({id, user_id, title, text, user_name, posted_at});
  try {
    await newCard.save();
    res.status(201).send('all gucci');
  } catch (e) {
    res.status(400).send(`error in saving card: ${e}`);
  }
}



const fetchCards = async (req, res) => {
  console.log('fetchcards called');
  try {
    const cardList = await Card.find({});
    res.status(201).send(cardList);
  } catch (e) {
    res.status(405).send(`error finding cards: ${e}`);
  }
}

module.exports = {createCard, fetchCards}

