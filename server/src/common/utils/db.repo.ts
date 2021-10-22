import eventEmitter from 'events';
import mysql2 from 'mysql2/promise';
import config from "../../config";

const pool = mysql2.createPool({
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPasswrod,
    database: config.mysqlDatabase,
    port: +config.mysqlPort,
    connectionLimit: 10,
    waitForConnections: true
});

export type dbConnectionType = mysql2.PoolConnection;

class DatabaseRepository{

    async setConnection() : Promise<dbConnectionType>{
        return (await pool.getConnection());
    }

    // public async getFormatStringToArr(params : string) : Promise<Array<string>>{
    //     return (params.split(",").map(function(item){
    //         return item.trim();
    //     }));
    // }

    // public async getResult({query, params} : dbParamsType){
    //     const dbConn = await pool.getConnection();
    //     try{
    //         const paramsArr = await this.getFormatStringToArr(params);
    //         const result = await dbConn.query(query,paramsArr);
    //         return result[0];
    //     }catch(e){
    //         throw new Error(e);
    //     }finally{  
    //         dbConn.release();
    //     }
    // };
};

export default new DatabaseRepository();

