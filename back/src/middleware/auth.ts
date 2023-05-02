import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET as string
        );
        req.client = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
