// //During the test the env variable is set to test
// process.env.NODE_ENV = "test";

// //Require the dev-dependencies
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// let server = require("../bin/www");
// const { expect } = require("chai");
// const { getAuthoriztionToken } = require("../controller/response.controller");
// let should = chai.should();


// chai.use(chaiHttp);

// const app_token = getAuthoriztionToken();

// //User block
// describe("User", () => {

//     describe("/POST create product", () => {
//         it("it should POST create a product", (done) => {
//             let body = {
//                 "type": "furniture",
//                 "quantity": 100,
//                 "mesurement_w": 100,
//                 "mesurement_d": 100,
//                 "mesurement_h": 100,
//                 "minimum_tenure": 100,
//                 "tenure_type": "day"
//             };

//             chai
//                 .request(server)
//                 .post("/v0/product")
//                 .set("Authorization", app_token)
//                 .send(body)
//                 .end((err, res) => {
//                     if(err) {
//                         return done();
//                     }

//                     res.should.have.status(200);
//                     res.body.should.be.a("object");
//                     done();
//                 });
//         });

//     });

//     describe("/POST serach products", () => {
//         it("it should POST search products for property", (done) => {
//             let body = {
//                 "type": "property",
//                 "size_in_square_from": 100,
//                 "size_in_square_to": 1100,
//                 "budget_from": 4000,
//                 "budget_to": 6000,
//                 "bedrooms": [3, 4]
//             };

//             chai
//                 .request(server)
//                 .post("/v0/product/search")
//                 .set("Authorization", app_token)
//                 .send(body)
//                 .end((err, res) => {
//                     if(err) {
//                         return done();
//                     }

//                     res.should.have.status(200);
//                     res.body.should.be.a("object");
//                     done();
//                 });
//         });

//         it("it should POST search products for furniture", (done) => {
//             let body = {
//                 "type": "furniture",
//                 "mesurement_w_from": 100,
//                 "mesurement_w_to": 100,
//                 "minimum_tenure": [100],
//                 "tenure_type": ["day"]
//             };

//             chai
//                 .request(server)
//                 .post("/v0/product/search")
//                 .set("Authorization", app_token)
//                 .send(body)
//                 .end((err, res) => {
//                     if(err) {
//                         return done();
//                     }

//                     res.should.have.status(200);
//                     res.body.should.be.a("object");
//                     done();
//                 });
//         });

//         it("it should POST search products for vehicle", (done) => {
//             let body = {
//                 "type": "vehicle",
//                 "budget_from": 9000,
//                 "budget_to": 11000,
//                 "vehicle": ["Loaded car"]
//             };

//             chai
//                 .request(server)
//                 .post("/v0/product/search")
//                 .set("Authorization", app_token)
//                 .send(body)
//                 .end((err, res) => {
//                     if(err) {
//                         return done();
//                     }

//                     res.should.have.status(200);
//                     res.body.should.be.a("object");
//                     done();
//                 });
//         });
//     });
// });

