import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const handleDelete = idToDelete => {
    return dispatch(deleteContact(idToDelete));
  };

  return (
    <div className={css.list_container}>
      {filteredContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {filteredContacts.map(contact => {
            return (
              <li className={css.contactsItem} key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  className={css.contactBtn}
                  type="submit"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>There's no results</div>
      )}
    </div>
  );
};

export default ContactList;
