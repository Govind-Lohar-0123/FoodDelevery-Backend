import mysql2 from "mysql2"
function mysqlConnectDB() {
    try {
        const db = mysql2.createConnection({
           
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'FoodDelevery'
        })
        console.log("Connection with mysql Successfull");
        return db;
    }
    catch (err) {
        console.log("Connection with mysql is failed...");
        
    }


}


export default mysqlConnectDB