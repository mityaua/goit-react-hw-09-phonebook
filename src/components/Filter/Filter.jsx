import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsActions } from '../../redux/contacts';

import styles from './Filter.module.scss';

// Компонент фильтра контактов
export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter); // Селектор значения фильтра
  const isLoading = useSelector(contactsSelectors.getLoading); // Селектор статуса загрузки

  const dispatch = useDispatch();

  // Диспатчит в экшн значение инпута
  const onChange = useCallback(
    e => {
      dispatch(contactsActions.changeFilter(e.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>

      <label className={styles.label}>
        <span className={styles.text}>Find contacts by name</span>

        <input
          type="text"
          name="filter"
          placeholder="Find"
          className={styles.input}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          disabled={isLoading}
          required
        />
      </label>
    </div>
  );
}
