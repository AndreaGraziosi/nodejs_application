// getiing started
const express = require('express')
const app = express()
//******************** */

// install express-handlebars 
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//***************************



//Routes!!

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
  })


// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { Giftitle: "Great Review", movieTitle: "Batman II" },
    { Giftitle: "Awesome Movie", movieTitle: "Titanic" }
  ]
  
  // INDEX
  app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
  })
  






app.listen(3000, () => {
  console.log('App listening on port 3000!')
})











// module.exports = {
//     sayHello, area, perimeter, circleArea,
//     insert all functions here 
//   }
  