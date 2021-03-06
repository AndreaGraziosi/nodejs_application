// getiing started
const express = require('express')
const mongoose = require('mongoose');
const Handlebars = require('handlebars')
// install express-handlebars 
var exphbs = require('express-handlebars');


const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override')
const Tenor = require("tenorjs").client({
  
  "Key": "	5FQ3G64XWCFB", // https://tenor.com/developer/keyregistration
  "Filter": "high", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

const app = express()

app.use(express.static('public'));
// INITIALIZE BODY-PARSER AND ADD IT TO APP
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars:allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

// initialize mongoose
mongoose.connect('mongodb://localhost/nodejs_application', { useNewUrlParser: true }, { useUnifiedTopology: true });

//atlas
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Andreadbmongo:123@cluster0.hta5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


//model
const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String
});

const reviews = require('./controllers/reviews')(app, Review);

module.exports = app;

//Routes!!

app.get('/reviews-gif', (req, res) => {
  // Handle the home page when we haven't queried yet
  term = ""
  if (req.query.term) {
      term = req.query.term
  }
  // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
  Tenor.Search.Query(term, "15")
      .then(response => {
          // store the gifs we get back from the search
          const gifs = response;
          // pass the gifs as an object into the home page
          res.render('choose-gif', { gifs })
      }).catch(console.error);
})

const port = process.env.PORT || 3000;
app.listen(port) ;










