const { Router } = require("express");
const login = require("../controllers/login")
const dashboard = require("../controllers/dashboard")
const router = Router()

router.post('/login', login)
router.get('/dashboard', dashboard)

module.exports = router
