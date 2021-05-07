import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';
import Loader from '../../components/Loader';

// Компонент страницы автозирации
export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Log in to App | Phonebook';
  }, []);

  return (
    <main>
      <Title>Log in to Phonebook</Title>

      <LoginForm />

      {isLoading && <Loader />}
    </main>
  );
}
