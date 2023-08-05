const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreatIndex: true,
    useFindAndModify: false,
    //Not in course
    useUnifiedTopology: true
})




// const me = new User({
//     name: 'Khaled',
//     email:'khaled@MEAD.io',
//     password: 'adfsdfw58A'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error',error)
// })

// const firstTask = new Tasks({
//     description : 'eat lunch',

// })

// firstTask.save().then(()=>{
//     console.log(firstTask)
// }).catch((error)=>{
//     console.log('Error',error)
// })