import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.scss';

// Компонент меню пользователя после авторизации
export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail); // Селектор почты юзера

  const dispatch = useDispatch();

  // Диспатчит операцию выхода из профиля + useCallback
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.profile}>
      <div className={styles.thumb}>
        <img
          src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&&length=1&name=${email}`}
          alt="avatar"
          title="Your avatar"
          className={styles.avatar}
        />
      </div>

      <span className={styles.welcome}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>

      <button
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={onLogout}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
}
