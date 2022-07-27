import { combineReducers, legacy_createStore as createStore } from "redux";
import coinPriceReducer from "./coinPriceReducer";

const reducers = combineReducers({
  currentCoin: coinPriceReducer
})

const store = createStore(reducers)


export default store;