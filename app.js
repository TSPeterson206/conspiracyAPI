const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000

// if (process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '5mb' }))

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/tutors', require('./routes/tutors'))
app.use('/technologies', require('./routes/technologies'))
app.use('/locations', require('./routes/locations'))
app.use('/reviews', require('./routes/reviews'))


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


const winston = require('winston');
require('winston-daily-rotate-file')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  handleExceptions: true,
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      dirname:'./logs',
      frequency:'1m',
      filename: 'application-%DATE%.log',
      datePattern: 'dddd, MMMM Do YYYY, h:mm:ss a',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: 3
    })
  ]
});

logger.info('hitting the app')
module.exports=logger;