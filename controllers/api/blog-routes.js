const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Blog, User, Comment, Workout } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "blog_post", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
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
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "blog_post", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
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
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', blog_post: 'https://taskmaster.com/press', user_id: 1}
  Blog.create({
    title: req.body.title,
    blog_post: req.body.blog_post,
    user_id: req.body.user_id,
    //user_id: req.session.user_id
  })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, async (req, res) => {
  await Blog.update(
    {
      title: req.body.title,
      blog_post: req.body.blog_post,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No blog found" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
