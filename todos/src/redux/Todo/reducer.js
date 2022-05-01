

import {ADD_TODO,GET_TODO_ERORR,GET_TODO_SUCCESS,GET_TODO_LOADING} from './action'

const initState ={ 
    loding:false,
    error:false,
    todos: []}
export const todoReducer=(state=initState, {type,payload})=>{
    switch(type){
        case GET_TODO_LOADING:
            return{
                // todos:[...state.todos,payload]
                ...state,
                loding: true,
                error:false,
                todos:[]
            };
        case GET_TODO_ERORR:
            return{
                ...state,
                loding: false,
                error:true,
                todos:[]
            }  
        case GET_TODO_SUCCESS:
            return{
                ...state,
                loding: false,
                error:false,
                todos:payload
            }      
            default:
                return state;
    }
}