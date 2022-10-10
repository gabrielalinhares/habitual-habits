const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
    // expects {title: 'Taskmaster goes public!', blog_post: 'https://taskmaster.com/press', user_id: 1}
    Blog.findAll({
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
            const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
            res.render("view-blogs", { blogs})
            // console.log(blogs)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    // res.send("single-blog")
});

router.get('/:id', (req, res) => {
    Blog.findAll({
        where: { id: req.params.id },
        attributes: [
            'id',
            'title',
            'blog_post',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['comment_text'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbBlogData => {
            if (dbBlogData) {
                const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
                // console.log(blogs);

                res.render('view-full-blog', {blogs                
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
