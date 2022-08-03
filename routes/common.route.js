var express = require('express');
const { USER_TYPE_SUPER_ADMIN, USER_TYPE_USER, USER_TYPE_CONSULTANT, USER_TYPE_REGION_MANAGER, USER_TYPE_OWNER } = require('../constants/common.constants');
const { user_auth_middleware } = require('../middlewares/auth.middleware');
const { login_validation_middleware, login_middleware, session_login_validation_middleware, session_login, forgot_password_validation_middleware, forgot_password_middleware, reset_forgot_password_validation_middleware, reset_forgot_password_middleware } = require('../middlewares/common.middleware');
const { change_password_validation_middleware, change_password_middleware } = require('../middlewares/user.middleware');
var router = express.Router();

/** Login user */
router.post("/login",
    login_validation_middleware,
    login_middleware
);

module.exports = router;
