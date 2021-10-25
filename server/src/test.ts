import { DatabaseRepository } from "./common";

const dbConn = new DatabaseRepository();

(async()=>{

    // test transacti
    const conn = await dbConn.getPool().getConnection();
    await conn.beginTransaction();

    await conn.commit();

    await conn.rollback();
    conn.release();

    // get result

})();