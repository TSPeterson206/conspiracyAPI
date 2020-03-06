const express = require('express')
const router = express.Router({
  mergeParams: true
})
const verbsCtrl = require('../controllers/verbs')

router.get('/', verbsCtrl.getAllVerbs)
router.get('/stock', verbsCtrl.getStockVerbs)
router.get('/:userId', verbsCtrl.getAllOwnVerbs)
router.get('/users', verbsCtrl.getAllUserVerbs)
router.delete('/:verbId', verbsCtrl.deleteVerb)
router.post('/', verbsCtrl.addVerb)

module.exports = router
