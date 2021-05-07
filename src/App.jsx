import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import routes from './routes';
import { authOperations } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound' /* webpackChunkName: "404-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  // Получение текущего юзера при маунте приложения
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute>
            <PageNotFound />
          </PublicRoute>
        </Switch>
      </Suspense>

      <AppFooter />

      <ToastContainer autoClose={2500} />
    </Container>
  );
}
