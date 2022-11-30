import React, { FC, ComponentType } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { SafeAreaView } from 'react-native';
import { Provider } from '../../state/providers';

export const safeAreaWrapper = (Component: ComponentType<{}>) => {
  return function inject(props: any) {
    const EnhancedComponent: FC = () => (
      <Provider>
        <SafeAreaView>
          <Component {...props} />
        </SafeAreaView>
      </Provider>
    );
    hoistNonReactStatic(EnhancedComponent, Component);
    return <EnhancedComponent />;
  };
};
