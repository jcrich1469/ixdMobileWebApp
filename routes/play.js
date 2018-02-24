exports.view = function(req, res) { 
  // controller code goes here 

	//renders play handlebars.
	res.render('play', {
		'games': [
	      { 'name': 'game 1',
		'link': 'game',
        	'id': 'game1'
		},
	      { 'name': 'game 2',
		'link': 'game',
        	'id': 'game2'
		},
	      { 'name': 'game 3',
		'link': 'game',
        	'id': 'game3'
		},
	      { 'name': 'game 4',
		'link': 'game',
        	'id': 'game4'
		},
	      { 'name': 'game 5',
		'link': 'game',
        	'id': 'game5'
		},
	      { 'name': 'game 6',
		'link': 'game',
        	'id': 'game6'
		},
	      { 'name': 'game 7',
		'link': 'game',
        	'id': 'game7'
		},
	      { 'name': 'game 8',
		'link': 'game',
        	'id': 'game8'
		},
	      { 'name': 'game 9',
		'link': 'game',
        	'id': 'game9'
		},
	      { 'name': 'game 10',
		'link': 'game10',
        	'id': 'game10'
		}]

	});
}
