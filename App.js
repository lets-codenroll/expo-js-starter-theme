import React from 'react';
import { AppProvider } from './src/context/AppProvider';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
