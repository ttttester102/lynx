const { validate } = require("../schema");
const { VALIDATION_ERROR, SUCCESS, EMAIL_PRESENT, PRESENT, TOKEN_EXPIRES_IN, USER_TYPE_USER, PENDING, BAD_REQUEST, NOT_VALID, ACTIVE, AUTH_DATA, USER_TYPE_INVESTOR, ACCOUNT_VERIFIED, LOGIN_TYPE_EMAIL, ACCOUNT_NOT_VERIFIED, PRODUCT_TYPE_PROPERTY, PRODUCT_TYPE_FURNITURE, PRODUCT_TYPE_VEHICLE } = require("../constants/common.constants");
const { httpResponse } = require("../controller/response.controller");
const { get_product_detail_controller, get_product_list_controller, update_product_detail_controller } = require("../controller/product.controller");
const { list_product_schema, get_product_schema } = require("../schema/product.schema");
const { getRates } = require("../db/connection.db");

/** Get product validation */
exports.get_product_validation_middleware = async (req, res, next) => {
    try {
        const data = await validate(get_product_schema, req.query);

        req.query = data;
        next();
    } catch (error) {
        next(httpResponse(req, res, VALIDATION_ERROR, error))
    }
}

/** Get product */
exports.get_product_middleware = async (req, res, next) => {
    try {
        const { id, currency } = req.query;

        const fx = getRates();

        if (!fx && currency === 'CAD') {
            return next(httpResponse(req, res, BAD_REQUEST, {
                message: "Currency rates are not available."
            }))
        }

        let product_query = { id };

        let { status: product_status, response: product_res } = await get_product_detail_controller(product_query);

        if (product_status === SUCCESS) {
            let { price, productViewed, ...rest } = product_res || {};
            productViewed = productViewed > 1 ? productViewed + 1 : 1;

            const product_data = { productViewed  };
            update_product_detail_controller(product_query, product_data);

            if (currency === 'CAD') {
                product_res = ({ ...rest, productViewed, price: fx.convert(price, { from: "USD", to: "CAD" }) })
            }

            return httpResponse(req, res, SUCCESS, product_res);
        } else return next(httpResponse(req, res, product_status, product_res))

    } catch (error) {
        let status = error && error.status && typeof error.status === "string" ? error.status : null;

        if (status) {
            let response = error.response;
            const { code } = response || {};
            switch (code) {
                default:
                    return next(httpResponse(req, res, status, response));
            }
        } else return next(error);
    }
}

/** Get product list validation */
exports.get_product_list_validation_middleware = async (req, res, next) => {
    try {
        const data = await validate(list_product_schema, req.body);

        req.body = data;
        next();
    } catch (error) {
        next(httpResponse(req, res, VALIDATION_ERROR, error))
    }
}

/** Get product list */
exports.get_product_list_middleware = async (req, res, next) => {
    try {
        const { page, limit = 5, currency } = req.body;

        let skip = (page - 1) * limit;

        let product_query = { skip, limit };

        const fx = getRates();

        if (!fx && currency === 'CAD') {
            return next(httpResponse(req, res, BAD_REQUEST, {
                message: "Currency rates are not available."
            }))
        }

        let { status: product_status, response: product_res } = await get_product_list_controller(product_query);

        if (product_status === SUCCESS) {
            if (currency === 'CAD') {
                product_res = product_res.map(({ price, ...rest }) => ({ ...rest, price: fx.convert(price, { from: "USD", to: "CAD" }) }))
            }

            return httpResponse(req, res, SUCCESS, product_res);
        } else return next(httpResponse(req, res, product_status, product_res))

    } catch (error) {
        let status = error && error.status && typeof error.status === "string" ? error.status : null;

        if (status) {
            let response = error.response;
            const { code } = response || {};
            switch (code) {
                default:
                    return next(httpResponse(req, res, status, response));
            }
        } else return next(error);
    }
}