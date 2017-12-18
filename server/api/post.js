const router = require('express').Router()
const {Post, Reply} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => res.json(post))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(next)
})

router.get('/:id/replies', (req, res, next) => {
  Reply.findAll({
    where: {
      postId: req.params.id
    }
  })
    .then(replies => res.json(replies))
    .catch(next)
})
