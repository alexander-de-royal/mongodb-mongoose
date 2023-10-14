// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/movieApp', {userNewUrlParser: true, userUnifiedTopology: true})
//     .then(() => {
//         console.log("Connection Open!")
//     })
//     .catch(err => {
//         console.log("Oh! No Error")
//     })

// getting-started.js
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
//
// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
//
// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String
// })
//
// const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'Good'});
//
// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     {title: 'Alien', year: 1979, score:8.1, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'R'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
//     .then(data=> {
//         console.log("It Worked")
//         console.log(data);
//     })
//
