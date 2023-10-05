const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) return res.status(403).json({
        error: "Um token é necessário para autenticação"
    });

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Token inválido" });
    }

    return next();
}


module.exports = verifyToken;