document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            nav.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // 模拟文章数据
    const articles = [
        {
            id: 1,
            title: '如何学习前端开发',
            date: '2023-05-15',
            excerpt: '这篇文章将介绍如何系统地学习前端开发，包括HTML、CSS和JavaScript的基础知识。',
            image: 'https://via.placeholder.com/600x400?text=Frontend+Development'
        },
        {
            id: 2,
            title: 'JavaScript最佳实践',
            date: '2023-06-02',
            excerpt: '分享一些JavaScript编码的最佳实践，帮助你写出更干净、更高效的代码。',
            image: 'https://via.placeholder.com/600x400?text=JavaScript+Best+Practices'
        },
        {
            id: 3,
            title: 'CSS Grid布局指南',
            date: '2023-06-20',
            excerpt: '深入了解CSS Grid布局系统，创建复杂的响应式网页布局。',
            image: 'https://via.placeholder.com/600x400?text=CSS+Grid+Layout'
        },
        {
            id: 4,
            title: 'React入门教程',
            date: '2023-07-05',
            excerpt: '从零开始学习React，构建你的第一个React应用。',
            image: 'https://via.placeholder.com/600x400?text=React+Tutorial'
        },
        {
            id: 5,
            title: 'Web性能优化技巧',
            date: '2023-07-18',
            excerpt: '提高网站性能的实用技巧，让你的网站加载更快。',
            image: 'https://via.placeholder.com/600x400?text=Web+Performance'
        },
        {
            id: 6,
            title: '响应式设计原则',
            date: '2023-08-01',
            excerpt: '掌握响应式设计的基本原则，创建适应各种设备的网站。',
            image: 'https://via.placeholder.com/600x400?text=Responsive+Design'
        }
    ];
    
    // 渲染文章
    const articleGrid = document.getElementById('articleGrid');
    const loadMoreBtn = document.getElementById('loadMore');
    let visibleArticles = 3;
    
    function renderArticles() {
        articleGrid.innerHTML = '';
        const articlesToShow = articles.slice(0, visibleArticles);
        
        articlesToShow.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="article-img">
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p class="meta">${article.date}</p>
                    <p>${article.excerpt}</p>
                    <a href="#" class="read-more">阅读更多 →</a>
                </div>
            `;
            articleGrid.appendChild(articleCard);
        });
        
        if (visibleArticles >= articles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
    
    loadMoreBtn.addEventListener('click', function() {
        visibleArticles += 3;
        renderArticles();
    });
    
    // 初始渲染
    renderArticles();
    
    // 联系表单提交
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 这里可以添加表单验证
        
        // 模拟表单提交
        alert(`感谢您的留言，${name}！我们会尽快回复您。`);
        contactForm.reset();
    });
    
    // 滚动时头部阴影效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            document.querySelector('.header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            document.querySelector('.header').style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
});