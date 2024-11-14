const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const emptyMessage = document.getElementById('emptyMessage');
let editTodoId = null;

const todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const todoText = input.value.trim();

    if (!todoText) return; // Evita tarefas em branco

    if (editTodoId) {
        updateTodo(editTodoId, todoText);
    } else {
        addTodoToList({ text: todoText });
    }

    input.value = '';
    editTodoId = null;
    form.querySelector('button').textContent = 'Adicionar';
}

function addTodo(todo) {
    const todoEl = document.createElement('li');
    todoEl.classList.add('flex', 'justify-between', 'items-center', 'border', 'border-gray-300', 'rounded-lg', 'p-2', 'mb-2');

    // Div para o nome da tarefa
    const taskNameDiv = document.createElement('div');
    taskNameDiv.innerText = todo.text;
    taskNameDiv.classList.add('task-name', 'flex-grow');

    // Div para os botões
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex', 'space-x-2');

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Concluir';
    completeButton.classList.add('bg-green-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-green-600');
    completeButton.addEventListener('click', () => toggleComplete(todo.id, todoEl));

    const editButton = document.createElement('button');
    editButton.innerText = 'Editar';
    editButton.classList.add('bg-yellow-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-yellow-600');
    editButton.addEventListener('click', () => {
        input.value = todo.text;
        editTodoId = todo.id;
        form.querySelector('button').textContent = 'Atualizar';
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Deletar';
    deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-red-600');
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    // Adiciona os botões na div de botões
    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    // Adiciona as divs dentro do <li>
    todoEl.appendChild(taskNameDiv);
    todoEl.appendChild(buttonsDiv);
    todosUL.appendChild(todoEl);

    toggleEmptyMessage();
}

function toggleComplete(id, todoEl) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos[todoIndex].completed = !todos[todoIndex].completed;
    todoEl.classList.toggle('line-through', todos[todoIndex].completed);
    updateLS();
}

function updateTodo(id, text) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos[todoIndex].text = text;
    updateLS();
    renderTodos();
}

function deleteTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos.splice(todoIndex, 1);
    updateLS();
    renderTodos();
}

function renderTodos() {
    todosUL.innerHTML = '';
    todos.forEach(todo => addTodo(todo));
    toggleEmptyMessage();
}

function updateLS() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodoToList(todo) {
    const newTodo = {
        id: Date.now(),
        text: todo.text,
        completed: false
    };
    todos.push(newTodo);
    updateLS();
    addTodo(newTodo);
}

function toggleEmptyMessage() {
    emptyMessage.style.display = todos.length ? 'none' : 'block';
}
