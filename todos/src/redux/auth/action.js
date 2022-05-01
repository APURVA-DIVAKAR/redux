export const LoginSuccess = "LoginSuccess";
export const LoginFailure = "LoginFailure";

export const loginSuccess =(token)=>{
    return{
        type:LoginSuccess,
        payload:token
    }
}
export const loginFailure =(err)=>{
    return{
        type:LoginFailure,
        payload:err
    }
}
