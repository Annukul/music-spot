import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import authDuck from './src/state/ducks/auth';
import { Provider } from './src/state/providers';
import { dispatch, store, useSelector } from './src/state/store/store';

const App = () => {
  const { getAuthTokenThunk } = authDuck;
  const token = useSelector(state => state);
  const client_id = '1b5ad988bb2b49f69299a914945cb362';
  const client_secret = 'fbcbe099c26e4ef2bb142fd787ddf6b2';

  console.log({ token });

  useEffect(() => {
    dispatch(getAuthTokenThunk({ id: client_id, secret: client_secret }));
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
