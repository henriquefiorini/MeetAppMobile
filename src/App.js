import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import { Store, Persistor } from '~/store';
import Routes from '~/routes';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
