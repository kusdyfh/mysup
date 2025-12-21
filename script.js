// script.js - Arabic RTL with Products - مع كل التحديثات

// WhatsApp phone number (Iraq) - الرقم الجديد
const WHATSAPP_PHONE = "9647866444446";

// Product Data with exact specifications
const products = [
  {
    id: 1,
    name: "ISO-XP - Whey Protein Isolate",
    category: "protein",
    price: 85000,
    imageFile: "so-xp-whey-protein-isolate.webp",
    description: "بروتين مصل اللبن المعزول عالي الجودة للتعافي وبناء العضلات",
    badge: "الأفضل مبيعًا"
  },
  {
    id: 2,
    name: "Elite Whey Protein",
    category: "protein",
    price: 75000,
    imageFile: "elite-whey-protein.png",
    description: "بروتين مصل اللبن النخبوي لمختلف مستويات اللياقة",
    badge: "جودة عالية"
  },
  {
    id: 3,
    name: "Diet Whey Protein",
    category: "protein",
    price: 80000,
    imageFile: "diet-whey-protein.webp",
    description: "بروتين مصل اللبن المثالي للحمية والتحكم بالوزن",
    badge: "للحمية"
  },
  {
    id: 4,
    name: "Shaaboom Pump",
    category: "preworkout",
    price: 65000,
    imageFile: "shaaboom-pump.jpg",
    description: "مكمل قبل التمرين لزيادة الطاقة والتركيز والقوة",
    badge: "طاقة قصوى"
  },
  {
    id: 5,
    name: "YAVA LABS CREATINE",
    category: "creatine",
    price: 45000,
    imageFile: "yava-labs-creatine.png",
    description: "كرياتين أحادي الهيدرات النقي للقوة والتحمل",
    badge: "للأداء"
  },
  {
    id: 6,
    name: "Applied Nutrition Multi Vitamin Complex",
    category: "vitamins",
    price: 55000,
    imageFile: "applied-nutrition-multi-vitamin-complex.webp",
    description: "مجمع فيتامينات متعدد للصحة العامة والعافية",
    badge: "متعدد الفيتامينات"
  },
  {
    id: 7,
    name: "YAVA LABS MULTI VITAMIN",
    category: "vitamins",
    price: 60000,
    imageFile: "yava-labs-multi-vitamin.png",
    description: "فيتامينات متعددة متقدمة مع مضادات الأكسدة",
    badge: "متميز"
  }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('mySupCart')) || [];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartSubtotal = document.querySelector('.cart-subtotal');
const cartTotal = document.querySelector('.cart-total');
const cartSidebar = document.getElementById('cart-sidebar');
const checkoutSection = document.querySelector('.checkout');
const orderItems = document.querySelector('.order-items');
const orderTotal = document.querySelector('.total-amount');
const checkoutForm = document.getElementById('checkout-form');
const categoryFilters = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const cartToggleBtn = document.getElementById('cart-toggle');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const backToCartBtn = document.getElementById('back-to-cart');
const menuToggleBtn = document.getElementById('menu-toggle');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
const emptyOrder = document.querySelector('.empty-order');

// Format price in Iraqi Dinar - استخدام الأرقام الإنجليزية
function formatPrice(price) {
    return new Intl.NumberFormat('en-US').format(price) + ' د.ع';
}

// Handle image loading errors
function handleImageError(img, productName) {
    console.log(`Image failed to load: ${img.src}`);
    
    // Create a fallback image with product name
    const svgPlaceholder = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#e0f2fe"/>
            <text x="100" y="100" font-family="Arial" font-size="16" text-anchor="middle" 
                  dominant-baseline="middle" fill="#197cb6" font-weight="bold">
                ${productName || 'Product'}
            </text>
            <text x="100" y="130" font-family="Arial" font-size="12" text-anchor="middle" 
                  dominant-baseline="middle" fill="#0f6a9c">
                My Sup
            </text>
        </svg>`;
    
    // Convert SVG string to data URL
    const svgData = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgPlaceholder)}`;
    
    // Set the fallback image
    img.onerror = null; // Prevent infinite loop
    img.src = svgData;
    img.alt = productName + ' - صورة غير متوفرة';
    
    // Try alternative paths
    setTimeout(() => {
        const filename = img.getAttribute('data-filename') || img.src.split('/').pop();
        const alternativePaths = [
            `products/${filename}`,
            `images/${filename}`,
            `img/${filename}`,
            `assets/${filename}`
        ];
        
        for (const path of alternativePaths) {
            const testImg = new Image();
            testImg.onload = function() {
                img.src = path;
                console.log(`Found image at: ${path}`);
            };
            testImg.src = path;
        }
    }, 100);
}

