import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from "./api/middleware";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (rootReducer, rootSaga, initialState = {}) => {
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filterPhones']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, apiMiddleware)),
  );

  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {
    store, persistor
  }
}
