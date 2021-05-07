import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';

import ContactItem from '../ContactItem';

import styles from './ContactsList.module.scss';

// Компонент списка контактов
export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getfilteredContacts); // Селектор всех контактов

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
