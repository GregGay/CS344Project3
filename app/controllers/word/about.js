exports.index = function(req, res){
  res.render('word/about', { title: 'Express' })
};

exports.word = function(req, res) { 
	res.send('Welcome to the profile of the ' + req.params.word + ' words!')
};