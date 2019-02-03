let opts_create = {
    description:{
        demand:true,
        alias: 'd'
    }
}

let opts_update = {
    description:{
        demand:true,
        alias: 'd'
    },
    completed:{
        demand:true,
        alias: 'c',
        default: true
    }
}

let opts_delete = {
    description:{
        demand:true,
        alias: 'd'
    }
}

const argv = require('yargs')
    .command('create', 'create a TODO task', opts_create)
    .command('update', 'update a TODO task', opts_update)
    .command('list', 'list  TODO tasks')
    .command('delete', 'delete a TODO task',opts_delete)
    .help()
    .argv;

module.exports = {
    argv
}
