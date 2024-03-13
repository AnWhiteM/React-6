import { ContactList } from '../ContactList/ContactList'
import { SearchBox } from '../SearchBox/SearchBox'
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import initialContacts from '../../../initialContacts.json'
import './App.css'

export const App = () => {
 
  

  

  const getStoredContacts = () => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  };
  
  const [contacts, setContacts] = useState(getStoredContacts);
 
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (searchQuery) => {
    const filteredContacts = initialContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  
  return (
    <>
     <h1>Phonebook</h1>
     <ContactForm addContact={addContact} />
     <SearchBox handleFilterChange={handleFilterChange} />
     <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  )
}


