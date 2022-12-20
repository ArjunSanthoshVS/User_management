const express = require('express');
const router = express.Router();

const userSignup = require("../controller/User/signupController");
const userLogin = require("../controller/User/loginController");
const userProfile = require("../controller/User/profileController");
const userNote = require("../controller/User/notesController");
const { protect } = require("../middleware/jwtAuth");

//Home
router.route('/').get(protect, userLogin.getHome);

//Signup
router.post('/signup', userSignup.SignUpPost);

//Login
router.post('/login', userLogin.loginPost);

//Profile
router.route('/profile').get(protect, userProfile.profileGet);

//Add Note
router.route('/add-note').post(protect, userNote.addNotesPost);

//Get Notes
router.route('/my-notes').get(protect, userNote.getNotesPost);

//Delete Notes
router.route('/delete-note').get(protect, userNote.deletenote);

//Add Profile Photo
router.route('/profile-photo').post(protect, userLogin.addPhoto);


module.exports = router;
