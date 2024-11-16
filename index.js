const { Command } = require('commander');
const contacts = require('./contacts');

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

//functie care apeleaza actiunea
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const contact = await contacts.getContactById(id);
      console.log(contact ? contact : 'Contact with id ${id} not found');
      break;

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      console.log('New contact added:', newContact);
      break;

    case 'remove':
      const isRemoved = await contacts.removeContact(id);
      console.log(isRemoved ? 'Contact width id ${id} removed' : 'Contact with id ${id} not found');
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

//apeleaza functia cu argmentele din linia de comanda
invokeAction(argv);
