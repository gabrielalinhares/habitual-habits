const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', blog_post: 'https://taskmaster.com/press', user_id: 1}
    Blog.findAll({
        user_id: req.session.user_id,
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
            res.render("single-blog", { blogs, loggedIn: true })
            console.log(blogs)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    // res.send("single-blog")
});

router.get('/:id', withAuth, (req, res) => {
    Blog.findOne({
        where: { user_id: req.session.user_id },
        attributes: [
            'id',
            'title',
            'blog_post',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
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
                const blog = dbBlogData.get({ plain: true });

                res.render('edit-blog', {
                    blog,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


// router.delete('/:id', withAuth, (req, res) => {
//     console.log('id', req.params.id);
//     Blog.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbBlogData => {
//             if (!dbBlogData) {
//                 res.status(404).json({ message: 'No blog found' });
//                 return;
//             }
//             res.json(dbBlogData);
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


module.exports = router;