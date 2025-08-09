// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 移动端导航菜单切换
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // 关闭移动菜单
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            
            // 计算目标位置，考虑固定导航栏高度
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 这里可以添加表单验证逻辑
        const formData = new FormData(this);
        
        // 模拟表单提交
        setTimeout(() => {
            alert('感谢您的留言！我们会尽快与您联系。');
            this.reset();
        }, 1000);
    });
}

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-content').style.backgroundColor = 'rgba(52, 152, 219, 0.9)';
        this.querySelector('.project-content h3').style.color = '#fff';
        this.querySelector('.project-content p').style.color = '#fff';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-content').style.backgroundColor = '';
        this.querySelector('.project-content h3').style.color = '';
        this.querySelector('.project-content p').style.color = '';
    });
});

// 页面加载动画
window.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && heroSubtitle) {
        heroTitle.style.opacity = '1';
        heroSubtitle.style.opacity = '1';
    }
    
    // 延迟加载服务卡片动画
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});