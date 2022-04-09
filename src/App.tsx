import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import Header from "./app/components/Header";
import Gallery from "./app/components/Gallery";
import { appReducer } from "./store/reducer";
import "./App.css";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
