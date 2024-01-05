var express = require('express');
var router = express.Router();
var UserControls = require('../controllers/userControl');
const authMiddlewares = require('../middlewares/authMiddleware');
const tryCatch = require('../util/tryCatch');

UserControls = new UserControls();


router.use(authMiddlewares.isAuthenticated);

router.get('/:username', tryCatch(UserControls.userInfo));
router.get('/:username/edit/profile', tryCatch((req, res) => UserControls.renderEdit(req,res,'editProfile'))); // page to update profile
router.get('/:username/edit/profile/dp/', tryCatch((req, res) => UserControls.renderEdit(req,res,'editProfilePhoto'))); // page to update dp
router.get('/:username/edit/profile/cp/', tryCatch((req, res) => UserControls.renderEdit(req,res,'editCoverPhoto'))); // page to update cp

router.put('/:username/edit/profile', tryCatch(UserControls.updateProfile)); //update profile
router.put('/:username/edit/profile/dp', tryCatch(UserControls.updateProfilePicture)); //update dp
router.put('/:username/edit/profile/cp',tryCatch(UserControls.updateCoverPicture)); //update cp
//

module.exports = router;
