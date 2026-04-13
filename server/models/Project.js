const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  imageUrl: String,
  // add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);