const express = require("express");

/////////////////////////////////////////////////////////////////////////////////////////////

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

/////////////////////////////////////////////////////////////////////////////////////////////


const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(authController.protect);

router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);


router.use(authController.restrictTo('admin'));

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:id', authController)
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);


/////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;