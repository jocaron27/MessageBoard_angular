const router = require('express').Router()
const {Reply} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Reply.findAll()
      .then(replies => res.json(replies))
      .catch(next)
  })

router.post('/', (req, res, next) => {
  Reply.create(req.body)
    .then(reply => res.json(reply))
    .catch(next)
})
