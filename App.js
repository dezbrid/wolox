import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { StoreContext, initialState, storeReducer } from './store';

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  console.log('GlobalState', state)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};



export default App;
