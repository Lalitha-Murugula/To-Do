document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the user's name from localStorage
  const userName = localStorage.getItem('userName');
  if (userName) {
    // Display the user's name in the header
    document.getElementById('user-name').textContent = userName;
  } else {
    // Default to 'Guest' if no name is found
    document.getElementById('user-name').textContent = 'Guest';
  }

  const submitButton = document.querySelector('#submit-task-btn');
  const taskInput = document.querySelector('#task-input');
  const taskList = document.getElementById('todo-list');

  // Function to add a task
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a tick mark
      const tickMark = document.createElement('span');
      tickMark.textContent = '✔';
      tickMark.style.color = 'green';
      tickMark.style.marginLeft = '10px';
      tickMark.style.cursor = 'pointer';

      // Append tick mark to the list item
      listItem.appendChild(tickMark);

      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';

      // Optional: Add functionality to remove task on tick mark click
      tickMark.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
    }
  };

  // Event listener for the submit button
  submitButton.addEventListener('click', addTask);

  // Event listener for the "Enter" key press
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});