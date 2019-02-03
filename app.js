const argv = require('./config/yargs').argv
const {create, list, updateTask, deleteTask} = require('./todo/todo');

let command = argv._[0];

switch (command) {

    case 'create': {
        console.log(`Create a TODO task: ${argv.description}`);
        let newTask = create(argv.description);
        console.log(`Task '${newTask.description}' was created`);
        break;
    }
    case 'list':{
        console.log('list all TODO tasks');


        for (let task of list()){
            console.log("======== TODO ========\n".green)
            console.log(`TODO: ${task.description} \n`)
            console.log(`completed: ${task.completed} \n`)
            console.log("======================\n".green)
        }
        break;
    }
    case 'update':{
        let status = updateTask(argv.description, argv.completed);
        if(status){
            console.log(`update a TODO tasks: ${argv.description}. Completed = ${argv.completed}`);
        }else{
            console.log(`The task is not in the DB`);
        }
        break;
    }
    case 'delete':{
        console.log(`Deleting task ${argv.description}`)
        deleteTask(argv.description)
        break;
    }
    default:
        console.log('option not implemented yet')

}