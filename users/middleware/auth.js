import jwt from "jsonwebtoken";
import user from '../models/user.js'

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '');

        const decoded = jwt.verify(token, 'test')
        console.log(decoded)
        const user = await user.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log(user)
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ success: false, error: 'Please Authenticate...' })
    }
}
export default auth