const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment, Workout } = require('../models');
const withAuth = require('../utils/auth');


//add workout routes-    /dashboard
router.get('/',withAuth, (req,res) => {
    
    res.render('dashboard', {loggedIn: true})

} );


// router.get('/', withAuth, (req, res) => {
//     Workout.findAll({
//         where: {
//             // user_id: req.session.user_id
//             user_id: 2
            

//         },
//         attributes: [
//             "id",
//             "exercise_type",
//             "exercise_duration",
//             "calories_burned",
//             "calories_consumed",
//             "current_weight",
//             "user_id",
//         ],
//     })
//         .then(dbWorkoutData => {
//             console.log(dbWorkoutData);
//             const workout = dbWorkoutData.map(work => work.get({ plain: true }));
//             res.render('homepage'
//             // ,{ workout, loggedIn: true }
//              );
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });

//Get one blog post for dashboard
// router.get('/', withAuth, (req, res) => {
//     Blog.findOne({
//         where: {
//             // user_id: req.session.user_id
//             id: Math.floor(Math.random() * 3)

//         },
//         attributes: [
//             'id',
//             'title',
//             'blog_post',
//             'created_at',
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             res.render('dashboard', { posts, loggedIn: true });
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


module.exports = router;
