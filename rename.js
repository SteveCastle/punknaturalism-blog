var fs = require('fs');
var path = require('path');
const shortid = require('shortid');

var imagePath = path.resolve(__dirname, "static/img")
var markdownPath = path.resolve(__dirname, "src/pages/gallery")

// Loop through all the files in the temp directory
fs.readdir(imagePath, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
  
    files.forEach(function (file, index) {
      // Make one pass and make the file complete
      var fromPath = path.join(imagePath, file);
      var toPath = path.join(imagePath, shortid.generate())  + path.extname(file);
  
      fs.stat(fromPath, function (error, stat) {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }
  
        if (stat.isFile())
          console.log("'%s' is a file.", fromPath);
        else if (stat.isDirectory())
          console.log("'%s' is a directory.", fromPath);
          
          fs.rename(fromPath, toPath, function (error) {
            if (error) {
              console.error("File moving error.", error);
            } else {
              console.log("Moved file '%s' to '%s'.", fromPath, toPath);
            }
          });
      });
    });
  });