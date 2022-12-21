const API_URL="https://www.omdbapi.com/?i=tt3896198&apikey=ee57a6&s=";
const URL_SEARCH="https://www.omdbapi.com/?apikey=ee57a6&i=";

var search_input=document.getElementById("searchip");
var card=document.getElementsByClassName("cards")[0];
document.getElementsByClassName("s")[0].addEventListener("click",function(){
	console.log(search_input.value);
	const query=search_input.value;
	if(query){
		getMovies(API_URL+query);

	}
	if(!query){
		
		
	}

});

async function getMovies(url){
	const resp=await fetch(url);
	const respdata= await resp.json();
	console.log(respdata);
	showMovies(respdata.Search);
}

function showMovies(movies){
	card.innerHTML="";
	movies.forEach(async function(movie){
		const movieData= await fetch(URL_SEARCH+movie.imdbID);
		const movieDataobj=await movieData.json();
		movie_disp(movieDataobj);

	})

}
function movie_disp(imo){
	const moEl=document.createElement("div");
	moEl.classList.add("cards");
	moEl.innerHTML=`
	<div class="card">
		<img src="${imo.Poster}" alt="Poster" width="200px" height="300px"/>
		<div class="">
			<span class="movie-t">Title:<span class="value">${imo.Title}</span></span>
			<span class="movie-t">rating:<span class="value">${imo.imdbRating}</span></span>
			<span class="movie-t">Director:<span class="value">${imo.Director}</span></span>
			<span class="movie-t">Release Date:<span class="value">${imo.Released}</span></span>
			<span class="movie-t">Genre:<span class="value">${imo.Genre}</span></span>
			<span class="movie-t"><a href="https://www.imdb.com/title/${imo.imdbID}"><b>To the Page</b></a></span>
		</div>
	</div>
	`;
	card.appendChild(moEl);
		
}
