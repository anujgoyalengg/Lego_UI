const mongoose = require('mongoose');

const UsercodeSchema = new mongoose.Schema({
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

const UserCode = mongoose.model('usercodes', UsercodeSchema);

module.exports = UserCode;
