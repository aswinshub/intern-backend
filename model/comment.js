

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
 // user: { type: mongoose.Schema.Types.ObjectId, ref: 'userdata', required: true },
 discussData: { type: mongoose.Schema.Types.ObjectId, ref: 'discussDatas', required: true },
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;