// //jshint esversion:6
//
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url);
//
// // Use connect method to connect to the server
// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//
//     const db = client.db(dbName);
//
//     insertDocuments(db, function(){
//         client.close();
//     });
// });
//
// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//         {
//             name : 'Apple',
//             score: 8,
//             review: 'Great Fruit'
//         },
//         {
//             name : 'Orange',
//             score: 6,
//             review: 'Kinda sour'
//         },
//         {
//             name : 'Banana',
//             score: 9,
//             review: 'Great stuff'
//         }
//     ], function(err, results) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }
//
// const mongoose = require('mongoose');
//
// //mongoose.connect("mongodb://localhost:27017/fruitsDB");
//
// mongoose.connect('mongodb://localhost:27017/fruitsDB', {userNewUrlParser: true, userUnifiedTopology: true})
//
// const fruitSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     review: String
// });
//
// const Fruit = mongoose.model("Fruit", fruitSchema);
//
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit"
// });
//
// fruit.save();

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([
//         {
//             name : 'Apple',
//             score: 8,
//             review: 'Great Fruit'
//         },
//         {
//             name : 'Orange',
//             score: 6,
//             review: 'Kinda sour'
//         },
//         {
//             name : 'Banana',
//             score: 9,
//             review: 'Great stuff'
//         }
//     ], function(err, results) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const fruit = mongoose.model('Movie', fruitSchema);

const apple = new fruit({
    name: 'apple',
    rating: 7,
    review: 'Not so bad'
});



