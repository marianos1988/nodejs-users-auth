import mySql from "mysql";

const dbConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "nodejs-auth"
}

const pool = mySql.createPool(dbConfig);

export default pool;

