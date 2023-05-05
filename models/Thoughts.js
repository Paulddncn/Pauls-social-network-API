const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    userName: {
      type: String,
      required: true
    },
    reactions: [
  //Array of nested documents created with the reactionSchema
    reactionSchema
    ],
  },
    {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;

});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
