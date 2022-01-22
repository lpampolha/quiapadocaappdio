import { applyMiddleware, combineReducers, createStore } from 'redux'
import Reactotron from '../plugins/ReactotronConfig'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import categoryReducer from './categories/category.reducer'
import productReducer from './products/product.reducer'
import authReducer from './auth/auth.reducer'


// modularizações dos reduces
const reducers = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    product: productReducer
})

// middlewares de confifurações do projeto
const middleware = [thunk, multi]

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(
    applyMiddleware(...middleware),
    Reactotron.createEnhancer()
)

// criação da store
const store = createStore(reducers, compose)

export default store