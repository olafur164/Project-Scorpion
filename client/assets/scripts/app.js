Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };

    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});
// Rendering with Handlebars
function render(template, data, target) {
    var target = document.getElementById("yield")
	$.get('/assets/templates/' + template + ".handlebars", function (temp) {
    	var templates = Handlebars.compile(temp);
    	target.innerHTML = templates(data);
        if(template === "livesearch") {
            main();
            search();
        }
        if(template === "search") {
            main();
            search();
        }
        if(template === "index") {
            main();
        }
        if(template === "movie") {
            main();
        }
        if(template === "tv") {
            main();
        }
        if(template === "filter") {
            main();
            filter();
        }
    })
};
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
Router.autoRun = true;
    Router.on('route', function () {
        console.log('go to ' + this.path);
    });
    Router.on('beforeRender', function () {
        console.log('before ' + this.path);
    });
    Router.on('afterRender', function () {
        console.log('after ' + this.path);
    });
    // Declare not found route
    Router.notFound = function () {
        this.render($('#not-found').html());
    };
Router.route('/', () => {
    const db = new Movies();
    const kvikmyndirdb = new Kvikmyndir();
    kvikmyndirdb.authenticate();
    const iceCinema = kvikmyndirdb.nowPlaying();
    console.log(iceCinema);
    const genres = new Genres();
    const popular = db.getPopular({})
    const genreList = genres.getList({});
    let gen = [];
    genreList.genres.forEach( item => {
        const genreMovies = genres.getMovies({id: item.id})
        gen.push({
            name: item.name,
            id: item.id,
            movies: genreMovies
        });
    })
    render("index", { popular: popular, genre: gen, iceCinema: iceCinema});
}); 
Router.route('/filter', () => {
    const filter = new Filter;
    const genreData = filter.getGenreList({});
    render("filter",{genreList: genreData});
});

Router.route('/filter/:query', () => {
    const db = new Search();
    var query = getParameterByName("query");
    var page = getParameterByName("page");
    const data = db.getMulti({query: query, page: page})
    render("search", { data: data});
});

Router.route('/search', () => {
    render("livesearch");
});
Router.route('/search/:query', () => {
    const db = new Search();
    var query = getParameterByName("query");
    var page = getParameterByName("page");
    const data = db.getMulti({query: query, page: page})
    render("search", { data: data});
});
Router.route('/movie/:id', () => {
    const db = new Movies();
    const data = db.getById({id: this.params.id})
    let trailer = db.getTrailers({id: this.params.id})
    if (trailer) 
        trailer = trailer.results[0].key
    const credits = db.getCredits({id: this.params.id})
    const images = db.getImages({id: this.params.id})
    const similar = db.getSimilarMovies({id: this.params.id})
    render("movie", {data: data, trailer: trailer, credits: credits, images: images, similar: similar});
});
Router.route('/tv/:id', () => {
    const db = new TV();
    const data = db.getById({id: this.params.id});
    const credits = db.getCredits({id: this.params.id})
    const images = db.getImages({id: this.params.id})
    const similar = db.getSimilar({id: this.params.id})
    let trailer = db.getTrailers({id: this.params.id})
    if (trailer) 
        trailer = trailer.results[0].key
    render("tv", {data: data, trailer: trailer, credits: credits, images: images, similar: similar});
});
Router.route('/person/:id', () => {
    const db = new People();
    const data = db.getById({id: this.params.id})
    console.log(data);
    render("person", {data: data});
});
// Display a custom message
Router.notFound = function() {
    this.render("The page at " + this.path +" does not exist.");
};