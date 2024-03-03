#!/bin/env node

// Include process module
const process = require('process');
const fs = require('fs');
const path = require('path');



const root = process.cwd();

function addDir(nane){
    fs.mkdir(path.join(root, nane),
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

}

function main() {
    // Printing current directory
    console.log(root)
    addDir("alisa")
    

  }
  
if (require.main === module) {
    main();
  }