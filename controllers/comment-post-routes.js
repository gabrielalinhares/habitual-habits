const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get("/", (req, res) => {
    Comment.findAll({
        where: {
        blog_id: req.params.blog_id},
        attributes: ["id", "comment_text", "blog_id", "user_id", "createdAt"],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
        include: [
            {
                model: Blog,
                attributes: ["blog_id"],
            },
        ],
    })
        .then((dbCommentData) => {
            const comments = dbCommentData.map((comment) => comment.get({ plain: true }));
            res.render("edit-blog", { comments, loggedIn: true })
            console.log(comments)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;