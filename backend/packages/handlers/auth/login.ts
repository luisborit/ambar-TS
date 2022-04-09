import { MysqlConnection } from "../databases/mysql";
import {Login} from '@ambar-backend/types/MySql'

export async function login(username, password):Promise<Login>{
    const mysqlConnection = new MysqlConnection();
    const [rows] = await mysqlConnection.pool('SELECT * FROM `user` WHERE username = ? AND pasword = ?',[username, password]);
    return rows;
}