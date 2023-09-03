import { DataSource } from "typeorm";

const myDataSource = new DataSource({
    type : "mysql",
    host : "localhost",
    port : 3306,
    username : "root",
    password : "root123",
    database : "side",
    entities : ["src/entity/*.ts"],
    logging : true,
    synchronize : true,
})

export default myDataSource;