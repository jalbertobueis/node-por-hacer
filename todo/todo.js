
const  fs = require('fs');
const colors = require('colors');


let tasks = [];

let create = (description) => {

    loadDB()
    let task = {
        description,
        completed: false
    }

    tasks.push(task);
    saveDB();
    return task;
}


const list = () => {
    loadDB()
    return tasks;
}

const updateTask = (description, completed = true) => {
    loadDB();
    let index = tasks.findIndex( task => {
        return task.description === description
    })

    if( index >= 0){
        tasks[index].completed = completed
        saveDB()
        return true
    }else{
        return false
    }

}

const deleteTask = (description) => {
    loadDB()
    tasks = tasks.filter(task =>  !(task.description === description))
    saveDB()

}

let loadDB = () => {

    try {
        tasks = require('../db/data.json')
    }catch (Error){
        tasks = [];
    }

}

let saveDB = () => {

        let data = JSON.stringify(tasks);
        const fileData = new Uint8Array(Buffer.from(data));
        fs.writeFile(`db/data.json`, fileData, (err) => { if (err) throw new Error('Cannot save tasks into the DB',err)});

}

module.exports = {
    create,
    list,
    updateTask,
    deleteTask
}