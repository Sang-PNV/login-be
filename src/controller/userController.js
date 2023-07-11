import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"
import jwt from "jsonwebtoken"
import { generateToken } from "../config/jwt.js"

const models = initModels(sequelize)

const logIn = async (req,res) => {
    try {
        const {user_name, pass_word} = req.body
        let checkUserName = await models.account.findOne({
            where: {user_name},
            include: ["infos"]
        })
        if(checkUserName){
            if(checkUserName.pass_word == pass_word){
                // console.log('checkUserName: ', checkUserName);
                let data = {
                    user_name : checkUserName.user_name,
                    user_id : checkUserName.user_id,
                    full_name : checkUserName.infos[0].full_name,
                    age: checkUserName.infos[0].age
                }
              let token = generateToken(data)
                res.status(200).send({mess :"Đăng nhập thành công", token})
            }else{
                res.status(400).send("Mật khẩu không đúng")
            }
        }else{
            res.status(404).send("User_Name không tồn tại")
        }       

    } catch (error) {
        res.status(500).send("Lỗi BE",error)
    }
}

export {logIn}