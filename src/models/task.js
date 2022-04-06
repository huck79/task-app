const mongoose = require('mongoose')
//const validator = require('validator')

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: { // Required: person creating the task (pulled from the req)
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    
    // userSort: [{
    //     assignedTo: _id,
    //     rank: Number
    // }]

    // TODO: Implement the below so that tasks can be assigned to someone and and can be made into sub-tasks

    // assignedTo: { // Required: Harry may create a task and assign it to me. TODO: 
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    // parentId: { // Optional: used if this is a sub-task
    //     type: mongoose.Schema.Types.ObjectId
    // } 
})

module.exports = Task