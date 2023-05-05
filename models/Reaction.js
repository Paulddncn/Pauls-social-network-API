const { Schema, Types, model } = require('mongoose');


// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    }
    
  },
  {
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
