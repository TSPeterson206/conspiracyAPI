const express = require('express')
const router = express.Router({
  mergeParams: true
})
const nounsCtrl = require('../controllers/nouns')

router.get('/', nounsCtrl.getAllNouns)
router.get('/stock', nounsCtrl.getStockNouns)
router.get('/:user_id', nounsCtrl.getAllOwnNouns)
router.get('/justUser/:user_id', nounsCtrl.getAllUserNouns)
router.delete('/:nounId', nounsCtrl.deleteNoun)
router.post('/:user_id', nounsCtrl.addNoun)

module.exports = router
