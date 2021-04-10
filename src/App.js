import React, {useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoute from './components/AppRouter';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index';
import Loader from './components/Loader';

const App = () => {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
      return <Loader />
    }
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
