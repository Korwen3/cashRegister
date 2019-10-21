const express = require('express');
const app = express();
const consommableRoute = express.Router();

// Consommable model
let Consommable = require('../models/Consommable');

// Add Consommable
consommableRoute.route('/create').post((req, res, next) => {
  Consommable.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Consommables
consommableRoute.route('/').get((req, res) => {
  Consommable.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single consommable
consommableRoute.route('/read/:id').get((req, res) => {
  Consommable.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update consommable
consommableRoute.route('/update/:id').put((req, res, next) => {
  Consommable.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete consommable
consommableRoute.route('/delete/:id').delete((req, res, next) => {
  Consommable.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = consommableRoute;