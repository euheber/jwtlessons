const { Router } = require("express");
const login = require("../controllers/login")
const dashboard = require("../controllers/dashboard")
const authenticateJWT = require("../middleware/auth")
const router = Router()

router.post('/login', login)
router.get('/dashboard', authenticateJWT, dashboard)

module.exports = router
