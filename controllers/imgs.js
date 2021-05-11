const Img = require('../models/car')

module.exports = function(app) {
    app.get('/img', (req,res) => {
        Img.find({}, (err, imgs) => {
            if(err) console.log(err)
            else(res.json(imgs))
       })
    })
   
   
    app.post


    app.update


    app.delete




}