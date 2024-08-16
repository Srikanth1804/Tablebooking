let Express = require("express");
const Add = require("./Controllers/Add");
const Find = require("./Controllers/Find");

let StudentRoute = Express.Router();
StudentRoute.post("/addstudentdata", Add);
StudentRoute.get("/findstudentdata", Find);

module.exports = StudentRoute;
