const dashboard = async (req, res) => {
    const user = req.user
    console.log(user);
    res.status(200).json(user)
}

module.exports = dashboard