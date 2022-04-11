const { User } = require('../models');

const userdata = [
  {
    username: 'Mighty Man1',
    password: 'testpass1'
  },
  {
    username: 'Programmer Boy2',
    password: 'testpass2'
  },
  {
    username: 'Math Girl3',
    password: 'testpass3'
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
