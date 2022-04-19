import { getUser }  from "../databases/models/UserOrm";
import { Login } from '@ambar-backend/types/MySql'

export async function login(username:string, password:string):Promise<any>{
    try {
        const response = await getUser({"username":username, "password":password});
        return response
    } catch (error) {
        console.log(error)
        return error;
    }
}