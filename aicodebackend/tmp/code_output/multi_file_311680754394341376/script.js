// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 模拟商品数据
    const products = [
        {
            id: 1,
            title: '智能手机',
            price: 2999,
            category: 'electronics',
            image: 'https://picsum.photos/300/300?random=1',
            rating: 4.5,
            description: '高性能智能手机，大容量电池'
        },
        {
            id: 2,
            title: '无线耳机',
            price: 399,
            category: 'electronics',
            image: 'https://picsum.photos/300/300?random=2',
            rating: 4.2,
            description: '降噪无线耳机，长续航'
        },
        {
            id: 3,
            title: '男士T恤',
            price: 99,
            category: 'clothing',
            image: 'https://picsum.photos/300/300?random=3',
            rating: 4.0,
            description: '纯棉舒适T恤，多种颜色可选'
        },
        {
            id: 4,
            title: '女士连衣裙',
            price: 199,
            category: 'clothing',
            image: 'https://picsum.photos/300/300?random=4',
            rating: 4.3,
            description: '夏季新款连衣裙，透气舒适'
        },
        {
            id: 5,
            title: '智能手表',
            price: 899,
            category: 'electronics',
            image: 'https://picsum.photos/300/300?random=5',
            rating: 4.7,
            description: '多功能智能手表，健康监测'
        },
        {
            id: 6,
            title: '咖啡机',
            price: 499,
            category: 'home',
            image: 'https://picsum.photos/300/300?random=6',
            rating: 4.4,
            description: '家用全自动咖啡机'
        }
    ];

    // 状态管理
    const state = {
        cart: [],
        currentUser: null,
        activeSection: 'home',
        activeTab: 'login'
    };

    // DOM元素
    const sections = {
        home: document.getElementById('home'),
        products: document.getElementById('products'),
        cart: document.getElementById('cart'),
        account: document.getElementById('account')
    };

    const featuredProductsContainer = document.getElementById('featured-products');
    const allProductsContainer = document.getElementById('all-products');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const checkoutBtn = document.getElementById('checkout-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // 初始化应用
    function init() {
        renderFeaturedProducts();
        renderAllProducts();
        setupEventListeners();
        updateCartUI();
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 导航链接点击事件
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                switchSection(section);
            });
        });

        // 标签页按钮点击事件
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tab = this.getAttribute('data-tab');
                switchTab(tab);
            });
        });

        // 筛选器变化事件
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);

        // 结算按钮点击事件
        checkoutBtn.addEventListener('click', checkout);
    }

    // 切换部分
    function switchSection(section) {
        // 隐藏所有部分
        Object.values(sections).forEach(sec => {
            sec.classList.remove('active-section');
        });

        // 显示选中的部分
        sections[section].classList.add('active-section');
        state.activeSection = section;
    }

    // 切换标签页
    function switchTab(tab) {
        // 移除所有标签页按钮的active类
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // 隐藏所有标签内容
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 激活选中的标签页
        document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
        document.getElementById(tab).classList.add('active');
        state.activeTab = tab;
    }

    // 渲染精选商品
    function renderFeaturedProducts() {
        featuredProductsContainer.innerHTML = '';
        const featured = products.slice(0, 4); // 取前4个作为精选商品
        featured.forEach(product => {
            featuredProductsContainer.appendChild(createProductCard(product));
        });
    }

    // 渲染所有商品
    function renderAllProducts() {
        allProductsContainer.innerHTML = '';
        products.forEach(product => {
            allProductsContainer.appendChild(createProductCard(product));
        });
    }

    // 创建商品卡片
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.dataset.category = product.category;
        card.dataset.price = product.price;

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">¥${product.price.toFixed(2)}</div>
                <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <button class="add-to-cart">加入购物车</button>
            </div>
        `;

        // 添加点击事件
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));

        return card;
    }

    // 添加商品到购物车
    function addToCart(product) {
        const existingItem = state.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartUI();
        alert(`${product.title} 已添加到购物车`);
    }

    // 更新购物车UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        
        if (state.cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">您的购物车是空的</p>';
            cartTotalElement.textContent = '¥0.00';
            return;
        }

        let total = 0;
        
        state.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">¥${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="remove-item">删除</div>
                </div>
            `;
            
            // 添加事件监听器
            const minusBtn = cartItem.querySelector('.minus');
            const plusBtn = cartItem.querySelector('.plus');
            const quantityInput = cartItem.querySelector('.quantity-input');
            const removeBtn = cartItem.querySelector('.remove-item');
            
            minusBtn.addEventListener('click', () => updateQuantity(item.id, -1));
            plusBtn.addEventListener('click', () => updateQuantity(item.id, 1));
            quantityInput.addEventListener('change', (e) => {
                updateQuantity(item.id, 0, parseInt(e.target.value));
            });
            removeBtn.addEventListener('click', () => removeFromCart(item.id));
            
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        
        cartTotalElement.textContent = `¥${total.toFixed(2)}`;
    }

    // 更新商品数量
    function updateQuantity(productId, change, newQuantity = null) {
        const item = state.cart.find(item => item.id === productId);
        
        if (item) {
            if (newQuantity !== null) {
                item.quantity = newQuantity;
            } else {
                item.quantity += change;
            }
            
            if (item.quantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            updateCartUI();
        }
    }

    // 从购物车移除商品
    function removeFromCart(productId) {
        state.cart = state.cart.filter(item => item.id !== productId);
        updateCartUI();
    }

    // 筛选商品
    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        
        const filtered = products.filter(product => {
            // 分类筛选
            if (category !== 'all' && product.category !== category) {
                return false;
            }
            
            // 价格筛选
            if (priceRange !== 'all') {
                const [min, max] = priceRange.split('-').map(Number);
                
                if (priceRange.endsWith('+')) {
                    if (product.price < min) return false;
                } else {
                    if (product.price < min || product.price > max) return false;
                }
            }
            
            return true;
        });
        
        // 重新渲染筛选后的商品
        allProductsContainer.innerHTML = '';
        filtered.forEach(product => {
            allProductsContainer.appendChild(createProductCard(product));
        });
    }

    // 结算
    function checkout() {
        if (state.cart.length === 0) {
            alert('您的购物车是空的');
            return;
        }
        
        if (!state.currentUser) {
            alert('请先登录');
            switchSection('account');
            return;
        }
        
        // 模拟支付流程
        const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`订单已提交！总金额: ¥${total.toFixed(2)}\n感谢您的购物！`);
        
        // 清空购物车
        state.cart = [];
        updateCartUI();
    }

    // 启动应用
    init();
});