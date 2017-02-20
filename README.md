# Project-Scorpion

## Moviedb class

We have a main class called TheMovieDB, in that class we have a few methods like getApi and requirevalidation and generateQuery
using these methods in extended classes like Movies we can make an api request and fetch data from themoviedb.org
### Movies examples


Get data by movie id
```js
const db = new Movies();
const data = db.getById({id: 2});
```

Get Credits for movie
```js
const db = new Movies();
const data = db.getCredits({id: 2});
```

Get Trailers for movie
```js
const db = new Movies();
const data = db.getTrailers({id: 2});
```

Get Stills for movies by movie id
```js
const db = new Movies();
const data = db.getImages({id: 2});
```

Get Similar movies by movie id
```js
const db = new Movies();
const data = db.getSimilarMovies({id: 2});
```

### Search Examples

Fetching data from multi search, searching for deadpool on page 1
```js
const db = new Search();
const data = db.getMulti({query: 'deadpool', page: 1})
```

### Example for getting data by movie id


Þar sem að helsti tilgangur síðunnar er að finna kvikmyndir og þætti viljum við að það fyrsta sem birtis notanda séu kvikmyndir og þættir. Sjónvarpsefni sem á við fyrir líðandi stund svo sem vinsæla sjónvarpsþætti, bíómyndir í bíó og svo framvegis.

 

Vefsíðan er vísun í þá tíma sem fólk fór og leigði spólur, þá skoðaði það ‘hulstrin’ og las aftan á það fyrir frekari upplýsingar. Við sáum fyrir okkur einfalt útlit, með ítarlegum upplýsingum sem birtast þegar notandi smellir á viðfangsefnið.

 

Við notum fáa stílhreina liti til að halda einföldu útliti. Kvikmynda pósterarnir eru ólíkir í allskyns litum og því lögðum við áherslu á að taka sem minnsta athygli frá myndunum sjálfum og leyfa þeim að njóta sín.

 

Áhersla var lögð á stílhreina leit og einfalda og praktíska filteringu. Hvert skref er gert til að leiða notandan áfram í það næsta. Uppsetning gefur honum möguleikann á að hreinsa val, eyða út eða bæta við filteringu, allt í þeim tilgangi að létta notandanum skrefin. Hnappar sem birta fleiri filtera svo viðmótið haldist hreint, einfalt er að smella á hnappana til að ‘droppa’ filterum niður og gera leitina enn ítarlegri.

Note: Breyting varð  verkefninu og áttu allir að forrita sömu hönnunina. 
