const jwt=require("jsonwebtoken");
const { secret_key, userDetails } = require("../configs/config");

exports.loginControllerDetails = (req, res) => {
    try {
        const token = jwt.sign({ uid: userDetails.uid }, secret_key, {expiresIn: '5d'});

        const { uid, password } = req.body;
        if (uid === userDetails.uid && password === userDetails.password) {
          return res.status(200).json({ token });
        }

        return res.status(401).json({
            message:"wrong credentials"
        })
    } catch (error) {
        console.error('Errror : ', error.message);
        return res.status(500).json({
            "message": 'Internal Server Error',
            error : error.message
        })
    }
} 

