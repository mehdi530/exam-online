const path = require("path");
const gotoHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

module.exports = { gotoHome };
