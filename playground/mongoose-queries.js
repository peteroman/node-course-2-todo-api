const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5c349621f963c9c8e7d53ee011";
// if (!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos ${todos}`);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo ${todo}`);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log(`Todo by id ${todo}`);
// }).catch((e) => console.log(e));

User.findById("5c3475678f91da59dc553ad3").then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e))