document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('employeeForm');
  const list = document.getElementById('employeeList');
  const searchInput = document.getElementById('searchInput');

  let employees = [];

  // 添加员工
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value.trim();
    const department = document.getElementById('department').value.trim();
    const hireDate = document.getElementById('hireDate').value;

    if (!name || !position || !department || !hireDate) return;

    const employee = {
      id: Date.now(),
      name,
      position,
      department,
      hireDate
    };

    employees.push(employee);
    renderList();
    form.reset();
  });

  // 渲染员工列表
  function renderList(filteredEmployees = employees) {
    list.innerHTML = '';
    if (filteredEmployees.length === 0) {
      list.innerHTML = '<p>暂无员工信息</p>';
      return;
    }

    filteredEmployees.forEach(emp => {
      const item = document.createElement('div');
      item.className = 'employee-item';

      item.innerHTML = `
        <div>
          <strong>${emp.name}</strong><br/>
          职位: ${emp.position}<br/>
          部门: ${emp.department}<br/>
          入职日期: ${emp.hireDate}
        </div>
        <button onclick="deleteEmployee(${emp.id})">删除</button>
      `;

      list.appendChild(item);
    });
  }

  // 删除员工
  window.deleteEmployee = function(id) {
    employees = employees.filter(emp => emp.id !== id);
    renderList();
  }

  // 搜索员工
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    const filtered = employees.filter(emp =>
      emp.name.toLowerCase().includes(term) ||
      emp.department.toLowerCase().includes(term)
    );
    renderList(filtered);
  });
});