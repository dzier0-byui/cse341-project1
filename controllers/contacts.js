const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  try {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts);
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }  
};

const getContactById = async (req, res) => {
  const contactId = req.params.id;    
  try {
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: new ObjectId(contactId)});
    result.toArray().then((contacts) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts[0]);
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};

const helloRoute = (req, res) => {
  res.send('Hello, World! Welcome');
}

const goodbyeRoute = (req, res) => {
  res.send('Goodbye, World!');
}

module.exports = {
    helloRoute,
    goodbyeRoute,
    getAllContacts,
    getContactById
}