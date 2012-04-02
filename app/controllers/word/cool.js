var redis=require('redis');
var client = redis.createClient();

exports.index = function(req, res){
	/*Student.find('semmy', function(student) {
	student.dropClass('CSCI344');
		res.render('student', {name:student.name, age:student.age});
	});*/
	client.get('cool', function (err, count) {
		if(err) console.log(err);
		else {
		res.render('word/cool', {coolCount:count})
		}
	});
};
/*
exports.word = function(req, res) { 
	res.send('Welcome to the profile of the ' + req.params.word + ' words!')
};
*/
	/*Student.find('semmy', function(student) {
	student.dropClass('CSCI344');
		res.render('student', {name:student.name, age:student.age});
	});*/
	/*
	exports.word = function(req, res) { 
	res.send('Welcome to the profile of the ' + req.params.word + ' words!')
};*/