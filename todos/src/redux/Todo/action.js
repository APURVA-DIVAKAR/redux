
//actioType
export const ADD_TODO  = "ADD_TODO";
export const GET_TODO_LOADING ="GET_TODO_LOADING"
export const GET_TODO_SUCCESS="GET_TODO_SUCCESS"
export const GET_TODO_ERORR="GET_TODO_ERORR"

//actionCreator
export const addTodo =(payload) =>({
    type: ADD_TODO,
    payload
})

export const getTodoIsLoading = ()=>({
    type: GET_TODO_LOADING
})
export const getTodoIsError = ()=>({
    type: GET_TODO_ERORR
})
export const getTodoIsSuccess = (payload)=>({ 
    type:GET_TODO_SUCCESS,
    payload   
})
