const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bearerToken = require('express-bearer-token');
const app = express()
const morgan = require('morgan')
const profile = require('./profile');

require("dotenv").config();


const port = process.env.PORT || 8000

// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// if (process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())




app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', profile);

app.use('/accounts', require('./routes/users'))
app.use('/users', require('./routes/users'))
app.use('/nouns', require('./routes/nouns'))
app.use('/verbs', require('./routes/verbs'))
app.use('/descriptors', require('./routes/descriptors'))


app.use((req, res, next) => {
  next({ status: 404, message: 'Unable to locate' })
})

app.use((err, req, res, next) => {
  console.log(err)
  const error = {}
  if (process.env.NODE_ENV !== 'production' && err.stack) error.stack = err.stack
  error.status = err.status || 500
  error.message = err.message || `Internal Server Error`

  console.error(error.message)
  res.status(error.status).json(error)
})

const listener = () => console.log(`Listening on ${port}`)
app.listen(port, listener)



///////////////////////////////////
// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
//     issuer: "{YOUR-AUTH0-DOMAIN}", // e.g., https://you.auth0.com/
//     algorithms: ['RS256']
// });
//////////////////////////////////

// module.exports=authCheck;