document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('task-add-button');
    const pendingTasksList = document.getElementById('pending-tasks');
    const finishedTasksList = document.getElementById('finished-tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = createTaskElement(taskText);
        pendingTasksList.appendChild(listItem);
        taskInput.value = '';
        taskInput.focus();
    }

    function createTaskElement(taskText) {
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        listItem.appendChild(taskSpan);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => completeTask(listItem));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => listItem.remove());

        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);

        return listItem;
    }

    function completeTask(listItem) {
        listItem.classList.add('completed');
        listItem.removeChild(listItem.querySelector('.complete-btn'));
        finishedTasksList.appendChild(listItem);
    }
});
