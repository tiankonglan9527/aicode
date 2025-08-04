document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    // 切换密码可见性
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // 表单提交处理
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = document.querySelector('input[name="remember"]').checked;
        
        // 简单的表单验证
        if (!username) {
            showError('请输入用户名');
            return;
        }
        
        if (!password) {
            showError('请输入密码');
            return;
        }
        
        // 这里应该是实际的登录逻辑，例如AJAX请求
        console.log('登录信息:', { username, password, rememberMe });
        
        // 模拟登录成功
        simulateLogin();
    });
    
    function showError(message) {
        // 在实际应用中，这里应该显示更友好的错误提示
        alert(message);
    }
    
    function simulateLogin() {
        // 显示加载状态
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 登录中...';
        loginBtn.disabled = true;
        
        // 模拟网络请求延迟
        setTimeout(() => {
            // 在实际应用中，这里会根据服务器响应进行处理
            alert('登录成功！');
            
            // 重置按钮状态
            loginBtn.innerHTML = '登 录';
            loginBtn.disabled = false;
            
            // 在实际应用中，这里会跳转到主页或其他页面
            // window.location.href = '/dashboard';
        }, 1500);
    }
});