import React from 'react';
import { useState, useEffect } from "react";
import Header from './components/Header';
// import { uuid } from 'uuidv4';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

import './App.css';
function App() {
  //AUTOMATICALLY ADDING CONTACTS ONE AFTER ANOTHER USING REACT HOOKS {useState Hook}
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  // MANAUAL WAY OF ADDING CONTACTS USING LISTS
  // const contacts = [
  //   {
  //     id: "1",
  //     "name": "Wajahat",
  //     "email": "Ali@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     "name": "Zahra",
  //     "email": "zahra@gmail.com"
  //   },
  // ];
  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  const addContactHandler = (contact) => {
    // console.log(contacts);
    //we are using setContacts to hold the state values into the array and map them on the page.
    setContacts([...contacts, contact]);
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    // Give the class of "ui container" replacing "App".
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactHandler={removeContactHandler}/>

    </div>
  );
}

export default App;
