const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.users;
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');
const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    is_admin: req.body.is_admin,
  });

  const token = signToken(newUser.id, newUser.is_admin);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  console.log('test1');
  const { email, password } = req.body;
  if ( 'f'==='f' ) {
	console.log("test");
  } else {
  // 1) Check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ where: { email: email } });
  const is_admin = user.is_admin;
  const id = user.id;
  const fullname = user.name;
  const dbPassword = user.password;

  if (is_admin) {
    role = 'admin';
  }

  if (!user || !(await dbPassword == password)) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everthing is ok, send token to client
  const token = signToken(user._id, role);
  } 

  res.status(200).json({
    status: 'success',
    data: {
      token,
      fullname,
      email,
      role,
    },
  });
});


//this middleware function should be used for protecting admin routes
exports.protect = catchAsync(async (req, res, next) => {
  //1) Get token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }

  //2) Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token no longer exists', 401)
    );
  }

  // 4) Check if user changed password after the token was issued
  //   we are creating a new instance method (method thats available to all documents)
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again', 401)
    );
  }

  if (decoded.role != 'admin') {
    return next(
      new AppError(
        'You do not have admin permissions! Please request for access or log in as admin',
        401
      )
    );
  }
  //   GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

// NEW SHITTY CODE THAT DOES ALMOST THE SAME THING

/*
exports.login(req, res) {
	try {
		//check if user exists
		const user = await User.findOne({ username: req.body.username });
		if (user) {
			//check if password matches
			const result = req.body.password === user.password;
			if (result) {
				res.render(###TMPCHANGE$$$);
			} else {
				res.status(400).json({ error: "password doesn't match" });
			}
		} else {
			res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({error});
	}
});

exports.protect(req, res, next) {
	if (req.isAuthenticated()) return next();
	req.user = currentUser;
	res.locals.user = currentUser;
}
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin'] role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perfom this action', 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with that email', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 minutes)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
});
exports.resetPassword = (req, res, next) => { };
*/