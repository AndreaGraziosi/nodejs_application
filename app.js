// getiing started
const express = require('express')
const app = express()


// initialize mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs_application', { useNewUrlParser: true }, { useUnifiedTopology: true });

//Todo insert the promise


// INITIALIZE BODY-PARSER AND ADD IT TO APP
app.use(express.urlencoded({ extended: true }));
// Model
const Review = mongoose.model('Review', {
    title: String,
    gifTitle: String,
    description: String

  });

// install express-handlebars 
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//***************************



//Routes!!

  // INDEX
  app.get('/', (req, res) => {
    Review.find()
      .then(reviews => {
        res.render('reviews-index', { reviews: reviews });
      })
      .catch(err => {
        console.log(err);
      })
  })
  
  // NEW
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
  })
 
// CREATE
app.post('/reviews', (req, res) => {
    Review.create(req.body).then((review) => {
      console.log(review);
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
    })
  })
  




app.listen(3000, () => {
  console.log('App listening on port 3000!')
})











// module.exports = {
//     sayHello, area, perimeter, circleArea,
//     insert all functions here 
//   }
  