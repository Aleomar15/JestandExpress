let app = require("../src/app");
let supertest = require("supertest");

let request = supertest(app);

test("A aplicação deve responder na porta 3131",() => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});

test("Cor favorita", ()=>{
    return request.get("/cor/fav").then(res => expect(res.body.cor).toEqual("amarelo"))
});