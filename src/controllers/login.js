const jwt = require("jsonwebtoken")
const { BadRequerestError } = require("../errors/index")


const login = async (req, res) => {
  const { username, password } = req.body
  if (username != '' && password != '') {
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'usuário criado', token })
  } else {
    throw new BadRequerestError('Você precisa preencher ambos os campos')
  }
}


module.exports = login