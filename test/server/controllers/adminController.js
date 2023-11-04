const contacts = require('../models/contactModel');
const catchAsync = require('../utils/catchAsync');
const db = require('../models');
const users = db.users;
const AppError = require('../utils/appError');

exports.admin = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'you are in the admin portal',
  });
});

exports.getAllRequests = catchAsync(async (req, res) => {
  const requests = await contacts.find();

  res.status(200).json({
    status: 'success',
    results: requests.length,
    requests,
  });
});

exports.getAllUsers = catchAsync(async (req, res) => {
  const allusers = await users.findAll();

  res.status(200).json({
    status: 'success',
    results: allusers.length,
    allusers,
  });
});

exports.deleteRequest = catchAsync(async (req, res, next) => {
  const doc = await contacts.findByPkAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'Request deleted successfully',
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await users.findByPkAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'User was successfully deleted',
  });
});
