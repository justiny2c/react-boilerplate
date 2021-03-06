const fs = require('fs');

const getNewId = array => {
  if (array.length > 0) {
    return array[0].id + 1;
  }
  return 1;
};

const newDate = () => new Date().toString();

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', err => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  getNewId,
  newDate,
  writeJSONFile,
};
