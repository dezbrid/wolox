import 'react-native-gesture-handler';
import React, { useReducer, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Routes from './Routes';
import { StoreContext, initialState, storeReducer } from './store';

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  console.log('GlobalState', state)
  useEffect(() => {
    async function setStateAsyncStorage() {
      if (state) {
        await AsyncStorage.setItem('state', JSON.stringify(state));
      }
    }
    setStateAsyncStorage();
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};



export default App;
