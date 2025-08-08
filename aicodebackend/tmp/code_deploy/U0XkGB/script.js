// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 表单切换
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginToggle.addEventListener('click', function() {
        this.classList.add('active');
        signupToggle.classList.remove('active');
        loginForm.classList.add('active-form');
        signupForm.classList.remove('active-form');
    });
    
    signupToggle.addEventListener('click', function() {
        this.classList.add('active');
        loginToggle.classList.remove('active');
        signupForm.classList.add('active-form');
        loginForm.classList.remove('active-form');
    });
    
    // 密码显示/隐藏切换
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                this.textContent = '👁️';
            }
        });
    });
    
    // 表单验证
    const loginFormEl = document.getElementById('login-form');
    const signupFormEl = document.getElementById('signup-form');
    
    loginFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!email || !password) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 这里可以添加实际的登录逻辑
        alert('登录成功！');
        this.reset();
    });
    
    signupFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        
        if (!name || !email || !password || !confirm) {
            alert('请填写所有必填字段');
            return;
        }
        
        if (password !== confirm) {
            alert('两次输入的密码不一致');
            return;
        }
        
        if (password.length < 6) {
            alert('密码长度至少为6位');
            return;
        }
        
        // 这里可以添加实际的注册逻辑
        alert('注册成功！');
        this.reset();
        
        // 自动切换到登录表单
        loginToggle.click();
    });
});