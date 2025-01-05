import {configureStore} from '@reduxjs/toolkit'
import { loginApi } from '../api/login.api'
import useReducer from '../reducer/user.reeducer'
import { categoryApi } from '../api/category.api'
import { serviceApi } from '../api/service.api'
import { contactApi } from '../api/contact.api'

const storeConfig = configureStore({ 
    reducer:{
        user:useReducer,
        [loginApi.reducerPath]:loginApi.reducer,
        [categoryApi.reducerPath]:categoryApi.reducer,
        [serviceApi.reducerPath]:serviceApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(loginApi.middleware)
        .concat(categoryApi.middleware)
        .concat(serviceApi.middleware)
        .concat(contactApi.middleware)

})

export default storeConfig