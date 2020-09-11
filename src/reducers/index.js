import { combineReducers } from "redux";
import products from './products';

const appReducers = combineReducers({
    productsInfo: products
});

export default appReducers;
