require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')


//  //----------------Promise chaining-----------------------
// User.findByIdAndUpdate('64b7eedd6a672524240d54a5', { age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age : 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// //-----------------async & await---------------------------
// const updateAgeAndCount = async (id,age) => {
//     const user = await User.findByIdAndUpdate(id,{age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('64b7ee3e7692f30e044db1e5', 27).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//  //------------------------promise chaining------------------------------
// Task.findByIdAndRemove('64b7ee181ccacb389448fa4d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//---------------------async & await---------------------------
const deleteTaskAndCount = async (id ) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}
deleteTaskAndCount('64b7f2199a54551b804effdd').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})