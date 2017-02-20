class Kvikmyndir {
	constructor() {
		this.authURL = 'http://api.biomynd.is/authenticate';
		this.username = 'olafur164';
		this.password = 'olsen123';

	}
	authenticate() {
        'use strict';
		$.ajax({
		    url : this.authURL,
		    type : 'POST',
		    data : {
		        username : this.username,
		        password : this.password
		    },
		    headers: {
		    	"Content-Type": "application/json",
		    	"Accept": "application/json",
		    	"Access-Control-Allow-Origin": "http://localhost:8000"
		    },
		    withCredentials: true,
		    dataType : 'json',
		    success : function (response) {
		        console.log(response);
		    }
		});
	}
}