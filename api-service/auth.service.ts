import { $apiAuth } from "../api/interceptor";
import { saveCookies } from "../helpers/auth.helpers";
import { ISignUpPayload, IAuthPromise,ISignInPayload } from "../types/auth.types";
import Cookies from "js-cookie";
//sign Up
export const signUp = async(data:ISignUpPayload):Promise<IAuthPromise | undefined> =>{
    try{
        const response = await $apiAuth.post("/auth/signup",data)
        return response?.data
    }catch(error){
        console.log(error,'error');
        
    }  
}
// Sign in
export const signIn = async(data:ISignInPayload):Promise<IAuthPromise | undefined>=>{
    try{
        const response = await $apiAuth.post("/auth/signin",data)
        saveCookies(response?.data?.tokens?.access_token)
        // Cookies.set("token", response?.data?.tokens?.access_token)
        return response?.data
    }catch(error){
        console.log(error,'error');
        
    }  
}