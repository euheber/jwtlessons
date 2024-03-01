const CustomAPIError = require("../errors/customErrors")
const jwt = require("jsonwebtoken")

const dashboard = async (req, res) => {
    const tokenAuth = req.headers.authorization

    if (!tokenAuth || !tokenAuth.startsWith('token ')) {
        throw new CustomAPIError('Token inválido ou não fornecido', 401)
    }

    const token = tokenAuth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).json({ decoded })
    } catch (e) {
        throw new CustomAPIError('Token EXPIRADO', 401)
    }
}

module.exports = dashboard