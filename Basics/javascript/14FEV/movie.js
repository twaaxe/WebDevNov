//Movie app
/*
Movie App - Prototype
@Properties
    title : String
    poster_front : String (url)
    poster_back : String (url)
    imdb_score : Number
    movie_year : Number
    movie_genres : ArrayList
    user_rating : Number
    movie_duration : Number
    director : String
    movie_trailer : String (url)
    movie_description : String (long-text)
    original_language : String
    production_company : String
    actors : ArrayList`
*/
const movieTitleInput = document.getElementById("movie_title");
const input = document.querySelectorAll("input"); //create an array that conain all the inpu of the html file
//document.querySelectorAll wait a CSS selector


function MovieApplication(){
    this.movies=[];

}

MovieApplication.prototype.addMovie = function(obj){
    console.log(obj)
    return this.movies.push(obj)
}

MovieApplication.prototype.clickHandler = function(){
    this.addMovie(
        {
            Title : input[0].value,
            poster_front : input[1].value,
            poster_back : input[2].value,
            imdb_scre : input[3].value,
            movie_year : input[4].value,
            movie_genres : input[5].value.split(","),
            user_rating : input[6].value,
            movie_duration : input[7].value,
            director:input[8].value,
            movie_trailer:input[9].value,
            movie_description:input[10].value,
            original_language :input[11].value,
        }
    );
    console.log(this.movies)
    input[0].value="";
    input[1].value="";
    input[2].value="";
    input[3].value="";
    input[4].value="";
    input[5].value="";
}

let app = new MovieApplication()




