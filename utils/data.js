const mongoose = require('mongoose');
const Thought = require('./models/thought');
const Reaction = require('./models/reaction');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/social-media-app', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to database!');

  // Clear out any existing data
  await Thought.deleteMany();
  await Reaction.deleteMany();
  await User.deleteMany();

  // Create some users
  const alice = new User({
    username: 'alice',
    email: 'alice@example.com',
    password: 'password123',
    bio: 'Hi, I am Alice!',
  });

  const bob = new User({
    username: 'bob',
    email: 'bob@example.com',
    password: 'password456',
    bio: 'Hi, I am Bob!',
  });

  await alice.save();
  await bob.save();

  // Create some thoughts
  const thought1 = new Thought({
    text: 'Hello, world!',
    author: alice,
  });

  const thought2 = new Thought({
    text: 'I love pizza!',
    author: bob,
  });

  await thought1.save();
  await thought2.save();

  // Create some reactions
  const reaction1 = new Reaction({
    type: 'like',
    user: alice,
    thought: thought2,
  });

  const reaction2 = new Reaction({
    type: 'dislike',
    user: bob,
    thought: thought1,
  });

  await reaction1.save();
  await reaction2.save();

  console.log('Data seeded successfully!');
});

db.on('error', (error) => console.error(error));
  