// script.js - My Sup - مكملات غذائية

// WhatsApp phone number
const WHATSAPP_PHONE = "9647866444446";

// Product Data
const products = [
  {
    id: 1,
    name: "ISO-XP - Whey Protein Isolate",
    category: "protein",
    price: 85000,
    imageFile: "so-xp-whey-protein-isolate.webp",
    description: "بروتين مصل اللبن المعزول عالي الجودة للتعافي وبناء العضلات",
    detailedDescription: "ISO-XP هو بروتين مصل اللبن المعزول الأكثر تقدمًا في السوق. مع 25 جرامًا من البروتين لكل وجبة وأقل من 1 جرام من السكر، فهو مثالي للرياضيين الذين يبحثون عن بناء العضلات الخالية من الدهون والتعافي السريع بعد التمرين.",
    badge: "الأفضل مبيعًا",
    featured: true,
    images: [
      "so-xp-whey-protein-isolate.webp",
      "so-xp-whey-protein-isolate.webp",
      "so-xp-whey-protein-isolate.webp"
    ],
    specifications: [
      { key: "النكهة", value: "فانيلا كريمية" },
      { key: "الحجم", value: "2 كيلو" },
      { key: "البروتين لكل وجبة", value: "25 جرام" },
      { key: "الكربوهيدرات", value: "2 جرام" },
      { key: "الدهون", value: "1.5 جرام" },
      { key: "السعرات الحرارية", value: "120 سعرة" }
    ]
  },
  {
    id: 2,
    name: "Elite Whey Protein",
    category: "protein",
    price: 75000,
    imageFile: "elite-whey-protein.png",
    description: "بروتين مصل اللبن النخبوي لمختلف مستويات اللياقة",
    detailedDescription: "Elite Whey Protein هو مزيج مثالي من بروتين مصل اللبن المعزول والمركز والهيدروليزات. يوفر مزيجًا متوازنًا من البروتين سريع وبطيء الامتصاص للاستفادة القصوى من التمرين.",
    badge: "جودة عالية",
    featured: true,
    images: [
      "elite-whey-protein.png",
      "elite-whey-protein.png",
      "elite-whey-protein.png"
    ],
    specifications: [
      { key: "النكهة", value: "شوكولاتة" },
      { key: "الحجم", value: "2.27 كيلو" },
      { key: "البروتين لكل وجبة", value: "24 جرام" },
      { key: "الكربوهيدرات", value: "3 جرام" },
      { key: "الدهون", value: "2 جرام" }
    ]
  },
  {
    id: 3,
    name: "Diet Whey Protein",
    category: "protein",
    price: 80000,
    imageFile: "diet-whey-protein.webp",
    description: "بروتين مصل اللبن المثالي للحمية والتحكم بالوزن",
    detailedDescription: "Diet Whey Protein مصمم خصيصًا لأولئك الذين يتبعون نظامًا غذائيًا. مع محتوى بروتين عالي وأقل من 100 سعرة حرارية لكل وجبة، فهو مثالي لفقدان الوزن مع الحفاظ على الكتلة العضلية.",
    badge: "للحمية",
    featured: false,
    images: [
      "diet-whey-protein.webp",
      "diet-whey-protein.webp",
      "diet-whey-protein.webp"
    ],
    specifications: [
      { key: "النكهة", value: "فراولة" },
      { key: "الحجم", value: "1.8 كيلو" },
      { key: "البروتين لكل وجبة", value: "23 جرام" },
      { key: "الكربوهيدرات", value: "1 جرام" },
      { key: "الدهون", value: "1 جرام" }
    ]
  },
  {
    id: 4,
    name: "Shaaboom Pump",
    category: "preworkout",
    price: 65000,
    imageFile: "shaaboom-pump.jpg",
    description: "مكمل قبل التمرين لزيادة الطاقة والتركيز والقوة",
    detailedDescription: "Shaaboom Pump هو مكمل قوي قبل التمرين يوفر طاقة فورية وتركيز حاد وضخ عضلي مذهل. مثالي للتمارين الشاقة ورفع الأثقال.",
    badge: "طاقة قصوى",
    featured: true,
    images: [
      "shaaboom-pump.jpg",
      "shaaboom-pump.jpg",
      "shaaboom-pump.jpg"
    ],
    specifications: [
      { key: "النكهة", value: "تفاح أخضر" },
      { key: "الحجم", value: "300 جرام" },
      { key: "الجرعة", value: "ملعقة واحدة قبل التمرين" },
      { key: "الكافيين", value: "250 مجم" }
    ]
  },
  {
    id: 5,
    name: "YAVA LABS CREATINE",
    category: "creatine",
    price: 45000,
    imageFile: "yava-labs-creatine.png",
    description: "كرياتين أحادي الهيدرات النقي للقوة والتحمل",
    detailedDescription: "كرياتين YAVA LABS هو كرياتين أحادي الهيدرات بنقاوة 99.9%. يدعم زيادة القوة والتحمل وكتلة العضلات النقية.",
    badge: "للأداء",
    featured: false,
    images: [
      "yava-labs-creatine.png",
      "yava-labs-creatine.png",
      "yava-labs-creatine.png"
    ],
    specifications: [
      { key: "النقاوة", value: "99.9%" },
      { key: "الحجم", value: "500 جرام" },
      { key: "الجرعة", value: "5 جرام يوميًا" }
    ]
  },
  {
    id: 6,
    name: "Applied Nutrition Multi Vitamin Complex",
    category: "vitamins",
    price: 55000,
    imageFile: "applied-nutrition-multi-vitamin-complex.webp",
    description: "مجمع فيتامينات متعدد للصحة العامة والعافية",
    detailedDescription: "مجمع فيتامينات متكامل من Applied Nutrition يوفر جميع الفيتامينات والمعادن الأساسية التي يحتاجها الجسم لأداء مثالي.",
    badge: "متعدد الفيتامينات",
    featured: true,
    images: [
      "applied-nutrition-multi-vitamin-complex.webp",
      "applied-nutrition-multi-vitamin-complex.webp",
      "applied-nutrition-multi-vitamin-complex.webp"
    ],
    specifications: [
      { key: "العدد", value: "90 كبسولة" },
      { key: "الجرعة", value: "كبسولة واحدة يوميًا" },
      { key: "الفيتامينات", value: "13 فيتامين أساسي" },
      { key: "المعادن", value: "11 معدن أساسي" }
    ]
  },
  {
    id: 7,
    name: "YAVA LABS MULTI VITAMIN",
    category: "vitamins",
    price: 60000,
    imageFile: "yava-labs-multi-vitamin.png",
    description: "فيتامينات متعددة متقدمة مع مضادات الأكسدة",
    detailedDescription: "YAVA LABS MULTI VITAMIN هو صيغة متقدمة تحتوي على فيتامينات ومعادن معززة بمضادات الأكسدة لدعم الصحة العامة والمناعة.",
    badge: "متميز",
    featured: false,
    images: [
      "yava-labs-multi-vitamin.png",
      "yava-labs-multi-vitamin.png",
      "yava-labs-multi-vitamin.png"
    ],
    specifications: [
      { key: "العدد", value: "60 قرص" },
      { key: "الجرعة", value: "قرصين يوميًا" },
      { key: "مضادات الأكسدة", value: "مختارة" }
    ]
  },
  {
    id: 8,
    name: "Mass Gainer",
    category: "protein",
    price: 95000,
    imageFile: "mass-gainer.jpg",
    description: "مكمل لزيادة الوزن وبناء العضلات",
    detailedDescription: "مكمل مثالي لزيادة الوزن وبناء العضلات مع نسبة عالية من البروتين والكربوهيدرات.",
    badge: "للكتلة",
    featured: false,
    images: [
      "mass-gainer.jpg",
      "mass-gainer.jpg",
      "mass-gainer.jpg"
    ]
  },
  {
    id: 9,
    name: "Pre-Workout Extreme",
    category: "preworkout",
    price: 70000,
    imageFile: "preworkout-extreme.jpg",
    description: "طاقة قوية قبل التمرين لأداء استثنائي",
    detailedDescription: "مكمل قبل التمرين يوفر طاقة غير محدودة وتركيز حاد لتدريبات مكثفة.",
    badge: "قوة قصوى",
    featured: false,
    images: [
      "preworkout-extreme.jpg",
      "preworkout-extreme.jpg",
      "preworkout-extreme.jpg"
    ]
  },
  {
    id: 10,
    name: "Creatine Monohydrate",
    category: "creatine",
    price: 40000,
    imageFile: "creatine-monohydrate.jpg",
    description: "كرياتين نقي للقوة والأداء الرياضي",
    detailedDescription: "كرياتين أحادي الهيدرات نقي بنسبة 100% لزيادة القوة والطاقة أثناء التمرين.",
    badge: "نقي 100%",
    featured: false,
    images: [
      "creatine-monohydrate.jpg",
      "creatine-monohydrate.jpg",
      "creatine-monohydrate.jpg"
    ]
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
const productDetailModal = document.getElementById('product-detail-modal');
const closeProductModalBtn = document.getElementById('close-product-modal');
const featuredProductsGrid = document.querySelector('.featured-products-grid');

// Current filter state
let currentFilter = 'all';
let currentPage = 1;
const productsPerPage = 6;

// Format price in Iraqi Dinar
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
    img.onerror = null;
    img.src = svgData;
    img.alt = productName + ' - صورة غير متوفرة';
}

// Offers Slider
function initOffersSlider() {
    const slides = document.querySelectorAll('.offers-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Auto slide
    const autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
    
    // Manual controls
    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(currentSlide + 1);
    });
    
    // Dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide);
            showSlide(index);
        });
    });
}

