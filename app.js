// getiing started
const express = require('express')
const mongoose = require('mongoose');
const Handlebars = require('handlebars')
// install express-handlebars 
var exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override')

const app = express()

// INITIALIZE BODY-PARSER AND ADD IT TO APP
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars:allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

// initialize mongoose
mongoose.connect('mongodb://localhost/nodejs_application', { useNewUrlParser: true }, { useUnifiedTopology: true });



//***************************

// Model
const Review = mongoose.model('Review', {
    title: String,
    gifTitle: String,
    description: String

  });

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
  res.render('reviews-new', {title: "New Review"});
})
 
// CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review)
    res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
  }).catch((err) => {
    console.log(err.message)
  })
})

 // SHOW
app.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id).then((review) => {
      res.render('reviews-show', { review: review })
    }).catch((err) => {
      console.log(err.message);
    })
  })

// EDIT
app.get('/reviews/:id/edit', (req, res) => {
  Review.findById(req.params.id, function(err, review) {
    res.render('reviews-edit', {review: review, title: "Edit Review"});
  })
})
  
// UPDATE
app.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/reviews/${review._id}`)
    })
    .catch(err => {
      console.log(err.message)
    })
})



app.listen(3000, () => {
  console.log('App listening on port 3000!')
})











// module.exports = {
//     sayHello, area, perimeter, circleArea,
//     insert all functions here 
//   }
  