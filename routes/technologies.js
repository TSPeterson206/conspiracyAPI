const express = require('express')
const router = express.Router({
  mergeParams: true
})
const technologiesCtrl = require('../controllers/technologies')

router.get('/', technologiesCtrl.getAllTechnologies)
router.get('/:tutorId', technologiesCtrl.getOneTutorTechnologies)
router.post('/:tutorId', technologiesCtrl.addOneTutorTechnologies)
router.delete('/:tutorId/:technologiesId', technologiesCtrl.deleteOneTutorTechnologies)
// router.delete('/goals/:goalId', technologiesCtrl.deleteGoal)

module.exports = router
