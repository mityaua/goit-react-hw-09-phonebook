import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import AddContactButton from '../AddContactButton';

import styles from './ContactForm.module.scss';

const initialState = {
  name: '',
  number: '',
};

// Компонент формы добавления контакта
export default function ContactForm() {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const contacts = useSelector(contactsSelectors.getContacts); // Селектор всех контактов
  const isLoading = useSelector(contactsSelectors.getLoading); // Селектор статуса загрузки

  const dispatch = useDispatch();

  // Диспатчит операцию добавления контакта + useCallback
  const onSubmit = useCallback(
    (name, number) => {
      dispatch(contactsOperations.addContact(name, number));
    },
    [dispatch],
  );

  // Следит за инпутом
  const hanldeChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Метод на отправке формы
  const hanldeSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();

    // Проверка на дубликат по имени
    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    // Проверка на дубликат по номеру
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Отправка имени и номера после проверки
    if (!nameInContacts && !numberInContacts) {
      onSubmit(normalizedName, number); // Вызов операции добавления контакта

      resetForm();
      return;
    }

    toast.info(`${name} is already in contacts`);
  };

  // Сброс полей формы (после отправки)
  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          className={styles.input}
          value={name} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          disabled={isLoading}
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Number</span>
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          className={styles.input}
          value={number} // Пишет значение в локальный стейт
          onChange={hanldeChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          disabled={isLoading}
          required
        />
      </label>

      <AddContactButton />
    </form>
  );
}
