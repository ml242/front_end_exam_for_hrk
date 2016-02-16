Movies = new Mongo.Collection("movies");

if (Meteor.isClient) {

  Meteor.subscribe('movies');

  Template.movies.helpers({
    movies: function () {
      return Movies.find({});
    }
  });
}


if (Meteor.isServer) {
  
  Meteor.startup(function () {

    var movies =  HTTP.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0add3c897eb656a62cd72aebb3d941d5');

    console.log(movies)

    movies.data.results.map((result) => {
      return Movies.insert(result)
    })
    

  });





}