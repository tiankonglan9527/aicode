document.addEventListener('DOMContentLoaded', () => {
    // 模拟作品数据
    const works = [
        { id: 1, title: '作品1', category: '摄影', image: 'https://picsum.photos/300/200?random=1' },
        { id: 2, title: '作品2', category: '设计', image: 'https://picsum.photos/300/200?random=2' },
        { id: 3, title: '作品3', category: '插画', image: 'https://picsum.photos/300/200?random=3' },
        { id: 4, title: '作品4', category: '摄影', image: 'https://picsum.photos/300/200?random=4' },
        { id: 5, title: '作品5', category: '设计', image: 'https://picsum.photos/300/200?random=5' },
        { id: 6, title: '作品6', category: '插画', image: 'https://picsum.photos/300/200?random=6' },
    ];

    // 渲染作品画廊
    const gallery = document.getElementById('gallery');
    if (gallery) {
        works.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';
            workItem.innerHTML = `
                <img src="${work.image}" alt="${work.title}">
                <h3>${work.title}</h3>
                <p>${work.category}</p>
            `;
            gallery.appendChild(workItem);
        });
    }

    // 图片放大预览功能
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('表单已提交，感谢您的留言！');
            contactForm.reset();
        });
    }
});