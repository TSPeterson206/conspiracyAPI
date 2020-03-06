const express = require('express')
const router = express.Router({
  mergeParams: true
})
const locationsCtrl = require('../controllers/locations')

router.get('/:tutorId', locationsCtrl.getOneTutorLocations)
router.get('/', locationsCtrl.getAllLocations)
router.post('/', locationsCtrl.addOneTutorLocation)
router.delete('/:tutorId/:locationId', locationsCtrl.deleteOneTutorLocation)


module.exports = router
