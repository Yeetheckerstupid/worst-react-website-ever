const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/').get(adminController.admin);

router.route('/contact-requests').get(adminController.getAllRequests);

router
  .route('/contact-requests/delete/:id')
  .delete(adminController.deleteRequest);

router.route('/getusers').get(adminController.getAllUsers);

router.route('/delete-user/:id').delete(adminController.deleteUser);

module.exports = router;

//used for testing protected route
// router.get(
//   '/admin',
//   authController.protect,
//   authController.restrictTo('admin'),
//   userController.admin
// );
