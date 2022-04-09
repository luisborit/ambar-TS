import mysql2 from 'mysql2'

export class MysqlConnection {
    async pool(query, params):Promise<any>{
        const pool = mysql2.createPool({
            host: 'localhost',
            user: 'root',
            database: 'api',
            password: 'mysql'
        });
        
        const promisePool = pool.promise();

        return await promisePool.query(query,[params]);
    }
}