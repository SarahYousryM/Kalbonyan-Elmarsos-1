const tasks = {
    tasks: [{
        text: 'eat',
        completed: true
    }, {
        text: 'drink',
        completed: false
    }, {
        text: 'shhoping',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())
