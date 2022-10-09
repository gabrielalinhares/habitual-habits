const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");
const Workout = require("./Workout");

User.hasMany(Blog, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

User.hasMany(Workout, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

Workout.belongsTo(User, {
  foreignKey: "user_id",
  // onDelete: "SET NULL",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  // onDelete: "SET NULL",
});
Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    // onDelete: "SET NULL"
  });


module.exports = {User, Blog, Comment, Workout};