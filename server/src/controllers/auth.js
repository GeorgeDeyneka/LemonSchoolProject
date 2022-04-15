const fs = require("fs");
const crypto = require("crypto");


const filePathToUsers = "/users.json";
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

const auth = (req, res) => {
    const content = fs.readFileSync(__dirname + filePathToUsers, "utf8");
    const users = JSON.parse(content);
    for (let user of users) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            let head = Buffer.from(
                JSON.stringify({alg: 'HS256', typ: 'jwt'})
            ).toString('base64')
            let body = Buffer.from(JSON.stringify(user)).toString(
                'base64'
            )
            let signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${head}.${body}`)
                .digest('base64')

            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: `${head}.${body}.${signature}`,
            })
        }
    }

    return res.status(404).json({message: 'User not found'})
}

module.exports = {auth}
