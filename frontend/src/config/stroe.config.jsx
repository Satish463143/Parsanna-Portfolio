import {configureStore} from '@reduxjs/toolkit'
import { loginApi } from '../api/login.api'
import useReducer from '../reducer/user.reeducer'

const storeConfig = configureStore({ 
    reducer:{
        user:useReducer,
        [loginApi.reducerPath]:loginApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
        .concat(loginApi.middleware)
})

export default storeConfig