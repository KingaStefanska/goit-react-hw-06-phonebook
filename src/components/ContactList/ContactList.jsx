import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const toDelete = idToDelete => {
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
                  onClick={() => toDelete(contact.id)}
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
