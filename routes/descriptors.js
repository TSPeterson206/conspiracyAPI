const express = require('express')
const router = express.Router({
  mergeParams: true
})
const descriptorsCtrl = require('../controllers/descriptors')

router.get('/', descriptorsCtrl.getAllDescriptors)
router.get('/stock', descriptorsCtrl.getStockDescriptors)
router.get('/:user_id', descriptorsCtrl.getAllOwnDescriptors)
router.get('/justUser/:user_id', descriptorsCtrl.getAllUserDescriptors)
router.delete('/:descriptorId', descriptorsCtrl.deleteDescriptor)
router.post('/:user_id', descriptorsCtrl.addDescriptor)

module.exports = router