// About gallery
function initAboutGallery() {
    const thumbs = document.querySelectorAll('.gallery-thumbs img');
    const mainImage = document.querySelector('.gallery-main img');
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
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

// Render products with pagination
function renderProducts(productsToRender, page = 1) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على منتجات</h3>
                <p>حاول اختيار فئة مختلفة</p>
            </div>
        `;
        renderPagination(0);
        return;
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToRender.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    renderPagination(productsToRender.length, page);
}

// Create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card scroll-reveal';
    productCard.setAttribute('data-category', product.category);
    
    const cartItem = cart.find(item => item.id === product.id);
    const inCart = cartItem ? true : false;
    const quantity = cartItem ? cartItem.quantity : 1;
    const imagePath = `assets/products/${product.imageFile}`;
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${imagePath}" alt="${product.name}" loading="lazy" 
                 onerror="handleImageError(this, '${product.name.substring(0, 15)}')">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-overlay">
                <button class="quick-view-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i> عرض سريع
                </button>
            </div>
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
            <div class="product-rating">
                ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="fas fa-star-half-alt"></i>
                <span class="rating-count">(24)</span>
            </div>
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
    
    return productCard;
}

// Render featured products
function renderFeaturedProducts() {
    if (!featuredProductsGrid) return;
    
    const featuredProducts = products.filter(p => p.featured);
    featuredProductsGrid.innerHTML = '';
    
    featuredProducts.slice(0, 4).forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsGrid.appendChild(productCard);
    });
}

// Render pagination
function renderPagination(totalProducts, currentPage) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationContainer = document.getElementById('products-pagination');
    
    if (!paginationContainer) return;
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">
            <i class="fas fa-chevron-right"></i> السابق
        </button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<span class="page-number active">${i}</span>`;
        } else {
            paginationHTML += `<button class="page-number" data-page="${i}">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">
            التالي <i class="fas fa-chevron-left"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

// Open product detail modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Set product details
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-category').textContent = getArabicCategory(product.category);
    document.getElementById('detail-price').textContent = formatPrice(product.price);
    document.getElementById('detail-description').textContent = product.detailedDescription || product.description;
    
    // Set main image
    const mainImage = document.getElementById('detail-main-image');
    mainImage.src = `assets/products/${product.imageFile}`;
    mainImage.alt = product.name;
    
    // Set thumbnails
    const thumbnailsContainer = document.getElementById('detail-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    const images = product.images || [product.imageFile];
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = `assets/products/${img}`;
        thumb.alt = `${product.name} - صورة ${index + 1}`;
        thumb.className = index === 0 ? 'active' : '';
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.image-thumbnails img').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
        });
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Set specifications
    const specsContainer = document.getElementById('detail-specs');
    specsContainer.innerHTML = '';
    
    if (product.specifications) {
        product.specifications.forEach(spec => {
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            specItem.innerHTML = `
                <span class="spec-key">${spec.key}:</span>
                <span class="spec-value">${spec.value}</span>
            `;
            specsContainer.appendChild(specItem);
        });
    }
    
    // Set quantity
    const cartItem = cart.find(item => item.id === product.id);
    const detailQuantity = document.getElementById('detail-quantity');
    detailQuantity.value = cartItem ? cartItem.quantity : 1;
    
    // Set add to cart button
    const addToCartBtn = document.getElementById('detail-add-to-cart');
    addToCartBtn.innerHTML = cartItem ? 
        '<i class="fas fa-check"></i> تمت الإضافة' : 
        '<i class="fas fa-shopping-cart"></i> أضف للسلة';
    addToCartBtn.className = cartItem ? 
        'btn btn-success add-to-cart-btn' : 
        'btn btn-primary add-to-cart-btn';
    
    // Open modal
    productDetailModal.classList.add('active');
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    currentPage = 1;
    
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    
    renderProducts(filteredProducts, currentPage);
}

// Add product to cart
function addToCart(productId, quantity = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantityInput = quantity || 
        parseInt(document.querySelector(`.quantity-input[data-id="${productId}"]`)?.value) || 
        parseInt(document.getElementById('detail-quantity')?.value) || 1;
    
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity = quantityInput;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: quantityInput
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    
    // Update product buttons
    document.querySelectorAll(`.add-to-cart-btn[data-id="${productId}"]`).forEach(btn => {
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        btn.classList.add('added');
    });
    
    // Update detail modal button
    const detailBtn = document.getElementById('detail-add-to-cart');
    if (detailBtn) {
        detailBtn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
        detailBtn.className = 'btn btn-success add-to-cart-btn';
    }
    
    showNotification(`${product.name} تمت إضافته للسلة!`);
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('mySupCart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems.toLocaleString('ar-IQ');
    
    if (cart.length === 0) {
        if (cartItemsContainer) {
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
        }
        if (document.querySelector('.btn-checkout')) {
            document.querySelector('.btn-checkout').style.display = 'none';
        }
    } else {
        if (cartItemsContainer) {
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
            
            if (document.querySelector('.btn-checkout')) {
                document.querySelector('.btn-checkout').style.display = 'flex';
            }
            
            // Add event listeners to cart items
            addCartItemEventListeners();
        }
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);
    if (cartTotal) cartTotal.textContent = formatPrice(subtotal);
    
    if (checkoutSection && checkoutSection.classList.contains('active')) {
        updateOrderSummary();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('My Sup Website Initialized');
    
    // Render initial content
    renderFeaturedProducts();
    renderProducts(products);
    
    // Initialize components
    initOffersSlider();
    initAboutGallery();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize scroll effects
    initScrollEffects();
    updateCartUI();
});

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
    }
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('active'));
    }
    
    // Category filter buttons
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterProducts(this.getAttribute('data-filter'));
        });
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            categoryFilters.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            filterProducts(category);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Checkout button
    if (checkoutBtn) {
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
    }
    
    // Back to cart button
    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', function() {
            checkoutSection.classList.remove('active');
            cartSidebar.classList.add('active');
        });
    }
    
    // Menu toggle
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }
    
    // Mobile menu links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            mobileMenu.classList.remove('active');
            if (this.classList.contains('cart-link')) {
                e.preventDefault();
                cartSidebar.classList.add('active');
            }
        });
    });
    
    // Product detail modal
    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', () => productDetailModal.classList.remove('active'));
    }
    
    if (document.querySelector('.modal-overlay')) {
        document.querySelector('.modal-overlay').addEventListener('click', () => productDetailModal.classList.remove('active'));
    }
    
    // Quick view buttons (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.quick-view-btn')) {
            const productId = parseInt(e.target.closest('.quick-view-btn').getAttribute('data-id'));
            openProductDetail(productId);
        }
    });
    
    // Add to cart buttons (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart-btn')) {
            const productId = parseInt(e.target.closest('.add-to-cart-btn').getAttribute('data-id'));
            addToCart(productId);
        }
    });
    
    // Quantity buttons (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.quantity-btn.minus')) {
            const productId = parseInt(e.target.closest('.quantity-btn').getAttribute('data-id'));
            const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            if (input && parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateProductQuantity(productId, parseInt(input.value));
            }
        }
        
        if (e.target.closest('.quantity-btn.plus')) {
            const productId = parseInt(e.target.closest('.quantity-btn').getAttribute('data-id'));
            const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            if (input) {
                input.value = parseInt(input.value) + 1;
                updateProductQuantity(productId, parseInt(input.value));
            }
        }
    });
    
    // Detail modal quantity buttons
    const detailMinus = document.getElementById('detail-minus');
    if (detailMinus) {
        detailMinus.addEventListener('click', function() {
            const input = document.getElementById('detail-quantity');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    }
    
    const detailPlus = document.getElementById('detail-plus');
    if (detailPlus) {
        detailPlus.addEventListener('click', function() {
            const input = document.getElementById('detail-quantity');
            input.value = parseInt(input.value) + 1;
        });
    }
    
    // Detail modal add to cart
    const detailAddToCart = document.getElementById('detail-add-to-cart');
    if (detailAddToCart) {
        detailAddToCart.addEventListener('click', function() {
            const productId = products.find(p => p.name === document.getElementById('detail-name').textContent)?.id;
            if (productId) {
                const quantity = parseInt(document.getElementById('detail-quantity').value);
                addToCart(productId, quantity);
            }
        });
    }
    
    // Pagination (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.page-btn') || e.target.closest('.page-number:not(.active)')) {
            const page = parseInt(e.target.closest('button').getAttribute('data-page'));
            currentPage = page;
            
            let filteredProducts;
            if (currentFilter === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(p => p.category === currentFilter);
            }
            
            renderProducts(filteredProducts, page);
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Checkout form
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateCheckoutForm()) {
                sendOrderViaWhatsApp();
            }
        });
    }
}

// Update product quantity
function updateProductQuantity(productId, quantity) {
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        if (quantity === 0) {
            cart.splice(existingItemIndex, 1);
        } else {
            cart[existingItemIndex].quantity = quantity;
        }
        saveCartToStorage();
        updateCartUI();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// Add cart item event listeners
function addCartItemEventListeners() {
    // Remove buttons
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    // Quantity buttons in cart
    document.querySelectorAll('.cart-item-quantity .minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity--;
                saveCartToStorage();
                updateCartUI();
            }
        });
    });
    
    document.querySelectorAll('.cart-item-quantity .plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
                saveCartToStorage();
                updateCartUI();
            }
        });
    });
}

// Update order summary
function updateOrderSummary() {
    if (!orderItems) return;
    
    orderItems.innerHTML = '';
    
    if (cart.length === 0) {
        if (emptyOrder) emptyOrder.style.display = 'block';
        if (orderTotal) orderTotal.textContent = '0 د.ع';
        return;
    }
    
    if (emptyOrder) emptyOrder.style.display = 'none';
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span class="order-item-name">${item.name}</span>
            <span class="order-item-quantity">${item.quantity}x</span>
            <span class="order-item-price">${formatPrice(itemTotal)}</span>
        `;
        orderItems.appendChild(orderItem);
    });
    
    if (orderTotal) orderTotal.textContent = formatPrice(total);
}

