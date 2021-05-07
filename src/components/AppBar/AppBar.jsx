import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.scss';

// Компонент хедера приложения (бара)
export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса авторизации юзера

  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
