
const {UnauthenticatedError} = require("../errors/index")
const jwt = require("jsonwebtoken")

const authenticateJWT = async (req, res, next) => {
    const tokenAuth = req.headers.authorization

    if (!tokenAuth || !tokenAuth.startsWith('token ')) {
        throw new UnauthenticatedError('Token inválido ou não fornecido')
    }

    const token = tokenAuth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()

    } catch (e) {
        throw new UnauthenticatedError('Token EXPIRADO')
    }

}

module.exports = authenticateJWT