import { useEffect } from 'react';

import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm';

// Компонент страницы регистрации
const RegisterPage = () => {
  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Create account | Phonebook';
  }, []);

  return (
    <main>
      <Title>Create your account</Title>

      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
