// getiing started
const express = require('express')
const app = express()
// initialize mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs_application', { useNewUrlParser: true }, { useUnifiedTopology: true });
// Model
const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String
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
  
  






app.listen(3000, () => {
  console.log('App listening on port 3000!')
})











// module.exports = {
//     sayHello, area, perimeter, circleArea,
//     insert all functions here 
//   }
  