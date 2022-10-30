'use strict'

const config = require('../config')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`Could not connect to MongoDB because of ${err}`)
  process.exit(1)
})

//configurations for development environment
if (config.env === 'dev') {
  mongoose.set('debug', true)
}

//configurations for auality assurance environment
if (config.env === 'qa') {
  mongoose.set('debug', true)
}

//configurations for user accept testing environment
if (config.env === 'uat') {
  mongoose.set('debug', true)
}

//configurations for production environment
if (config.env === 'prod') {
  mongoose.set('debug', false)
}

exports.connect = () => {
  var mongoURI = (config.env === 'prod' || 'dev' ? config.mongo.uri : config.mongo.testURI)

  //create connection
  mongoose.connect(mongoURI, {
    keepAlive: 1,
    useNewUrlParser: true
  })

  mongoose.set('useCreateIndex', true)

  return mongoose.connection
}