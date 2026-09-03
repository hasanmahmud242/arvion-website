const brandName = 'TUSOROVA';
const whatsappNumber = '8801987510088';
const displayPhoneNumber = '+880 1987-510088';
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function applyBranding() {
  document.title = document.title.replace(/ARVION/gi, brandName);
  document.querySelectorAll('meta[name="description"]').forEach(meta => {
    meta.content = meta.content.replace(/ARVION/gi, brandName);
  });
  document.querySelectorAll('.navbar-brand, .footer-brand').forEach(brand => {
    brand.textContent = brandName;
  });
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  textNodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(/ARVION/gi, brandName);
  });
  document.querySelectorAll('a[href*="ARVION"]').forEach(link => {
    link.href = link.href.replace(/ARVION/g, brandName);
  });
  document.querySelectorAll('a[href*="8801777887879"]').forEach(link => {
    link.href = link.href.replace(/8801777887879/g, whatsappNumber);
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.href = `tel:${whatsappNumber}`;
  });
  const phoneWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const phoneNodes = [];
  while (phoneWalker.nextNode()) phoneNodes.push(phoneWalker.currentNode);
  phoneNodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(/\+880 1777-887879/g, displayPhoneNumber);
  });
}

function buildMarketplaceHeader() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const currentSearch = new URLSearchParams(window.location.search).get('search') || '';
  nav.innerHTML = `<div class="container marketplace-header"><div class="marketplace-main"><a class="navbar-brand" href="index.html" aria-label="${brandName} home"><img src="assets/tusorova-mark.svg" alt="" width="36" height="36"><span>${brandName}</span></a><form class="marketplace-search" role="search"><label class="visually-hidden" for="siteSearch">Search TUSOROVA products</label><input id="siteSearch" type="search" value="${escapeHtml(currentSearch)}" placeholder="Search cookers, kettles, blenders and more" autocomplete="off"><button type="submit" aria-label="Search products">⌕</button></form><div class="marketplace-actions"><a class="account-link" href="contact.html"><span>Need help?</span><b>Support</b></a><a class="cart-link" href="products.html" aria-label="View shopping cart">Cart <span class="cart-count">0</span></a></div><button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Open navigation"><span class="navbar-toggler-icon"></span></button></div><div class="collapse navbar-collapse" id="mainNav"><div class="marketplace-categories"><a class="category-all" href="products.html">☰ <span>All products</span></a><a href="products.html?category=kitchen">Kitchen essentials</a><a href="products.html?category=home">Home care</a><a href="products.html?category=power">Power & utility</a><a href="products.html?category=personal">Personal care</a><a href="products.html">New arrivals</a><a href="products.html#shopProducts">Deals</a><a href="about.html">Our story</a><a href="contact.html">Support</a></div></div></div><a class="floating-whatsapp" href="https://wa.me/${whatsappNumber}?text=Hello%20${brandName}!%20I%27m%20interested%20in%20your%20products." target="_blank" rel="noopener" aria-label="Chat with TUSOROVA on WhatsApp"><span aria-hidden="true">◔</span><b>WhatsApp</b></a>`;
}

const catalogImages = {
  cooker: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=800&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
  blender: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
  kettle: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
  toaster: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80',
  fan: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
  home: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
  grooming: 'https://images.unsplash.com/photo-1522338140505-0c8892b07b09?auto=format&fit=crop&w=800&q=80',
  power: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  lamp: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
};

