const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
   Bread.find()
      .then(foundBreads =>{
        res.render('Index',{
          breads: foundBreads,
          title: 'Index Page'
        })
      })
  
  
})

//New
breads.get('/new', (req, res) => {
  res.render('new')
})

//Edit (this must be shown above the SHOW ROUTE)
breads.get('/:id/edit', (req, res) =>{
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread,
      })
    })
})

//Show 
breads.get('/:id', (req, res) =>{
    Bread.findById(req.params.id)
      .then(fondBread => {
        res.render('show', {bread: fondBread})
      })
      .catch (err =>{
        res.send('404')
      })
})

// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true})
    .then(updatedBread => {
      console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
    })
})



// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
  .then(deletedBread =>{
  res.status(303).redirect('/breads')
  })
})

module.exports = breads
