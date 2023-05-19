const mongoose = require('mongoose');
const dgConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require('./user.model')(mongoose);

module.exports = db;