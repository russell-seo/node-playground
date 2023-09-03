import express, { Request, Response } from "express";
import myDataSource  from "./app-data-source"
const bodyParser = require('body-parser')
const userRouter = require("../src/router/Ruser")

myDataSource
    .initialize()
    .then(() => {
        console.log("DataSourcec initialized")
    })
    .catch((err) => {
        console.error("Error during DataSource initialized", err)
    })

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/user', userRouter)


app.listen(8080, () => {
    console.log("connected 8080 port")
})