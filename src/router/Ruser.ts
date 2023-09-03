import express, { Request, Response } from "express";
import myDataSource  from "../app-data-source";
import bcrypt from "bcrypt";
const User =  require("../entity/user");
var router = express.Router();


router.get(`/:id`, async function(req : Request, res : Response) {
    const ids  = req.params.id
    const idNum = Number(ids);
    const repo = await myDataSource.getRepository(User)
    const user = await repo.findOneBy({id : idNum})
    if(user == null ){
        throw new Error("존재하지 않는 유저입니다.");
    }
    return res.send(user)
})

router.post('/login',  async function(req : Request, res : Response){
    const data = req.body
    const email = data.email
    const password = data.password
    const repo = getDatasource()
    const user = await repo.createQueryBuilder('user')
    .where("user.email = :email", { email : email})
    .getOne()

    if(user == null) throw new Error('존재하지 않는 이메일 입니다.')

    const isValid = comparePassword(password, user.password)
    console.log('is', isValid)
    if(!isValid) throw new Error('패스워드가 잘못되었습니다.')

    res.send(user)
})

router.post('/register', async function(req:Request, res: Response){
    const data = req.body
    console.log('data',data)
    const hash = hashPassword(data.password)
    data.password = hash
    const repo = getDatasource()
    const user = repo.create(data)
    const result = repo.save(user)
    return res.send(result)
})

function getDatasource(){
    return myDataSource.getRepository(User)
}

function hashPassword(password : string){
    return bcrypt.hashSync(password, 10)
}

function comparePassword(password : string, hashPassword : string){
    return bcrypt.compareSync(password, hashPassword)
}



module.exports = router