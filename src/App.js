import { useState, useEffect } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import './App.css';
import ContactList from './Components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.length === 0) {
      alert('Some filed is empty');
      return false;
    }

    const isExistContact = contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }

    return handleAddNewContact();
  };

  const handleAddNewContact = newContact => {
    newContact = {
      name: name,
      number: number,
      id: uuidv4(),
    };

    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const getVisibleFilterContacts = () => {
    const filterNameLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNameLowerCase),
    );
  };

  useEffect(() => {
    const getContactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(getContactsStorage);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleFilterContacts = getVisibleFilterContacts();

  return (
    <div>
      <ContactForm
        name={name}
        number={number}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={visibleFilterContacts}
        onRemove={handleRemoveContact}
      />
    </div>
  );
}
