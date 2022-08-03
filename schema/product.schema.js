const Joi = require('@hapi/joi');
const { customHtmlSanitizeValue, customSanitizeMessage } = require('.');
const { TENURE_TYPE_DAY, TENURE_TYPE_MONTH, TENURE_TYPE_YEAR } = require('../constants/common.constants');

exports.list_product_schema = Joi.object({
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(5),
    currency: Joi.string().valid("USD", "CAD").custom(customHtmlSanitizeValue).message({ ...customSanitizeMessage }).trim()
});

exports.get_product_schema = Joi.object({
    // id: Joi.string().custom(customHtmlSanitizeValue).message({ ...customSanitizeMessage }).trim().required(),
    id: Joi.number().required(),
    currency: Joi.string().valid("USD", "CAD").custom(customHtmlSanitizeValue).message({ ...customSanitizeMessage }).trim()
});