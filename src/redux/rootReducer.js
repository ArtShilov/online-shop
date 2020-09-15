import { combineReducers } from "redux";
import {products, cart} from './reducers'

export default combineReducers({
  products,
  cart
})
