import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './view';
import { store, persistor } from './store';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading</p>} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
