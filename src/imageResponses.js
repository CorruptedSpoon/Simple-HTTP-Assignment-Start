const fs = require('fs');

const meem = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeem = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(meem);
  res.end();
};

module.exports = {
  meem,
  getMeem,
};
