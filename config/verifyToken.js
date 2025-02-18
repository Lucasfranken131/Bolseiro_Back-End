const SECRET_KEY = process.env.SECRET_KEY || "minha_chave_secreta"

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

    if (!token) {
        return res.status(403).json({ message: "Token não fornecido" });
    }

    try {
        req.user = jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
}
