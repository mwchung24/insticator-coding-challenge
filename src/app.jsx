import React from 'react';
import { Provider } from 'react-redux';

const App = ({store}) => (
  <Provider store={store}>
    <div>hi</div>
  </Provider>
)

export default App;
