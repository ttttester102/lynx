// let chai = require("chai");
// let chaiHttp = require("chai-http");
// let server = require("../bin/www");
// const { getAuthoriztionToken } = require("../controller/response.controller");

// chai.use(chaiHttp);

// const app_token = getAuthoriztionToken();

// describe("User Auth", () => {
//     it("it should login a user", () => {
//         const body = {
//             "email": "user_281_test@mailinator.com"
//         };

//         chai.request(server)
//             .post('/v0/user/signup')
//             .set("Authorization", app_token)
//             .send(body)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a("object")
//             })
//     })
// })