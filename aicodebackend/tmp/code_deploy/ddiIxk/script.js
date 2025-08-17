// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 移动菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动菜单
                nav.classList.remove('active');
            }
        });
    });

    // 画廊数据
    const galleryData = [
        { id: 1, title: '创意设计1', category: 'design', image: 'https://picsum.photos/800/600?random=1' },
        { id: 2, title: '自然摄影1', category: 'photo', image: 'https://picsum.photos/800/600?random=2' },
        { id: 3, title: '抽象艺术1', category: 'art', image: 'https://picsum.photos/800/600?random=3' },
        { id: 4, title: '创意设计2', category: 'design', image: 'https://picsum.photos/800/600?random=4' },
        { id: 5, title: '城市摄影', category: 'photo', image: 'https://picsum.photos/800/600?random=5' },
        { id: 6, title: '抽象艺术2', category: 'art', image: 'https://picsum.photos/800/600?random=6' },
        { id: 7, title: '创意设计3', category: 'design', image: 'https://picsum.photos/800/600?random=7' },
        { id: 8, title: '人像摄影', category: 'photo', image: 'https://picsum.photos/800/600?random=8' },
        { id: 9, title: '现代艺术', category: 'art', image: 'https://picsum.photos/800/600?random=9' },
        { id: 10, title: 'UI设计', category: 'design', image: 'https://picsum.photos/800/600?random=10' },
        { id: 11, title: '风景摄影', category: 'photo', image: 'https://picsum.photos/800/600?random=11' },
        { id: 12, title: '雕塑艺术', category: 'art', image: 'https://picsum.photos/800/600?random=12' }
    ];

    // 渲染画廊
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function renderGallery(filter = 'all') {
        galleryGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.category === filter);
        
        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.category = item.category;
            
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            `;
            
            galleryItem.addEventListener('click', function() {
                openModal(item.image, item.title);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // 初始化画廊
    renderGallery();
    
    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新活动按钮
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选画廊
            const filter = this.dataset.filter;
            renderGallery(filter);
        });
    });
    
    // 模态框功能
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close-btn');
    
    function openModal(imgSrc, caption) {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
        modalCaption.textContent = caption;
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 联系表单提交
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // 这里可以添加表单验证
        console.log('表单提交:', data);
        
        // 模拟提交成功
        alert('感谢您的留言！我会尽快回复您。');
        this.reset();
    });
    
    // 滚动时头部样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});