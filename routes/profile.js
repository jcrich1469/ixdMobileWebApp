exports.view = function(req, res) {
  
// controller code goes here	
//renders profile handlebars.


	
	res.render('profile', {'character': [{
			'image': 'images/profile_pictures/charmander.png',
			'id':'1'	
			},

			{

			'image': 'images/profile_pictures/charmander.png',
			'id':'2'		
			},
			{
			'image': 'images/profile_pictures/charmander.png',
			'id':'3'		
			},
			{
			'image': 'images/profile_pictures/charmander.png',
			'id':'4'		
			}
		]}
	);
};		     
        			