
/*
 * GET home page.
 */



exports.view = function(req, res){

  res.render('index', {
'projects': [

		      { 'name': 'Avatar',
		
	'link': 'profile',

		        'image': 'lorempixel.people.1.jpeg',
		
        'id': 'project1'
		
      },

		      { 'name': 'Quest Board',
	'link': 'play',
		
        'image': 'berlin.jpeg',

		        'id': 'project2'
		
      },
		
      { 'name': 'Practice',
			'link': 'project/Prototyping',
		
        'image': 'lorempixel.technics.1.jpeg',
		
        'id': 'project3'
		
      },
    
		]
	});



};
