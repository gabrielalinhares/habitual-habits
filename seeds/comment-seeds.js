const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    blog_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    blog_id: 8
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    blog_id: 10
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    blog_id: 18
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    blog_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    blog_id: 20
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    blog_id: 7
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    blog_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    blog_id: 12
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 6,
    blog_id: 20
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    blog_id: 10
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    blog_id: 15
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    blog_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    blog_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    blog_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    blog_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    blog_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    blog_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    blog_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    blog_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    blog_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    blog_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    blog_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    blog_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    blog_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
