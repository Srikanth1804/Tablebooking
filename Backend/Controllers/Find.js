const SDBS = require("../Model/Database.model");
module.exports = (req, res) => {
  let { age } = req.query;

  SDBS.find({
    Age: age,
  })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((e) => {
      res.send("Data Failed to Send!");
    });
};
