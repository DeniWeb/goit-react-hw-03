import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contact, setContact] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filteredContacts, setFilteredContacts] = useState(contact);

  const handleDelete = id => {
    const deletedData = contact.filter(item => item.id !== id);
    setContact(deletedData);
    setFilteredContacts(deletedData);
  };

  const handleChange = e => {
    const newData = contact.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredContacts(newData);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox contact={contact} handleChange={handleChange} />
      <ContactList contact={filteredContacts} handleDelete={handleDelete} />
    </>
  );
}

export default App;
