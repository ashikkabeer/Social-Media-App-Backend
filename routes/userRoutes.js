var express = require('express');
var router = express.Router();
var UserControls = require('../controllers/userControl');
const authMiddlewares = require('../middlewares/authMiddleware');
const tryCatch = require('../util/tryCatch');

UserControls = new UserControls();

router.use(authMiddlewares.isAuthenticated);

router.get('/:username', tryCatch(UserControls.userInfo));
// router.get('/upload', tryCatch(PostControls.renderUploadForm));

module.exports = router;
