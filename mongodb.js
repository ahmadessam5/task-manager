// CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

// import { MongoClient } from 'mongodb';

// const client = new MongoClient('mongodb://localhost:27017');
// const admin = client.db().admin();
// const dbInfo = await admin.listDatabases();
// for (const db of dbInfo.databases) {
//   console.log(db.name);
// }

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, clint) => {
    if (error){
        return console.log('Unable to connect to database')
    }

    const db =  clint.db(databaseName)

  
    db.collection('users').deleteOne({
        _id: new ObjectID("64aeb6cca2c22b281c1a5277")
    }).then( (result) => {
        console.log(result)
    }).catch( (error) => {
        console.log(error)
    })

    
    db.collection('tasks').updateMany({
        completed: true
    },{
        $set:{
            completed:false
        }
    }).then( (result) => {
        console.log(result)
    }).catch( (error) => {
        console.log(error)
    })
  
    const updatePromis =  db.collection('users').updateOne({
        _id : new ObjectID("64ae97d475b37537f8d67ce6")
    },{
        $set:{
            name:'Ali'
        }
    })

    updatePromis.then( (result) => {
        console.log(result)
    }).catch( (error) =>{
        console.log(error)
    })

    // db.collection('users').findOne({ _id: new ObjectID("64aea79b06d0723704820837") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)

    // })

    // db.collection('users').find({ age: 27 }).toArray((error,users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 27 }).count((error,count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error,tasks) => {
    //     console.log(tasks)
    // })

    
    // db.collection('users').insertOne({
    //     name: 'Khaled',
    //     age: 27
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })
    // db.collection('users').insertMany([
    //     {
    //         name:'Omar',
    //         age: 27
    //     },{
    //         name:'Gunther',
    //         age:30
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the room',
    //         completed: true

    //     },{
    //         description:'work on my project',
    //         completed: true
    //     },{
    //         description:'call my parents',
    //         completed:false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

})