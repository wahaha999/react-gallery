import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./store/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export default { store, persistor };
