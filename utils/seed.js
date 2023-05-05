const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const { Thought, Reaction, User } = require('../models');

mongoose.connect('mongodb://localhost/social-media-app', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('debug', true);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seed = async () => {
  try {
    await db.dropDatabase();

    const userCount = 10;
    const thoughtCount = 20;
    const reactionCount = 30;

    const users = await User.create([...Array(userCount)].map(() => ({
      username: faker.internet.userName(),
      email: faker.internet.email()
     
    })));

    const thoughts = await Thought.create([...Array(thoughtCount)].map(() => ({
      thoughtText: faker.lorem.sentence(),
      userName: users[Math.floor(Math.random() * userCount)],
    })));

    const reactions = await Reaction.create([...Array(reactionCount)].map(() => ({
      userName: faker.lorem.word(),
      reactionBody: faker.lorem.sentence()
    })));

    console.log(`${users.length} users created`);
    console.log(`${thoughts.length} thoughts created`);
    console.log(`${reactions.length} reactions created`);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();








