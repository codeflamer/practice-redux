import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {ActionTypes} from '../redux/constants/action-types'
import { setProducts } from '../redux/actions/ProductAction';



const ProductListing = () => {
    const products = useSelector((state)=> state);
    console.log(products);
    const dispatch = useDispatch();

    const fetchproducts = async()=>{
        const response = await axios 
        .get('https://fakestoreapi.com/products')
        .catch((err)=>console.log('Error: ',err))

        dispatch(setProducts(response.data));
    }
    
    useEffect(()=>{
        fetchproducts();
    },[])
    return (
        <div className='ui grid container' style={{ marginTop: 10 }}>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
