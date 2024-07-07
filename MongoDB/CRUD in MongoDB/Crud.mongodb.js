// creating db
use("newDB")

// creating collection
db.createCollection("folder1")

// create//
// db.folder1.insertOne({
//     "Name": "Nikhl",
//     "Title": "New DB",
// })

// db.folder1.insertOne([
//     {
//         id: 1,
//         name: 'John Doe',
//         age: 28,
//         email: 'johndoe@example.com',
//         isActive: true,
//         hobbies: ['reading', 'gaming', 'traveling']
//     },
//     {
//         id: 2,
//         name: 'Jane Smith',
//         age: 34,
//         email: 'janesmith@example.com',
//         isActive: false,
//         hobbies: ['cooking', 'hiking', 'photography']
//     },
//     {
//         id: 3,
//         name: 'Alice Johnson',
//         age: 22,
//         email: 'alicejohnson@example.com',
//         isActive: true,
//         hobbies: ['writing', 'dancing', 'swimming']
//     },
//     {
//         id: 4,
//         name: 'Bob Brown',
//         age: 45,
//         email: 'bobbrown@example.com',
//         isActive: false,
//         hobbies: ['fishing', 'cycling', 'gardening']
//     },
//     {
//         id: 5,
//         name: 'Charlie Davis',
//         age: 31,
//         email: 'charliedavis@example.com',
//         isActive: true,
//         hobbies: ['running', 'painting', 'playing guitar']
//     }
// ])


// read
let a = db.folder1.find({ "isActive": true })

console.log(a.toArray())

// let b = db.folder1.findOne({ "isActive": true })

// console.log(b.toArray())

// update

// db.folder1.updateOne({"isActive": true}, {$set:{"isActive": f

// }})
// db.folder1.updateMany({ "isActive": true }, {
//     $set: {
//         "isActive": 10000000
//     }
// })

// delete

db.folder1.deleteOne({ "isActive": false })
db.folder1.deleteMany({ "isActive": 10000000 })