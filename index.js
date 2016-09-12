#!/usr/bin/env node

'use strict';

var markdownpdf = require("markdown-pdf");
var fs = require("fs");
var path = require("path");

var args = process.argv.slice(2);
console.log('Converting', path.basename(args[0]), 'to pdf...');
fs.createReadStream(args[0])
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(path.dirname(args[0]) + '/' +
                             path.basename(args[0], '.md') + '.pdf'));