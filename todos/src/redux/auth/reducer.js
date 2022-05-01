import { LoginSuccess, LoginFailure } from "./action"

const init = {
    isAuth:false,
    token:"",

}

export const authReducer = (state=init, {type,payload}) =>{
    switch (type) {
        case LoginSuccess:{
          return {
              ...state,
              isAuth:true,
              token:payload
          }
        }
        case LoginFailure:{
            return {
                ...state,
                isAuth:false,
                token:""
            }
        }
        default:
            return state
    }
}