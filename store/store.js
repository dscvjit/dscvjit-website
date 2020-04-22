import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import productsReducer from './reducers/productsReducer';

export const initStore = (initialState) => {
  return createStore(
    productsReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
