class Kvikmyndir {
	constructor() {
		this.username = 'olafur164';
		this.password = 'olsen123';
		this.base_uri = 'http://api.kvikmyndir.is/';
		this.token = '';

	}
    generateQuery( options ) {
        'use strict';
        let myOptions, query, option;
        myOptions = options || {}
        query = "?api_key=" + this.api_key;
        if ( Object.keys( myOptions ).length > 0 ) {
            for ( option in myOptions ) {
                if ( myOptions.hasOwnProperty( option ) && option !== "id" && option !== "body" ) {
                    query = query + "&" + option + "=" + myOptions[ option ];
                }
            }
        }
        return query;
    }
	authenticate() {
        'use strict';
        var result = null;
		$.ajax({
		    url : this.base_uri + "authenticate",
		    type : 'POST',
		    data : {
		        username : this.username,
		        password : this.password
		    },
            dataType: 'json',
            async: false,
		    success : function (response) {
		        result = response
		    }
		});
		this.token = result.token;
	}
    client(options) {
        /*
        $.get(this.base_uri + options.url, function (temp) {
            return temp;
        });
        */
        var result = null;
         $.ajax({
            url: this.base_uri + options.url,
            type: 'get',
            dataType: 'json',
            headers: { 
		        "x-access-token": this.token
		    },
            async: false,
            success: function(data) {
                result = data;
            } 
         });
         return result
    }
    nowPlaying(options) {
    	return this.client(
        {
            url: "movies" + this.generateQuery(options)  
        })
    }
}