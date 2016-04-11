import {loginConst} from '../constants/login.ts';
const { LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT}=loginConst;

export const login=(state={ isAuthenticated: false, token: null,message:''},{type,payload})=>{

    switch(type){
        case LOGIN_REQUEST: return Object.assign({},state,{
            isAuthenticating: true,
            message: null
        })
        case LOGIN_FAILURE: return Object.assign({},state,{
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
            message: payload.status+': '+payload.statusText
        })
        case LOGIN_SUCCESS: return Object.assign({},state,{
            isAuthenticating: false,
            isAuthenticated: true,
            token: payload.accessToken,
            message: 'Login Successful'
        })
        case LOGOUT: return Object.assign({},state,{
            isAuthenticated: false,
            token: null,
            message: 'Logout Successful'
        })
        default: return state;
    }
}