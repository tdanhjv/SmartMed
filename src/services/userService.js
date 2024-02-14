import db from "../models/index";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

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
                userData.errMessage = `Your's username isn't exist in our system. Pls try other username!`

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

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }

            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check username is exist ??? 
            let check = await checkUserUsername(data.username);
            if (check === true) {
                resolve({
                    errCode: 1,
                    message: 'Your username is already in use!, Please try another username'
                })
            }
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                username: data.username,
                password: hashPasswordFromBcrypt,
                name: data.name,
                // DOB: '',
                address: data.address,
                gender: data.gender === '1' ? true : false,
                // CCCD: '',
                // nationality: '',
                // BHYT: '',
                // health_condition: '',
                email: data.email,
                phone: data.phone,
                // image: '',
                // family_ID: '',
                role: data.role,
            })
            resolve({
                errCode: 0,
                message: 'OK'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.User.findOne({
            where: { id: userId }
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        }
        await db.User.destroy({
            where: { id: userId } //cannot use user.destroy() because setting raw:true so the object is not sequelize object
        })

        resolve({
            errCode: 0,
            message: `The user is deleted!`
        })
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.name = data.name;
                user.email = data.email;
                user.address = data.address;

                await user.save();
                // await db.User.save({
                //     name: data.name,
                //     email: data.email,
                //     address: data.address
                // }, { where: { id: userId} })
                resolve({
                    errCode: 0,
                    message: 'Update the user succeeds!'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `User's not found!`
                });
            }

        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}