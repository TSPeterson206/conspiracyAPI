const express = require('express')
const router = express.Router({
  mergeParams: true
})
const usersCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')

router.get('/:userId', usersCtrl.getOneUser)
router.post('/', usersCtrl.signup, authCtrl.login)

// Error: secretOrPrivateKey must have a value. .post returns this message

// router.post('/:userId/avatar', usersCtrl.uploadImage)

module.exports = router
