
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.word = function(req, res) { 
	res.send('Welcome to the profile of the ' + req.params.word + ' words!')
};