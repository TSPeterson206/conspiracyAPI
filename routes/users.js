const express = require('express')
const router = express.Router({
  mergeParams: true
})
const usersCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')

router.get('/', usersCtrl.getAllUsers)
router.get('/:userId', usersCtrl.getOneUser)
router.put('/:userId', usersCtrl.editOneUser)

// Error: secretOrPrivateKey must have a value. .post returns this message

router.post('/', usersCtrl.signup, authCtrl.login)
// router.post('/:userId/avatar', usersCtrl.uploadImage)
router.delete('/:userId', usersCtrl.deleteUser)

module.exports = router
