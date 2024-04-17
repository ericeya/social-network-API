const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
      validate: {
        validator: function(text) {
            return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(text);
        },
        message: "Please enter a valid email"
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = model('user', userSchema);

module.exports = User;
