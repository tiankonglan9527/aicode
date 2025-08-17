// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 阻止默认提交行为

  // 获取表单数据
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // 简单表单验证
  if (!username || !password) {
    alert('请输入用户名和密码');
    return;
  }

  // 模拟登录成功
  alert('登录成功！');
  this.reset(); // 清空表单
});