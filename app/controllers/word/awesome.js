var redis=require('redis');
var client = redis.createClient();

exports.index = function(req, res){
	/*Student.find('semmy', function(student) {
	student.dropClass('CSCI344');
		res.render('student', {name:student.name, age:student.age});
	});*/
	client.get('awesome', function (err, count) {
		if(err) console.log(err);
		else {
		res.render('word/awesome', {awesomeCount:count});
		}
	});
};
