var fs = require('fs');
var path = require('path');

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
      var toPath = path.join(markdownPath, path.basename(file, path.extname(file))) + '.md';
  
      fs.stat(fromPath, function (error, stat) {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }
  
        if (stat.isFile())
          console.log("'%s' is a file.", fromPath);
        else if (stat.isDirectory())
          console.log("'%s' is a directory.", fromPath);
          
        const content = `---
templateKey: image-post
title: Add Name for ${file}
description: Write a description.
date: 2018-12-03T15:04:10.000Z
tags:
  - photos
  - nature
---
![Dog wearing sunglasses with a radio.](/img/${file})
`
        fs.writeFile(toPath, content, function (error) {
          if (error) {
            console.error("File moving error.", error);
          } else {
            console.log("Moved file '%s' to '%s'.", fromPath, toPath);
          }
        });
      });
    });
  });