// تأثيرات التمرير والكشف عن العناصر
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // تأثير خاص للعناوين
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('in-view');
                }
            }
        });
    }, observerOptions);
    
    // مراقبة جميع العناصر التي تحتاج إلى تأثيرات
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
    
    // تأثير الهيدر عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// إضافة فئة scroll-reveal تلقائياً للعناصر
function addScrollRevealClasses() {
    const elementsToReveal = [
        '.product-card',
        '.hero-text',
        '.hero-image',
        '.category-card',
        '.about-text',
        '.about-image',
        '.branch-card',
        '.info-card',
        '.feature-item'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (!el.classList.contains('scroll-reveal')) {
                el.classList.add('scroll-reveal');
            }
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Preload images
    preloadImages();
    
    // Render products
    renderProducts(products);
    
    // Update cart UI
    updateCartUI();
    
    // Setup event listeners
    setupEventListeners();
    
    // Set active nav link based on scroll
    setActiveNavOnScroll();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Add scroll reveal classes
    setTimeout(addScrollRevealClasses, 100);
    
    // إضافة تأثيرات للأزرار مباشرة
    setupWhatsAppButtons();
});

// إعداد أزرار الواتساب
function setupWhatsAppButtons() {
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#checkout') {
                e.preventDefault();
                if (cart.length === 0) {
                    showNotification('سلة التسوق فارغة! أضف منتجات قبل إتمام الطلب.', 'error');
                    return;
                }
                cartSidebar.classList.remove('active');
                checkoutSection.classList.add('active');
                checkoutSection.scrollIntoView({ behavior: 'smooth' });
                updateOrderSummary();
            }
        });
    });
}

// Preload product images
function preloadImages() {
    console.log('جاري تحميل الصور...');
    
    products.forEach(product => {
        const img = new Image();
        img.src = `assets/products/${product.imageFile}`;
        img.onload = () => console.log(`✅ تم تحميل: ${product.imageFile}`);
        img.onerror = () => {
            console.log(`❌ فشل تحميل: ${product.imageFile}`);
            // محاولة مسارات بديلة
            const alternativePaths = [
                `products/${product.imageFile}`,
                `images/${product.imageFile}`,
                `img/${product.imageFile}`
            ];
            
            alternativePaths.forEach(path => {
                const testImg = new Image();
                testImg.onload = () => console.log(`✅ تم العثور على الصورة في: ${path}`);
                testImg.src = path;
            });
        };
    });
}

// Render products to the page
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على منتجات</h3>
                <p>حاول اختيار فئة مختلفة</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card scroll-reveal';
        productCard.setAttribute('data-category', product.category);
        
        // Check if product is already in cart
        const cartItem = cart.find(item => item.id === product.id);
        const inCart = cartItem ? true : false;
        const quantity = cartItem ? cartItem.quantity : 1;
        
        // Image path
        const imagePath = `assets/products/${product.imageFile}`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imagePath}" alt="${product.name}" loading="lazy" data-filename="${product.imageFile}" 
                     onerror="handleImageError(this, '${product.name.substring(0, 15)}')">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-header">
                    <div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-category">${getArabicCategory(product.category)}</div>
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="${quantity}" min="1" max="99" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart-btn ${inCart ? 'added' : ''}" data-id="${product.id}">
                        <i class="fas ${inCart ? 'fa-check' : 'fa-shopping-cart'}"></i>
                        ${inCart ? 'تمت الإضافة' : 'أضف للسلة'}
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to product buttons
    addProductEventListeners();
}

// Get Arabic category name
function getArabicCategory(category) {
    const categories = {
        'protein': 'بروتين',
        'preworkout': 'قبل التمرين',
        'creatine': 'كرياتين',
        'vitamins': 'فيتامينات',
        'all': 'جميع المنتجات'
    };
    return categories[category] || category;
}

