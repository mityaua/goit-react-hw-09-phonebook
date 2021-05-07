import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

import styles from './Navigation.module.scss';

// Компонент главной навигации (меню) приложения
export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            Home
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={styles.link}
              activeClassName={styles['link--active']}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
