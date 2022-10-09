const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment, Workout } = require("../models");
const withAuth = require("../utils/auth");

//add workout routes-    /dashboard
// router.get('/',withAuth, (req,res) => {

//     res.render('dashboard', {loggedIn: true})

// } );

var workouts;
var blogs;

router.get("/", withAuth, (req, res) => {
  Workout.findAll({
    where: {
      user_id: req.session.user_id,
      // user_id: 2
    },
    attributes: [
      "id",
      "exercise_type",
      "exercise_duration",
      "calories_burned",
      "calories_consumed",
      "current_weight",
      "user_id",
      // "username"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbWorkoutData) => {
    //console.log(dbWorkoutData);
    workouts = dbWorkoutData.map((work) => work.get({ plain: true }));
    // res.render('dashboard', { workouts, loggedIn: true });
    //console.log(workouts);

    Blog.findAll({
      where: {
        // user_id: req.session.user_id
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "blog_post", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "blog_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })

      .then((dbPostData) => {
        blogs = dbPostData.map((blog) => blog.get({ plain: true }));
        console.log(workouts);
        console.log("blogs are ", blogs);
        res.render("dashboard", { workouts, blogs, loggedIn: true });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
});

module.exports = router;
