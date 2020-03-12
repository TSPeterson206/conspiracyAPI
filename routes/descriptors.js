const express = require('express')
const router = express.Router({
  mergeParams: true
})
const descriptorsCtrl = require('../controllers/descriptors')

router.get('/', descriptorsCtrl.getAllDescriptors)
router.get('/stock', descriptorsCtrl.getStockDescriptors)
router.get('/:user_id', descriptorsCtrl.getAllOwnDescriptors)
router.get('/1/users', descriptorsCtrl.getAllUserDescriptors)
router.delete('/:descriptor_id', descriptorsCtrl.deleteDescriptor)
router.post('/', descriptorsCtrl.addDescriptor)

module.exports = router
