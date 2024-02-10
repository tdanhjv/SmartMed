import db from '../models/index'
let getHomepage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('index.ejs', {
            data: JSON.stringify(data)
        });
    } catch(e) {
        console.log(e)
    }
    
}

module.exports = {
    getHomepage
}