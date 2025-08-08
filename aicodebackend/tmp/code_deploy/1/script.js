// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    
    // 从本地存储加载任务
    loadTasks();
    
    // 添加任务事件监听
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // 添加新任务
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('请输入任务内容');
            return;
        }
        
        // 创建任务元素
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.className = 'task-checkbox';
        
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
        
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = '完成';
        completeBtn.addEventListener('click', toggleComplete);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '删除';
        deleteBtn.addEventListener('click', deleteTask);
        
        // 组装任务元素
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(taskActions);
        
        // 添加到任务列表
        taskList.appendChild(taskItem);
        
        // 清空输入框
        taskInput.value = '';
        
        // 保存到本地存储
        saveTasks();
    }
    
    // 切换任务完成状态
    function toggleComplete(e) {
        const taskItem = e.target.closest('.task-item');
        taskItem.classList.toggle('completed');
        saveTasks();
    }
    
    // 删除任务
    function deleteTask(e) {
        if (confirm('确定要删除这个任务吗？')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.remove();
            saveTasks();
        }
    }
    
    // 保存任务到本地存储
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('.task-text').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // 从本地存储加载任务
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            
            tasks.forEach(task => {
                // 创建任务元素
                const taskItem = document.createElement('li');
                taskItem.className = 'task-item';
                if (task.completed) {
                    taskItem.classList.add('completed');
                }
                
                const taskCheckbox = document.createElement('input');
                taskCheckbox.type = 'checkbox';
                taskCheckbox.className = 'task-checkbox';
                taskCheckbox.checked = task.completed;
                
                const taskSpan = document.createElement('span');
                taskSpan.className = 'task-text';
                taskSpan.textContent = task.text;
                
                const taskActions = document.createElement('div');
                taskActions.className = 'task-actions';
                
                const completeBtn = document.createElement('button');
                completeBtn.className = 'complete-btn';
                completeBtn.textContent = '完成';
                completeBtn.addEventListener('click', toggleComplete);
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = '删除';
                deleteBtn.addEventListener('click', deleteTask);
                
                // 组装任务元素
                taskActions.appendChild(completeBtn);
                taskActions.appendChild(deleteBtn);
                taskItem.appendChild(taskCheckbox);
                taskItem.appendChild(taskSpan);
                taskItem.appendChild(taskActions);
                
                // 添加到任务列表
                taskList.appendChild(taskItem);
            });
        }
    }
});