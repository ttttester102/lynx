var express = require('express');
const { USER_TYPE_SUPER_ADMIN, USER_TYPE_USER, USER_TYPE_CONSULTANT, USER_TYPE_REGION_MANAGER, USER_TYPE_OWNER } = require('../constants/common.constants');
const { get_product_list_validation_middleware, get_product_list_middleware, get_product_validation_middleware, get_product_middleware } = require('../middlewares/product.middleware');
var router = express.Router();

/** Product */
router
    .get("/",
        get_product_validation_middleware,
        get_product_middleware
    ).post("/",
        get_product_list_validation_middleware,
        get_product_list_middleware
    );

module.exports = router;
