const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  try {
    const db = mongodb.getDatabase();
    const contacts = await db.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }  
};

const getContactById = async (req, res) => {
  const contactId = req.params.id;    
  try {
    const db = mongodb.getDatabase();
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(contactId) });
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
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