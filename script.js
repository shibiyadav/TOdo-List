function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskContentDiv = document.createElement('div');
    taskContentDiv.className = 'task-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => taskContent.classList.toggle('completed');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    taskContentDiv.appendChild(checkbox);
    taskContentDiv.appendChild(taskContent);

    const taskIcons = document.createElement('div');
    taskIcons.className = 'task-icons';

    const editIcon = document.createElement('i');
    editIcon.className = 'edit';
    editIcon.textContent = '✎';
    editIcon.onclick = () => editTask(taskContent);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'delete';
    deleteIcon.textContent = '🗑';
    deleteIcon.onclick = () => taskList.removeChild(taskDiv);

    taskIcons.appendChild(editIcon);
    taskIcons.appendChild(deleteIcon);

    taskDiv.appendChild(taskContentDiv);
    taskDiv.appendChild(taskIcons);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
}

function editTask(taskContent) {
    const newTask = prompt('Edit your task:', taskContent.textContent);
    if (newTask) taskContent.textContent = newTask;
}