// Add event listeners to product elements
function addProductEventListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id);
        });
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const input = document.querySelector(`.quantity-input[data-id="${id}"]`);
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateProductQuantity(id, parseInt(input.value));
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const input = document.querySelector(`.quantity-input[data-id="${id}"]`);
            input.value = parseInt(input.value) + 1;
            updateProductQuantity(id, parseInt(input.value));
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const value = parseInt(this.value) || 1;
            this.value = Math.min(Math.max(value, 1), 99);
            updateProductQuantity(id, parseInt(this.value));
        });
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Check if product is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Update quantity if already in cart
        cart[existingItemIndex].quantity = quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: quantity
        });
    }
    
    // Save to localStorage
    saveCartToStorage();
    
    // Update UI
    updateCartUI();
    
    // Update product button
    const addBtn = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
    if (addBtn) {
        addBtn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        addBtn.classList.add('added');
    }
    
    // Show cart sidebar
    cartSidebar.classList.add('active');
    
    // Show notification
    showNotification(`${product.name} تمت إضافته للسلة!`);
}

// Update product quantity in cart (from product page)
function updateProductQuantity(productId, quantity) {
    // Check if product is in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Update cart quantity
        cart[existingItemIndex].quantity = quantity;
        saveCartToStorage();
        updateCartUI();
    }
}

// Update cart quantity (from cart sidebar)
function updateCartItemQuantity(productId, quantity) {
    if (quantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = quantity;
        saveCartToStorage();
        updateCartUI();
        updateOrderSummary();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    updateOrderSummary();
    
    // Update product button
    const addBtn = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
    if (addBtn) {
        addBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> أضف للسلة';
        addBtn.classList.remove('added');
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('mySupCart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems.toLocaleString('ar-IQ');
    
    // Update cart items display
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-basket"></i>
                </div>
                <h4>سلة التسوق فارغة</h4>
                <p>أضف بعض المنتجات للبدء!</p>
                <a href="#products" class="btn btn-primary">
                    <i class="fas fa-store"></i> تصفح المنتجات
                </a>
            </div>
        `;
        
        document.querySelector('.btn-checkout').style.display = 'none';
    } else {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                    <div class="cart-item-actions">
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item-btn" data-id="${item.id}">
                            <i class="fas fa-trash"></i> إزالة
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        document.querySelector('.btn-checkout').style.display = 'flex';
        
        // Add event listeners to cart items
        addCartItemEventListeners();
    }
    
    // Update cart totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTotal.textContent = formatPrice(subtotal);
    
    // Update order summary if checkout is visible
    if (checkoutSection.classList.contains('active')) {
        updateOrderSummary();
    }
}

// Add event listeners to cart items
function addCartItemEventListeners() {
    document.querySelectorAll('.cart-item .quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === id);
            if (item) {
                const newQuantity = item.quantity - 1;
                updateCartItemQuantity(id, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.cart-item .quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const item = cart.find(item => item.id === id);
            if (item) {
                const newQuantity = item.quantity + 1;
                updateCartItemQuantity(id, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Update order summary in checkout
function updateOrderSummary() {
    if (cart.length === 0) {
        emptyOrder.style.display = 'flex';
        orderItems.innerHTML = '';
        orderTotal.textContent = formatPrice(0);
        return;
    }
    
    emptyOrder.style.display = 'none';
    orderItems.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span class="order-item-name">${item.name}</span>
            <span class="order-item-quantity">×${item.quantity}</span>
            <span class="order-item-price">${formatPrice(itemTotal)}</span>
        `;
        orderItems.appendChild(orderItem);
    });
    
    orderTotal.textContent = formatPrice(total);
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    cartToggleBtn.addEventListener('click', function() {
        cartSidebar.classList.add('active');
    });
    
    // Close cart
    closeCartBtn.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
    });
    
    // Category filter buttons
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const filter = this.getAttribute('data-filter');
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(p => p.category === filter);
                renderProducts(filteredProducts);
            }
        });
    });
    
    // Category cards - إصلاح التنقل بين التصنيفات
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter button
            categoryFilters.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            
            // Filter products
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(p => p.category === category);
                renderProducts(filteredProducts);
            }
            
            // Scroll to products
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('سلة التسوق فارغة! أضف منتجات قبل إتمام الطلب.', 'error');
            return;
        }
        
        cartSidebar.classList.remove('active');
        checkoutSection.classList.add('active');
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
        updateOrderSummary();
    });
    
    // Back to cart button
    backToCartBtn.addEventListener('click', function() {
        checkoutSection.classList.remove('active');
        cartSidebar.classList.add('active');
    });
    
    // Menu toggle
    menuToggleBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    // Close menu
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Mobile menu links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            mobileMenu.classList.remove('active');
            
            // Handle cart link
            if (this.classList.contains('cart-link')) {
                e.preventDefault();
                cartSidebar.classList.add('active');
                return;
            }
        });
    });
    
    // Footer category links
    document.querySelectorAll('.footer-links a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            categoryFilters.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === filter) {
                    btn.classList.add('active');
                }
            });
            
            // Filter products
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(p => p.category === filter);
                renderProducts(filteredProducts);
            }
            
            // Scroll to products
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Checkout form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateCheckoutForm()) {
            sendOrderViaWhatsApp();
        }
    });
    
    // Form input validation
    const requiredInputs = checkoutForm.querySelectorAll('input[required], textarea[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                const errorElement = this.parentElement.parentElement.querySelector('.error-message');
                errorElement.textContent = '';
                this.style.borderColor = '';
            }
        });
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(event) {
        if (cartSidebar.classList.contains('active') && 
            !cartSidebar.contains(event.target) && 
            !cartToggleBtn.contains(event.target) &&
            !event.target.closest('.cart-item')) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            !menuToggleBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Set active nav link on scroll
    window.addEventListener('scroll', setActiveNavOnScroll);
}

