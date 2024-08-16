let SDBS = require("../Model/Database.model");

module.exports = (req, res) => {
  let { name, age, course } = req.body;
  SDBS.create({
    StudentName: name,
    Age: age,
    Course: course,
  })
    .then((data) => {
      res.send("Data Created!");
    })
    .catch((e) => {
      res.send("Data Failed To Create", e);
    });
};
