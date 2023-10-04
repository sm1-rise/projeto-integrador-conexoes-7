const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.token || req.query.token || req.headers["x-access-token"];


    if (!token) return res.status(403).json({
        error: "Um token é necessário para autenticação"
    });

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Token inválido" });
    }

    return next();
}


module.exports = verifyToken;