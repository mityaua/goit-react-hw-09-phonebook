import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm';
import Loader from '../../components/Loader';

// Компонент страницы регистрации
export default function RegisterPage() {
  const isLoading = useSelector(authSelectors.getLoading); // Селектор статуса загрузки

  // Сетит title страницы при маунте компонента
  useEffect(() => {
    document.title = 'Create account | Phonebook';
  }, []);

  return (
    <main>
      <Title>Create your account</Title>

      <RegisterForm />

      {isLoading && <Loader />}
    </main>
  );
}
