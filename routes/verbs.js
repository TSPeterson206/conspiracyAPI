const express = require('express')
const router = express.Router({
  mergeParams: true
})
const verbsCtrl = require('../controllers/verbs')

router.get('/', verbsCtrl.getAllVerbs)
router.get('/stock', verbsCtrl.getStockVerbs)
router.get('/:user_id', verbsCtrl.getAllOwnVerbs)
router.get('/justUser/:user_id', verbsCtrl.getAllUserVerbs)
router.delete('/:verb_id', verbsCtrl.deleteVerb)
router.post('/:user_id', verbsCtrl.addVerb)

module.exports = router