const products = [
  { name: 'Induction Cooker', category: 'kitchen', label: 'Kitchen', price: '৳3,950', tag: 'NEW', description: 'Fast, even heat for everyday cooking with a compact countertop design.', image: catalogImages.cooker },
  { name: 'Infrared Cooker', category: 'kitchen', label: 'Kitchen', price: '৳3,350', tag: 'POPULAR', description: 'Versatile glass-top cooker for quick meals and easy clean-up.', image: catalogImages.cooker },
  { name: 'Hotpot Cooker', category: 'kitchen', label: 'Kitchen', price: '৳2,490', tag: 'EASY MEALS', description: 'A handy electric pot for noodles, soup, tea, and small portions.', image: catalogImages.kitchen },
  { name: 'Roti Maker', category: 'kitchen', label: 'Kitchen', price: '৳2,290', tag: 'QUICK COOK', description: 'Makes soft flatbreads quickly for a simpler breakfast or dinner.', image: catalogImages.kitchen },
  { name: 'Small Blender', category: 'kitchen', label: 'Kitchen', price: '৳1,650', tag: 'COMPACT', description: 'Small countertop blender for shakes, sauces, and everyday blending.', image: catalogImages.blender },
  { name: 'Large Blender', category: 'kitchen', label: 'Kitchen', price: '৳3,750', tag: 'FAMILY SIZE', description: 'Higher-capacity blender for smoothies, juice, and family recipes.', image: catalogImages.blender },
  { name: 'Small Rechargeable Fan', category: 'home', label: 'Home care', price: '৳1,190', tag: 'PORTABLE', description: 'USB-rechargeable personal fan for desks, travel, and power cuts.', image: catalogImages.fan },
  { name: 'Electric Table Fan', category: 'home', label: 'Home care', price: '৳2,850', tag: 'COOL PICK', description: 'Reliable table fan with adjustable airflow for daily comfort.', image: catalogImages.fan },
  { name: 'All-in-One Trimmer', category: 'personal', label: 'Personal care', price: '৳1,350', tag: 'GROOMING', description: 'Cordless trimmer with practical attachments for neat daily grooming.', image: catalogImages.grooming },
  { name: 'Electric Rice Cooker', category: 'kitchen', label: 'Kitchen', price: '৳2,890', tag: 'BESTSELLER', description: 'Set-and-forget rice cooking with a warm mode for serving later.', image: catalogImages.cooker },
  { name: 'Quick-Boil Electric Kettle', category: 'kitchen', label: 'Kitchen', price: '৳1,250', tag: 'DAILY USE', description: 'Fast boiling kettle for tea, coffee, noodles, and hot water.', image: catalogImages.kettle },
  { name: 'Sandwich Maker', category: 'kitchen', label: 'Kitchen', price: '৳1,790', tag: 'BREAKFAST', description: 'Toasted sandwiches at home with non-stick cooking plates.', image: catalogImages.kitchen },
  { name: 'Pop-up Toaster', category: 'kitchen', label: 'Kitchen', price: '৳1,590', tag: 'MORNING', description: 'Crisp toast made simply with adjustable browning control.', image: catalogImages.toaster },
  { name: 'Multi-Use Grinder', category: 'kitchen', label: 'Kitchen', price: '৳1,490', tag: 'KITCHEN HELP', description: 'Compact grinder for spices, nuts, coffee beans, and more.', image: catalogImages.blender },
  { name: 'Hand Mixer', category: 'kitchen', label: 'Kitchen', price: '৳1,850', tag: 'BAKING', description: 'Lightweight electric mixer for cream, batter, and baking mixes.', image: catalogImages.kitchen },
  { name: 'Mini Food Chopper', category: 'kitchen', label: 'Kitchen', price: '৳1,290', tag: 'TIME SAVER', description: 'Quickly chops herbs, onions, and small ingredients for prep.', image: catalogImages.blender },
  { name: 'Air Fryer', category: 'kitchen', label: 'Kitchen', price: '৳6,990', tag: 'HEALTHY COOK', description: 'Crisps everyday snacks with less oil and simple controls.', image: catalogImages.kitchen },
  { name: 'Electric Lunch Box', category: 'kitchen', label: 'Kitchen', price: '৳1,290', tag: 'ON THE GO', description: 'Warm home-style meals conveniently at work or while travelling.', image: catalogImages.kitchen },
  { name: 'Slow Cooker', category: 'kitchen', label: 'Kitchen', price: '৳3,490', tag: 'HOME COOKED', description: 'Gentle slow cooking for soups, stews, and ready-to-serve meals.', image: catalogImages.cooker },
  { name: 'Juicer', category: 'kitchen', label: 'Kitchen', price: '৳2,990', tag: 'FRESH', description: 'Make fresh fruit juice at home with an easy-clean design.', image: catalogImages.blender },
  { name: 'Coffee Maker', category: 'kitchen', label: 'Kitchen', price: '৳4,850', tag: 'COFFEE TIME', description: 'Simple home coffee brewing for a smooth start to the day.', image: catalogImages.coffee },
  { name: 'Egg Boiler', category: 'kitchen', label: 'Kitchen', price: '৳1,090', tag: 'QUICK SNACK', description: 'Cook eggs to your preference with a compact countertop helper.', image: catalogImages.kitchen },
  { name: 'Electric Pressure Cooker', category: 'kitchen', label: 'Kitchen', price: '৳5,990', tag: 'MULTI COOK', description: 'Practical pressure cooking for tender meals in less time.', image: catalogImages.cooker },
  { name: 'Mini Vacuum Cleaner', category: 'home', label: 'Home care', price: '৳3,290', tag: 'EASY CLEAN', description: 'Compact vacuum for quick clean-ups around the home and car.', image: catalogImages.home },
  { name: 'Steam Iron', category: 'home', label: 'Home care', price: '৳2,390', tag: 'HOME ESSENTIAL', description: 'Smooth everyday clothes with steady heat and steam control.', image: catalogImages.home },
  { name: 'Clothes Steamer', category: 'home', label: 'Home care', price: '৳3,790', tag: 'CREASE CARE', description: 'Refresh garments quickly without taking out the ironing board.', image: catalogImages.home },
  { name: 'Hair Dryer', category: 'personal', label: 'Personal care', price: '৳1,650', tag: 'DAILY GROOMING', description: 'Compact hair dryer with comfortable airflow for everyday styling.', image: catalogImages.grooming },
  { name: 'Rechargeable Emergency Light', category: 'home', label: 'Home care', price: '৳990', tag: 'POWER CUT', description: 'Rechargeable light to keep rooms bright when electricity is out.', image: catalogImages.lamp },
  { name: 'Mosquito Killer Lamp', category: 'home', label: 'Home care', price: '৳780', tag: 'HOME COMFORT', description: 'Quiet UV mosquito lamp for a more comfortable indoor space.', image: catalogImages.lamp },
  { name: 'Mini Humidifier', category: 'home', label: 'Home care', price: '৳1,150', tag: 'FRESH AIR', description: 'Small desktop humidifier that adds gentle moisture to dry rooms.', image: catalogImages.home },
  { name: 'Mini Washing Machine', category: 'home', label: 'Home care', price: '৳5,990', tag: 'SMALL SPACE', description: 'Space-saving washer for light laundry loads in compact homes.', image: catalogImages.home },
  { name: 'Extension Board', category: 'power', label: 'Power & utility', price: '৳650', tag: 'ESSENTIAL', description: 'Multi-socket extension board for a tidy and useful power setup.', image: catalogImages.power },
  { name: 'Universal Travel Adapter', category: 'power', label: 'Power & utility', price: '৳420', tag: 'HANDY', description: 'Compact adapter for everyday devices and travel essentials.', image: catalogImages.power },
  { name: 'USB Power Strip', category: 'power', label: 'Power & utility', price: '৳1,090', tag: 'CHARGING', description: 'Extra sockets and USB ports for keeping devices charged together.', image: catalogImages.power },
  { name: 'LED Desk Lamp', category: 'power', label: 'Power & utility', price: '৳1,250', tag: 'STUDY READY', description: 'Focused LED lighting for reading, study, or desk work.', image: catalogImages.lamp },
  { name: 'Rechargeable Torch', category: 'power', label: 'Power & utility', price: '৳690', tag: 'READY', description: 'Bright handheld torch for home, travel, and emergency use.', image: catalogImages.lamp },
  { name: 'Electric Shaver', category: 'personal', label: 'Personal care', price: '৳1,790', tag: 'GROOMING', description: 'Easy electric shaving for a clean look with less daily effort.', image: catalogImages.grooming },
  { name: 'Hair Clipper', category: 'personal', label: 'Personal care', price: '৳2,150', tag: 'HOME CUT', description: 'Cordless clipper set for neat haircuts and simple maintenance.', image: catalogImages.grooming },
  { name: 'Fabric Lint Remover', category: 'home', label: 'Home care', price: '৳850', tag: 'CARE', description: 'Refresh sweaters and fabrics by removing loose lint and fuzz.', image: catalogImages.home }
];

