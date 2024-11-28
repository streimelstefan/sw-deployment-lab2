const app = require("./bootstrap.js");
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

module.exports = server;
