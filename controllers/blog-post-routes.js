const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Blog, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/edit-blogs/:id', withAuth, (req, res) => {
    Blog.findByPk(req.params.id, {
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

                res.render('edit-blogs', {
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

module.exports = router;