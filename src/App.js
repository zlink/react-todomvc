import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainSection />
      <Footer />
    </Provider>
  );
}

export default App;
