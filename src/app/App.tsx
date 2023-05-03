import React from 'react';
import Providers from './Providers';
import 'react-native-gesture-handler';

import Screens from '../screens';

const App = () => {
  return (
    <Providers>
      <Screens />
    </Providers>
  );
};

export default App;
