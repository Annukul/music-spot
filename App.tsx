import React from 'react';
import { Provider } from './src/state/providers';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigators/root-stack';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
