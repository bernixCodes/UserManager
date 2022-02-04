import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/CardDetail';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([])

   const newContactDetail =(contact)=>{
      setContacts([...contacts,{id: uuidv4(), ...contact}])
   }
   useEffect(() => {
    
    // Get saved data from localStorage
     const retrievedContacts = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [];
     setContacts(retrievedContacts)
   }, []);
   useEffect(() => {
    
    // Save data to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));

  }, [contacts]);

  const removeContact = (id)=>{
    const newContactList = contacts.filter(contact =>{
     return contact.id !== id
    })
    setContacts(newContactList)
  }
 
 
  return (
      <Router>
         <Header/>
         <Routes>
           <Route
              path='/' exact
              element={ <ContactList contacts={contacts}  removeContact={removeContact}/>}
              />

             <Route
              path='/add'
              element={ <AddContact newContactDetail = {newContactDetail} />}
              />

              <Route path='/contact/:id' element={<ContactDetail/>}/>
           </Routes>
      </Router>
    
  );
}

export default App;
