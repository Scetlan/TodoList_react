const onFilterTasks = (tasks, filter) => {
   let newTasks;
   if (filter === 'active') {
      newTasks = tasks.filter(task => !task.done);
   } else if (filter === 'completed') {
      newTasks = tasks.filter(task => task.done);
   } else {
      newTasks = tasks;
   }
   return newTasks;
};

export default onFilterTasks;