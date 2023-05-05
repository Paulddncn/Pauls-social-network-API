const { Schema, Types, model } = require('mongoose');

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
      get: function() {
        return this.createdAt.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
      }
    },
    userName: {
      type: String,
      required: true
    },
    reactions: {
  //Array of nested documents created with the reactionSchema
    type: Schema.Types.ObjectId, ref: 'reactionSchema' 
    },
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
