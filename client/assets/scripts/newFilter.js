let genres = [];
function newFilter() {
    const searchField = $('#search').val();
    const ratingValues = $("#circles-slider").slider("option", "values");
    const yearValues = $(".year-slider").slider("option", "values");
    console.log(ratingValues);
    let filteredResults = {}
    let output = '';
    if (searchField.length > 0) {
    	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=5caf95feed570ed071f7cb0839668613&query=' + searchField, data => {
    		$.each(data.results, function(key, val){
    			var year = val.release_date[0] + val.release_date[1] + val.release_date[2] + val.release_date[3];
                if (genres.length > 0) {
                    for(var i = 0; i < genres.length; i++) {
                        if (val.genre_ids.includes(genres[i])) {
                            if (val.vote_average >= ratingValues[0] && val.vote_average <= ratingValues[1] && year >= yearValues[0] && year <= yearValues[1]) {
                        
                                output += '<div class="row searchItem">\
                                    <div class="small-4 medium-2 column">\
                                        <a href="/#/movie/' + val.id + '">\
                                            <img src="https://image.tmdb.org/t/p/w500' + val.poster_path + '">\
                                        </a>\
                                    </div>\
                                    <div class="small-8 medium-10 column">\
                                        <div class="movie-title">' + val.title + '</div>\
                                        <div class="column">' + val.overview.slice(0,130) + '...</div>\
                                    </div>\
                                </div>';
                            }
                        }
                    }
                } else {
                    if (val.vote_average >= ratingValues[0] && val.vote_average <= ratingValues[1] && year >= yearValues[0] && year <= yearValues[1]) {
                        console.log("no genre ")
                        output += '<div class="row searchItem">\
                            <div class="small-4 medium-2 column">\
                                <a href="/#/movie/' + val.id + '">\
                                    <img src="https://image.tmdb.org/t/p/w500' + val.poster_path + '">\
                                </a>\
                            </div>\
                            <div class="small-8 medium-10 column">\
                                <div class="movie-title">' + val.title + '</div>\
                                <div class="column">' + val.overview.slice(0,130) + '...</div>\
                            </div>\
                        </div>';
                    }
                }
    		})
    		$('.results').html(output);
    	})
    }
}

function check(id) {
    if (genres.includes(id)) {
        for(var i = genres.length - 1; i >= 0; i--) {
            if(genres[i] === id) {
               genres.splice(i, 1);
            }
        }
    } else {
        genres.push(id);
    }
    $('#filter-' + id).toggleClass('isActive')
}
