import React from 'react';
import { Provider } from 'react-redux';
import FruitsContainer from './frontend/fruits_container';

const App = ({store}) => (
  <Provider store={store}>
    <FruitsContainer />
  </Provider>
)

export default App;
