import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";

import{counterReducer} from"./Counter/reducer";
// import {todoReducer} from"./Todo/reducer";

// const rootReducer = combineReducers({
//     count:counterReducer,
//     todo:todoReducer,
// })
// export const store = legacy_createStore(rootReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

import { todoReducer } from "./Todo/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({ count:counterReducer,
        todo: todoReducer,
        auth: authReducer});
   const middleware1=(store)=>(next)=>(action)=>{
      if(typeof action === "function"){
            return  action(store.dispatch);

      }
       next(action);
   }   
   const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;  
    const enhancer = composeEnhancers(
        applyMiddleware(middleware1),
        // other store enhancers if any
      );
export const store = legacy_createStore(rootReducer,
   enhancer)

