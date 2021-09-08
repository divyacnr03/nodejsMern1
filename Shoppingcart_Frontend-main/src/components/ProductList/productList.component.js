import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Products/products.component';
import './productlist.style.css';
import { updateCartWithWishListData } from '../../actions/action';
import axios from 'axios'
import fetch from 'node-fetch'
var Cookies = require('js-cookie')



const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const items = useSelector(state => state.selectedDataForCart);
  const dispatch = useDispatch();

  const loginOnclick = () => {


    // let config = { headers: {'Content-Type' : 'application/json'},
    //       withCredentials: true
    //       }
       axios.post("http://localhost:3007/login", {email:"djf@k.com", password:'kj'})
    .then(function (response) {
      Cookies.set('AuthToken', response.data.AuthToken, { expires: response.data.maxAge })
      console.log(response.data);
    })
  }

  return (
    <div>
      <button onClick={loginOnclick}> login </button>

    </div>

  );
}

export default ProductList;