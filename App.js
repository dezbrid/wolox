import 'react-native-gesture-handler';
import React, { useReducer, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Routes from './routes';
import { StoreContext, initialState, storeReducer } from './store';
import { ASYNCSTORAGE_ACTION } from './Constant/actionType';
import { PreLoad } from './Components';

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const [isLoading, setIsLoading] = useState(true)
  console.log('GlobalState', state)
  useEffect(() => {
    async function getStateInAsyncStorage() {
      const getState = await AsyncStorage.getItem('state');
      const newState = getState ? JSON.parse(getState) : {};
      dispatch({ type: ASYNCSTORAGE_ACTION, payload: newState })
      setIsLoading(false)
    }
    getStateInAsyncStorage();
  }, []);
  useEffect(() => {
    async function setStateAsyncStorage() {
      if (state) {
        await AsyncStorage.setItem('state', JSON.stringify(state));
      }
    }
    setStateAsyncStorage();
  }, [state]);
  if (isLoading) {
    return (<PreLoad />)
  }
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreContext.Provider>
  );
};



export default App;