function productMarkup(product, index) {
  return `<div class="col-6 col-md-4 col-xl-3 product-column" data-category="${product.category}" data-search="${product.name.toLowerCase()} ${product.label.toLowerCase()} ${product.tag.toLowerCase()} ${product.description.toLowerCase()}"><article class="product-card"><a href="contact.html" class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${product.name}"><span class="product-tag">${product.tag}</span><span class="product-stock">In stock</span></a><div class="product-info"><span class="product-category">${product.label}</span><h3 class="product-title">${product.name}</h3><p class="product-description">${product.description}</p><div class="product-bottom"><span class="product-price">${product.price}</span><button class="market-add" type="button" data-add><span>ADD TO CART</span><span>+</span></button></div></div></article></div>`;
}

function renderProducts() {
  const featured = document.querySelector('#featuredProducts');
  const shop = document.querySelector('#shopProducts');
  if (featured) featured.innerHTML = products.slice(0, 4).map(productMarkup).join('');
  if (shop) shop.innerHTML = products.map(productMarkup).join('');
}

function setupCart() {
  let count = Number(sessionStorage.getItem('tusorova-cart') || 0);
  const updateCount = () => document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  updateCount();
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-add]')) return;
    count += 1; sessionStorage.setItem('tusorova-cart', count); updateCount();
    const toastElement = document.getElementById('siteToast');
    if (toastElement && window.bootstrap) bootstrap.Toast.getOrCreateInstance(toastElement).show();
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll('[data-filter]');
  const columns = document.querySelectorAll('.product-column');
  const count = document.querySelector('#productCount');
  if (!buttons.length) return;
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('category');
  const search = (params.get('search') || '').trim().toLowerCase();
  const filter = category => {
    let visible = 0;
    columns.forEach(column => { const matches = (category === 'all' || column.dataset.category === category) && column.dataset.search.includes(search); column.classList.toggle('product-hidden', !matches); if (matches) visible += 1; });
    buttons.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
    if (count) count.textContent = `${visible} product${visible === 1 ? '' : 's'}`;
  };
  buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  filter(['kitchen', 'home', 'power', 'personal'].includes(initial) ? initial : 'all');
}

function setupSiteSearch() {
  const form = document.querySelector('.marketplace-search');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = form.querySelector('input').value.trim();
    window.location.href = query ? `products.html?search=${encodeURIComponent(query)}` : 'products.html';
  });
}

function setupForms() {
  document.querySelectorAll('form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    const original = button.textContent;
    button.textContent = 'Thank you!'; button.disabled = true;
    setTimeout(() => { button.textContent = original; button.disabled = false; form.reset(); }, 2600);
  }));
}

applyBranding();
buildMarketplaceHeader();
renderProducts();
setupCart();
setupFilters();
setupSiteSearch();
setupForms();
