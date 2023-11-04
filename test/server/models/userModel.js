const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { sequelize } = require('.');

// export default db;
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    is_admin: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
}

// // functions
// userSchema.pre('save', async function (next) {
//   // only run this function if password was actually modified
//   if (!this.isModified('password')) return next();

//   this.password = await bcrypt.hash(this.password, 12);

//   this.passwordConfirm = undefined;
//   next();
// });

// //creating an instance method - method that is available on all documents of a certain collection
// userSchema.methods.correctPassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

// userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
//   if (this.passwordChangedAt) {
//     const changedTimestamp = parseInt(
//       this.passwordChangedAt.getTime() / 1000,
//       10
//     );
//     return JWTTimestamp < changedTimestamp;
//   }

//   return false; // false means not changed
// };

// userSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');

//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

//   return resetToken;
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;
