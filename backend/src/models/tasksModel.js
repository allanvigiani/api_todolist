const conn = require('./connection');

const getAll = async () => {
    const [tasks] = await conn.execute('SELECT * FROM tasks');

    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const currentDate = new Date(Date.now());

    const [createdTask] = await conn.execute('INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)', [title, 'Pendente', currentDate.toUTCString()]);
    
    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const deletedTask = await conn.execute('DELETE FROM tasks WHERE id = ?', [id]);

    return deletedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const [updatedTask] = await conn.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};