import mysql2 from "mysql2"
function mysqlConnectDB() {
    try {
        const db = mysql2.createConnection({
           
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'FoodDelevery'
        })
       
        return db;
    }
    catch (err) {
        
        
    }


}


export default mysqlConnectDB