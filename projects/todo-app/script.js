// Lista de tareas
let todos = [];
let currentFilter = 'all';

// Elementos del DOM
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

// Cargar tareas desde localStorage
function loadTodos() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    todos = JSON.parse(saved);
  }
  renderTodos();
}

// Guardar tareas en localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  updateStats();
}

// Agregar nueva tarea
function addTodo() {
  const text = todoInput.value.trim();
  if (text === '') {
    todoInput.focus();
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString()
  };

  todos.push(newTodo);
  saveTodos();
  todoInput.value = '';
  todoInput.focus();
  renderTodos();
}

// Eliminar tarea
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Marcar tarea como completada
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

// Filtrar tareas
function filterTodos() {
  let filtered = todos;

  if (currentFilter === 'active') {
    filtered = todos.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = todos.filter(t => t.completed);
  }

  return filtered;
}

// Renderizar tareas
function renderTodos() {
  const filtered = filterTodos();
  todoList.innerHTML = '';

  if (todos.length === 0) {
    emptyState.style.display = 'block';
    todoList.style.display = 'none';
  } else if (filtered.length === 0) {
    emptyState.innerHTML = `
      <i class="fas fa-filter"></i>
      <p>No hay tareas en esta categoría</p>
      <small>Cambia el filtro para ver otras tareas</small>
    `;
    emptyState.style.display = 'block';
    todoList.style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    todoList.style.display = 'flex';

    filtered.forEach(todo => {
      const li = document.createElement('li');
      li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      li.innerHTML = `
        <input 
          type="checkbox" 
          class="todo-checkbox" 
          ${todo.completed ? 'checked' : ''}
          onchange="toggleTodo(${todo.id})"
        >
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <button class="todo-delete" onclick="deleteTodo(${todo.id})">
          <i class="fas fa-trash"></i>
          <span>Eliminar</span>
        </button>
      `;
      todoList.appendChild(li);
    });
  }
}

// Actualizar estadísticas
function updateStats() {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  totalCount.textContent = total;
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
}

// Limpiar tareas completadas
function clearCompleted() {
  if (todos.some(t => t.completed)) {
    if (confirm('¿Eliminar todas las tareas completadas?')) {
      todos = todos.filter(t => !t.completed);
      saveTodos();
      renderTodos();
    }
  }
}

// Limpiar todo
function clearAll() {
  if (todos.length > 0) {
    if (confirm('¿Eliminar todas las tareas? Esta acción no se puede deshacer.')) {
      todos = [];
      saveTodos();
      renderTodos();
    }
  }
}

// Escapar HTML para prevenir XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTodos();
  });
});

clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

// Inicializar
loadTodos();
