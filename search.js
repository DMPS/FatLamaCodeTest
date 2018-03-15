const path = require('path')
const sqlite3 = require('better-sqlite3');
const queries = require('./queries');

//Opens db in safe mode
const db = new sqlite3(__dirname+'/fatlama.sqlite3', {
    readonly:true,
    fileMustExist:true
})

//Trig functions for Haversine formula
db.register(function ACOS(a) {return Math.acos(a)});
db.register(function RADIANS(a) {return a*Math.PI/180});
db.register(function DEGREES(a) {return a*180/Math.PI});
db.register(function COS(a) {return Math.cos(a)});
db.register(function SIN(a) {return Math.sin(a)});

console.log(__dirname)

module.exports.getNearest = function (lat, lon) {
    return db.prepare(queries.nearestLocation).all(lat,lon)
}

module.exports.getMatchingText = function(searchTerm){
    return db.prepare(queries.matchText).all(`%${searchTerm}%`)
}