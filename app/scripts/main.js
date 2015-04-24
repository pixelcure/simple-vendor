require([
	'jquery',
    'lodash',
    'backbone',
    'SimpleVendor/SimpleVendor'
], function ($, _, Backbone, SimpleVendor) {

	// Some Venues
	var someVenues = [ 
	    {
	    	id : 1,
	    	firstName : 'Mister', 
	    	lastName : 'Jones', 
	    	address : '48 Allston Street', 
	    	city : 'Boston', 
	    	state : 'MA', 
	    	zip : '02134', 
	    	phoneNumber : '888-100-2018',
	    	venue : 'Royale', 
	    	eventDate : '07/21/2015', 
	    	summary : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sunt eligendi consectetur ab natus iusto obcaecati temporibus nisi explicabo adipisci quia amet ullam maiores culpa cumque ipsum consequuntur nulla neque.'
	    },    
	    {
	    	id : 2,
	    	firstName : 'Rick',
	    	lastName : 'James', 
	    	address : '48 Orchard Street', 
	    	city : 'Boston', 
	    	state : 'MA', 
	    	zip : '02134',
	    	phoneNumber : '381-399-1999', 
	    	venue : 'House of Blues', 
	    	eventDate : '06/11/2015', 
	    	summary : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sunt eligendi consectetur ab natus iusto obcaecati temporibus nisi explicabo adipisci quia amet ullam maiores culpa cumque ipsum consequuntur nulla neque.'
	    }

    ];

	// On DOM Ready    
    $(function(){	
		
		// Define Model
		var venue = new SimpleVendor.Models.Venue({});

		// Data
	    var venues = new SimpleVendor.Collections.Venues(); // End Data

	    // reset venues collecton, now that data has been added
	    venues.reset(someVenues);

		// Instantiate New Venue List
		var venuesList = new SimpleVendor.Views.VenuesList({
			el : 'div.venueList',
			collection : venues,
			model : venue
		});

		// Render Venues List
		venuesList.render()

    }) // End Ready
	
}); // End Require