import {combineReducers} from 'redux';
import {productReducer,selectedProduct} from './ProductReducer';

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProduct
})

export default reducers