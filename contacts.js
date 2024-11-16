const fs = require('fs').promises;
const path = require('path');

// TODO: documentare fiecare funcție

//cale catre fisier contacts.json
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

//lista toate contacte
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
        return [];
    }
}

//contact dupa id
async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        return contacts.find(contact => contact.id === contactId) || null;
    } catch (error) {
        console.error('Error getting contact by ID:', error);
    }
}

//sterge contact dupa id
async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
        return true;
    } catch (error) {
        console.error('Error removing contact:', error);
        return false;
    }
}

//adugare contact nou
async function addContact(name, email, phone) {
    try {
        const contacts = await listContacts();
        const newContact = {
            id: String(Date.now()), // genereaza un ID nou
            name,
            email,
            phone,
        };
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return newContact;
    } catch (error) {
        console.error('Error adding contact:', error);
    }
}

//exporturi
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};