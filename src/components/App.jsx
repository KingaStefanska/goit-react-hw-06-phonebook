import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts } from 'redux/selectors';
import css from './App.module.css';

const KEY = 'Contacts';

const App = () => {
  const contacts = useSelector(getContacts);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(KEY, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
