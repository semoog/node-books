// EXAMPLE QUERY LOGIN NOT REAL WORLD
module.exports = {
    isAuthorized: function(req, res, next) {
        if (req.query.pass === '1234') {
            next();
        } else {
            res.sendStatus(401);
        }
    }
};