// Initialize scroll effects
function initScrollEffects() {
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollReveals.forEach(el => observer.observe(el));
}

// Set active nav on scroll
function setActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Validate checkout form
function validateCheckoutForm() {
    let isValid = true;
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        isValid = false;
        name.nextElementSibling.textContent = 'الاسم مطلوب';
    }
    
    // Validate phone
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        isValid = false;
        phone.nextElementSibling.textContent = 'رقم الهاتف مطلوب';
    }
    
    // Validate address
    const address = document.getElementById('address');
    if (!address.value.trim()) {
        isValid = false;
        address.nextElementSibling.textContent = 'العنوان مطلوب';
    }
    
    return isValid;
}

// Validate field
function validateField(field) {
    const errorElement = field.nextElementSibling;
    if (!field.value.trim()) {
        errorElement.textContent = 'هذا الحقل مطلوب';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

// Send order via WhatsApp
function sendOrderViaWhatsApp() {
    // Collect form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value || 'غير محدد';
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value || 'لا يوجد';
    
    // Build order message
    let message = `🎯 *طلب جديد - My Sup*\n\n`;
    message += `👤 *العميل:* ${name}\n`;
    message += `📞 *الهاتف:* ${phone}\n`;
    message += `📍 *المدينة:* ${city}\n`;
    message += `🏠 *العنوان:* ${address}\n`;
    message += `📝 *ملاحظات:* ${notes}\n\n`;
    message += `🛒 *المنتجات:*\n`;
    
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name}\n`;
        message += `   الكمية: ${item.quantity}\n`;
        message += `   السعر: ${formatPrice(item.price)}\n`;
        message += `   الإجمالي: ${formatPrice(itemTotal)}\n\n`;
    });
    
    message += `💰 *المجموع الكلي:* ${formatPrice(total)}\n\n`;
    message += `⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-IQ')}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('تم إرسال الطلب بنجاح إلى واتساب!', 'success');
    
    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartUI();
    
    // Close checkout section
    checkoutSection.classList.remove('active');
    
    // Reset form
    checkoutForm.reset();
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(el => el.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'} notification-icon"></i>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}