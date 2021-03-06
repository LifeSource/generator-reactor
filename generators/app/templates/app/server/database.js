"use strict";

var mongoose = require('mongoose'),
    seedData = require('./models/seedData');

var connectionString = 'mongodb://localhost/<%= appName %>',
    db = mongoose.connect(connectionString);

db.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);
    seedDatabase(seedData);
});

db.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

db.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

function seedDatabase(seedData) {
    console.log(seedData);
    // Your seed data code here 
    
    console.log("Seeding database ...");
}

function gracefulShutdown (msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});
