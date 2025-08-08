document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    const taskCount = document.getElementById('taskCount');
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';
    
    // 初始化应用
    function init() {
        renderTasks();
        updateTaskCount();
    }
    
    // 渲染任务列表
    function renderTasks() {
        taskList.innerHTML = '';
        
        const filteredTasks = tasks.filter(task => {
            if (currentFilter === 'all') return true;
            if (currentFilter === 'active') return !task.completed;
            if (currentFilter === 'completed') return task.completed;
            return true;
        });
        
        if (filteredTasks.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = '暂无任务';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = '#999';
            emptyMessage.style.padding = '20px';
            taskList.appendChild(emptyMessage);
            return;
        }
        
        filteredTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.dataset.id = task.id;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTaskComplete(task.id));
            
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '删除';
            deleteBtn.addEventListener('click', () => deleteTask(task.id));
            
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteBtn);
            
            taskList.appendChild(taskItem);
        });
    }
    
    // 添加新任务
    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;
        
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        
        tasks.push(newTask);
        saveTasks();
        taskInput.value = '';
        renderTasks();
        updateTaskCount();
    }
    
    // 切换任务完成状态
    function toggleTaskComplete(id) {
        tasks = tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        );
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // 删除任务
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // 清除已完成任务
    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
        updateTaskCount();
    }
    
    // 更新任务计数
    function updateTaskCount() {
        const activeCount = tasks.filter(task => !task.completed).length;
        taskCount.textContent = `${activeCount} 个未完成任务 (共 ${tasks.length} 个)`;
    }
    
    // 保存任务到本地存储
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // 事件监听器
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderTasks();
        });
    });
    
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    // 初始化应用
    init();
});