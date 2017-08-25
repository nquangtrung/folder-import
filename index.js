const fs = require('fs');

var importFolder = function(folderName) {
  var imported = {};

  fs.readdirSync(`${folderName}/`).forEach(function(file) {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
      var name = file.replace('.js', '');
      imported[name] = require(`${folderName}/${file}`);
    }
  });
};


module.exports = importFolder;
