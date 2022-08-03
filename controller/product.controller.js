const { ERROR, SUCCESS, PRODUCT_TYPE_PROPERTY, PRODUCT_TYPE_FURNITURE, PRODUCT_TYPE_VEHICLE } = require("../constants/common.constants");
var { db_client } = require("../db/connection.db");

exports.get_product_detail_controller = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const { id } = data || {};

            let table = "product";

            db_client().query(`select * from ${table} where id=?;`, [id], (err, result) => {
                if (err) return reject({ status: ERROR, response: err });
                result = result && result.length ? result[0] : {};
                return resolve({ status: result && result.id ? SUCCESS : ERROR, response: result });
            });
        } catch (error) {
            return reject({ status: ERROR, response: error });
        }
    });
}

exports.update_product_detail_controller = (query, data) => {
    return new Promise((resolve, reject) => {
        try {
            const { id } = query || {};
            const { productViewed } = data || {};

            let table = "product";

            db_client().query(`update ${table} set productViewed=? where id=?;`, [productViewed, id], (err, result) => {
                if (err) return reject({ status: ERROR, response: err });
                return resolve({ status: SUCCESS, response: result });
            });
        } catch (error) {
            return reject({ status: ERROR, response: error });
        }
    });
}

exports.get_product_list_controller = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const { limit, skip } = data || {};

            let table = "product";

            db_client().query(`select * from ${table} where productViewed > 0 order by productViewed desc limit ? offset ?;`, [limit, skip], (err, result) => {
                if (err) return reject({ status: ERROR, response: err });
                // result = result && result.length ? result[0] : {};
                return resolve({ status: SUCCESS, response: result });
            });
        } catch (error) {
            return reject({ status: ERROR, response: error });
        }
    });
}