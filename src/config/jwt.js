import jwt from "jsonwebtoken"

const generateToken = (data) => {
 return jwt.sign({data},"secret",{expiresIn: "1d"})
}

const checkToken = () => {
 return jwt.verify()
}

const decodeToken = () => {
 return jwt.decode()
}

export {generateToken,checkToken, decodeToken}