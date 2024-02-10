import db from '../models/index'
let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('index.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs');
}

module.exports = {
    getHomepage: getHomepage,
    getCRUD: getCRUD,
}