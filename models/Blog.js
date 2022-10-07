const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our blog model
class Blog extends Model {
//   static upvote(body, models) {
//     return models.Vote.create({
//       user_id: body.user_id,
//       blog_id: body.blog_id,
//     }).then(() => {
//       return Blog.findOne({
//         where: {
//           id: body.blog_id,
//         },
//         attributes: ["id", "blog_post", "title", "created_at"],
//         include: [
//           {
//             model: models.Comment,
//             attributes: [
//               "id",
//               "comment_text",
//               "blog_id",
//               "user_id",
//               "created_at",
//             ],
//             include: {
//               model: models.User,
//               attributes: ["username"],
//             },
//           },
//         ],
//       });
//     });
//   }
}

// create fields/columns for blog model
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_post: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
