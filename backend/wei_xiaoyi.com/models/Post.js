var mongoose = require('mongoose');
var schema=new mongoose.Schema({
   author:String,
   title:String,
   content:String,
   comments: [{ content: String, date: Date }],
   date: { type: Date, default: Date.now },
   meta: {
    votes: Number,
    favs:  Number
}
})

var Post=mongoose.model('Post', schema);

module.exports = Post;
