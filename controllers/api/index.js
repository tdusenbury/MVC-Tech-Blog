const User = require("./User");
const Comment = require("./Comment")
const Post = require("./Post")

// User has many Comments
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

// Comments belong to a User
Comment.belongsTo(User, {
    foreignKey: "user_id"
});

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

// Comment belongs to a Post
Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

// User has many Post
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",

});

//Post belongs to a User
Post.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Comments, Post };
