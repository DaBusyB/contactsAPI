module.exports = (req, res, next) => {
    if(req.session && req.session.user) {
        next()
    } else {
        res.status(403).json({ message: 'Your access is denied' })
    }
}