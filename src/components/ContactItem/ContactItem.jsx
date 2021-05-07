import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';

import styles from './ContactItem.module.scss';

// Компонент одного контакта
export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  // Операция удаления контакта + useCallback
  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>

      <IconButton
        onClick={() => onDeleteContact(contact.id)} // Вызов операции удаления контакта
        aria-label="Delete contact"
      >
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
