import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider: FC = props => {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
