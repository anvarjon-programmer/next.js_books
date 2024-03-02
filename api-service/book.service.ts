import { getSystemErrorName } from "util";
import { $api } from "../api/interceptor";
import { IBook } from "../types/book.types";
//create
export const createBook = async(data:IBook) =>{
    try{
        const response = await $api.post("/book/create",data)
        console.log(response);
        
    }catch(error){
        console.log(error,"error");
    }
}
//update
export const updateBook =async()=>{}