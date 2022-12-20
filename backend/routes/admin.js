var express = require('express');
var router = express.Router();

const adminLogin = require('../controller/Admin/loginController');
const admin = require('../controller/Admin/adminController');
const { protect } = require('../middleware/jwtAuth');

//Login
router.post('/login', adminLogin.adminloginpost)

//Home
router.route('/').get(protect, adminLogin.adminHome)

//User Status
router.route('/block').get(protect, adminLogin.adminBlock)

//Search
router.post('/search', admin.searchUser)

//Delete User
router.route('/delete').get(protect, admin.deleteUser)


module.exports = router;