// Set active nav link based on scroll position
function setActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Validate checkout form
function validateCheckoutForm() {
    let isValid = true;
    
    const requiredInputs = checkoutForm.querySelectorAll('input[required], textarea[required]');
    requiredInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Check if cart is empty
    if (cart.length === 0) {
        showNotification('سلة التسوق فارغة! أضف منتجات قبل إتمام الطلب.', 'error');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual form field
function validateField(field) {
    const errorElement = field.parentElement.parentElement.querySelector('.error-message');
    
    if (field.value.trim() === '') {
        errorElement.textContent = 'هذا الحقل مطلوب';
        field.style.borderColor = '#dc2626';
        return false;
    }
    
    // Special validation for phone number
    if (field.id === 'phone') {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        const cleanedPhone = field.value.replace(/\s/g, '');
        if (!phoneRegex.test(cleanedPhone) || cleanedPhone.length < 8) {
            errorElement.textContent = 'الرجاء إدخال رقم هاتف صحيح';
            field.style.borderColor = '#dc2626';
            return false;
        }
    }
    
    errorElement.textContent = '';
    field.style.borderColor = '';
    return true;
}

// Send order via WhatsApp - باستخدام الرقم الجديد
function sendOrderViaWhatsApp() {
    // Get form data
    const formData = new FormData(checkoutForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const city = formData.get('city') || '';
    const address = formData.get('address');
    const notes = formData.get('notes') || '';
    
    // Format the delivery address
    const deliveryAddress = city ? `${city}, ${address}` : address;
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Build order details in Arabic
    let orderDetails = "🛒 طلب جديد من My Sup\n";
    orderDetails += "────────────────────\n";
    orderDetails += `👤 الاسم: ${name}\n`;
    orderDetails += `📞 الهاتف: ${phone}\n`;
    orderDetails += `📍 العنوان: ${deliveryAddress}\n`;
    if (notes) {
        orderDetails += `📝 الملاحظات: ${notes}\n`;
    }
    orderDetails += "────────────────────\n";
    orderDetails += "🛍️ المنتجات:\n";
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        orderDetails += `${index + 1}) ${item.name} ×${item.quantity} — ${formatPrice(itemTotal)}\n`;
    });
    
    orderDetails += "────────────────────\n";
    orderDetails += `💰 المجموع: ${formatPrice(total)}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(orderDetails);
    
    // Create WhatsApp URL with Iraqi number - الرقم الجديد
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('تم فتح واتساب! الرجاء إرسال الرسالة لإكمال طلبك.');
    
    // Clear cart after order
    cart = [];
    saveCartToStorage();
    updateCartUI();
    
    // Reset form
    checkoutForm.reset();
    
    // Close checkout and go home
    checkoutSection.classList.remove('active');
    setTimeout(() => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
            </div>
            <p>${message}</p>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-hide after 5 seconds
    const autoHide = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        clearTimeout(autoHide);
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                left: 20px;
                background-color: var(--white);
                color: var(--text-dark);
                padding: 20px 24px;
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-xl);
                z-index: 10000;
                transform: translateX(-150%);
                transition: transform 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 400px;
                border-right: 4px solid var(--primary-blue);
                direction: rtl;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification.error {
                border-right-color: #dc2626;
            }
            .notification.success {
                border-right-color: var(--success-green);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-direction: row-reverse;
            }
            .notification-icon {
                color: var(--primary-blue);
                font-size: 1.2rem;
            }
            .notification.error .notification-icon {
                color: #dc2626;
            }
            .notification.success .notification-icon {
                color: var(--success-green);
            }
            .notification p {
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
            }
            .notification-close {
                background: none;
                border: none;
                color: var(--text-light);
                cursor: pointer;
                font-size: 1rem;
                padding: 4px;
                margin-right: 16px;
                transition: var(--transition);
            }
            .notification-close:hover {
                color: var(--text-dark);
            }
        `;
        document.head.appendChild(style);
    }
}

