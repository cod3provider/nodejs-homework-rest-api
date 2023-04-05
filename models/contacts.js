const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, "contacts.json");

const updateAllContacts = async (contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === id);
    return result || null;
  } catch (err) {
    console.log(err.message);
  }
}

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === id);
    if (idx === -1) {
      return null;
    }
    const [result] = contacts.splice(idx, 1);
    await updateAllContacts(contacts);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...body,
    }
    contacts.push(newContact);
    await updateAllContacts(contacts);
  } catch (err) {
    console.log(err.message);
  }
}

const updateContact = async (id, body) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === id);
    if (idx === -1) {
      return null;
    }
    contacts[idx] = {id, ...body};
    await updateAllContacts(contacts);
    return contacts[idx];
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
