
## Paul's Social Network API

This is a MongoDB-based backend application that stores data about users, their thoughts, friends, and their friends' reactions to their thoughts. The project is authored by Paul Duncan.

## Getting Started

To get started with the Paul's Social Network API, you will need to:

Clone the repository to your local machine.
Install the necessary dependencies by running npm install.
Set up the environment variables by creating a .env file and setting the appropriate values. See the .env.example file for guidance.
Start the application by running npm start.
API Endpoints
The following API endpoints are available:

/api/users

GET: Get all users
GET /:id: Get a single user by their id
POST: Create a new user
PUT /:id: Update a user by their id
DELETE /:id: Delete a user by their id
/api/thoughts

GET: Get all thoughts
GET /:id: Get a single thought by its id
POST: Create a new thought
PUT /:id: Update a thought by its id
DELETE /:id: Delete a thought by its id
/api/users/:userId/friends/:friendId

POST: Add a friend
DELETE: Remove a friend
/api/thoughts/:thoughtId/reactions

POST: Add a reaction
DELETE: Remove a reaction
## Technologies Used
Node.js
Express.js
MongoDB
Mongoose

## Author
This project was authored by Paul Duncan.

## walkthrough
https://drive.google.com/file/d/1ZKpPPkTdQ1-XA_dYPHUajWBnVv1nGkhT/view 
