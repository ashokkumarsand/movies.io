import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState={}) {
    const composeEnhancers = process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    // pass disableImmutabilityMiddleWare: true in module.config.js of your project to disable this middleware in dev environment
    const middleware = (process.env.NODE_ENV && process.env.NODE_ENV !== "production") ?
        [require("redux-immutable-state-invariant").default(), thunk] :
        [thunk];
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
}