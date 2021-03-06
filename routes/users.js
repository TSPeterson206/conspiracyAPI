const express = require('express')
const router = express.Router({
  mergeParams: true
})
const usersCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')


router.get('/', usersCtrl.getAllUsers)
router.get('/:userId', usersCtrl.getOneUser)
router.post('/signup/signup', usersCtrl.signup, authCtrl.login)
router.post('/signup/login', authCtrl.login)


// Error: secretOrPrivateKey must have a value. .post returns this message

// router.post('/:userId/avatar', usersCtrl.uploadImage)

module.exports = router
