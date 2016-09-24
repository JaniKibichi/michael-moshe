var Meetup = require('../models/meetup.js');

module.exports.create = function (req, res){
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result){
		res.json(result);
	});
}
module.exports.list =function (req, res){
	Meetup.find({}, function (err, meetups){
		res.json(meetups);
	});
}