const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  sourceCodePath: {
    type: String,
    required: true,
  },
  githublink: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  }, 
});

const AdminCode = mongoose.model('admincodes', codeSchema);

module.exports = AdminCode;
