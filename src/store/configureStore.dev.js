
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'


const middleware = [ thunk,createLogger() ]

const configureStore  = preloadedState =>(
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools (applyMiddleware(...middleware))
    )
)

export default configureStore