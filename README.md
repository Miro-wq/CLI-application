### Screenshot links:
- [https://ibb.co/82WLz5N](https://ibb.co/82WLz5N)
- [https://ibb.co/zhgkPNy](https://ibb.co/zhgkPNy)
- [https://ibb.co/vsRM2y3](https://ibb.co/vsRM2y3)
- [https://ibb.co/s3jKqvY](https://ibb.co/s3jKqvY)


# CLI-app  (CLI Contact Manager) 

## Description 

This project is a Command-Line Interface (CLI) application for managing a collection of contacts. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on a contact list stored in a >JSON file. The application is built using Node.js and leverages popular npm packages such as `yargs` and `commander` for parsing command-line arguments.

## Features 

- **List all contacts**: View the entire contact list in a table format.
- **Retrieve a contact**: Search for a contact by their unique ID.
- **Add a new contact**: Add a contact with a name, email, and phone number.
- **Remove a contact**: Delete a contact from the list using their unique ID.
- **JSON storage**: Contacts are stored persistently in a `contacts.json` file located in the `db` folder.
- **Modular design**: Functions for contact management are encapsulated in a separate `contacts.js` module.

## Technologies Used 

- **Node.js**: JavaScript runtime environment.
- **yargs**: For parsing command-line arguments.
- **commander**: An alternative package for CLI argument parsing.
- **fs and path modules**: For file system operations and path handling.

## Project Structure 

```plaintext
cli-contact-manager/
├── db/
│   └── contacts.json  # Stores the contact data
├── index.js           # Main entry point for the CLI
├── contacts.js        # Module for managing contact operations
├── package.json       # Project configuration and dependencies
├── README.md          # Project documentation
```
