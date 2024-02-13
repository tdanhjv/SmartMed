import db from "../models/index";
import bcrypt from 'bcryptjs';

let handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserUsername(username);
            if (isExist) {
                //user already exist

                let user = await db.User.findOne({
                    attributes: ['username', 'email', 'password', 'role'],
                    where: { username: username },
                    raw: true
                    // attributes : {
                    //     include: ['username', 'email', 'role'], //define columns that you want to show
                    //     // exclude: [] // define columns that you don't want to show 
                    // }
                });
                if (user) {
                    //compare password
                    let check = await bcrypt.compareSync(password, user.password); //false
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found`
                }


            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's username isn't exist in our system. Pls try other email!`

            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}


let checkUserUsername = (userUsername) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { username: userUsername }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin
}