// Add no-products styles if not already added
if (!document.querySelector('#no-products-styles')) {
    const style = document.createElement('style');
    style.id = 'no-products-styles';
    style.textContent = `
        .no-products {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
            color: var(--text-gray);
        }
        .no-products i {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--border-light);
        }
        .no-products h3 {
            font-size: 1.5rem;
            margin-bottom: 12px;
            color: var(--text-dark);
        }
        .no-products p {
            max-width: 400px;
            margin: 0 auto;
        }
    `;
    document.head.appendChild(style);
}

// Add branches section to active nav links
const branchesSection = document.getElementById('branches');
if (branchesSection) {
    // Add branches section to the sections list for scroll detection
    const originalSetActiveNavOnScroll = setActiveNavOnScroll;
    window.setActiveNavOnScroll = function() {
        originalSetActiveNavOnScroll();
        
        // Also handle branches section
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        const branchesTop = branchesSection.offsetTop - 100;
        const branchesHeight = branchesSection.clientHeight;
        
        if (scrollY >= branchesTop && scrollY < branchesTop + branchesHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#branches') {
                    link.classList.add('active');
                }
            });
        }
    };
}

// ===== PRO Quality Motion (tilt + parallax) =====
(() => {
  const box = document.getElementById("qualityBox");
  if (!box) return;

  // smooth tilt
  let rx = 0, ry = 0, tx = 0, ty = 0;

  const clamp = (v, m) => Math.max(-m, Math.min(m, v));

  const apply = () => {
    rx += (tx - rx) * 0.10;
    ry += (ty - ry) * 0.10;
    box.style.transform = `perspective(900px) rotateX(${
      rx
    }deg) rotateY(${
      ry
    }deg) translateZ(0)`;
    requestAnimationFrame(apply);
  };
  apply();

  const setTarget = (clientX, clientY) => {
    const r = box.getBoundingClientRect();
    const px = (clientX - r.left) / r.width;   // 0..1
    const py = (clientY - r.top) / r.height;  // 0..1
    ty = clamp((px - 0.5) * 10, 7);  // rotateY
    tx = clamp(-(py - 0.5) * 10, 7); // rotateX
  };

  box.addEventListener("mousemove", (e) => setTarget(e.clientX, e.clientY));
  box.addEventListener("mouseleave", () => { tx = 0; ty = 0; });

  box.addEventListener("touchmove", (e) => {
    const t = e.touches && e.touches[0];
    if (!t) return;
    setTarget(t.clientX, t.clientY);
  }, { passive: true });
  box.addEventListener("touchend", () => { tx = 0; ty = 0; });
})();