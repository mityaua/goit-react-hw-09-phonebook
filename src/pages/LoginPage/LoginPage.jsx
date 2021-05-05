import { useEffect } from 'react';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';

// Компонент страницы автозирации
const LoginPage = () => {
  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Log in to App | Phonebook';
  }, []);

  return (
    <main>
      <Title>Log in to Phonebook</Title>

      <LoginForm />
    </main>
  );
};

export default LoginPage;
