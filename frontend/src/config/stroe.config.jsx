import {configureStore} from '@reduxjs/toolkit'
import { loginApi } from '../api/login.api'
import useReducer from '../reducer/user.reeducer'
import { categoryApi } from '../api/category.api'
import { serviceApi } from '../api/service.api'
import { contactApi } from '../api/contact.api'
import { clientsApi } from '../api/clients.api'
import { featuredApi } from '../api/featured.api'

const storeConfig = configureStore({ 
    reducer:{
        user:useReducer,
        [loginApi.reducerPath]:loginApi.reducer,
        [categoryApi.reducerPath]:categoryApi.reducer,
        [serviceApi.reducerPath]:serviceApi.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
        [clientsApi.reducerPath]:clientsApi.reducer,
        [featuredApi.reducerPath]:featuredApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(loginApi.middleware)
        .concat(categoryApi.middleware)
        .concat(serviceApi.middleware)
        .concat(contactApi.middleware)
        .concat(clientsApi.middleware)
        .concat(featuredApi.middleware)

})

export default storeConfig