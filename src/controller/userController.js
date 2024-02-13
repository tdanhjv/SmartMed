import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let username = req.body.username;
    console.log('your username: ', username)
    let password = req.body.password;

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(username, password);
    //console.log(userData) check what userService.handleUserLogin returns
    //check user exist
    //compare password 
    //return userInfo
    //access_token:JWT json web token 
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin
}