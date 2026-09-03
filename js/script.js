const brandName = 'TUSOROVA';
const whatsappNumber = '8801987510088';
const displayPhoneNumber = '+880 1987-510088';

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

const products = [
  { name: 'Everyday Electric Cooker', category: 'kitchen', label: 'Kitchen', price: '৳2,890', tag: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=800&q=80' },
  { name: 'Compact Power Blender', category: 'kitchen', label: 'Kitchen', price: '৳2,150', tag: 'POPULAR', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Quick-Boil Electric Kettle', category: 'kitchen', label: 'Kitchen', price: '৳1,250', tag: 'NEW', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80' },
  { name: 'Personal Desk Fan', category: 'home', label: 'Home care', price: '৳1,490', tag: 'COOL PICK', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sandwich Press', category: 'kitchen', label: 'Kitchen', price: '৳1,790', tag: 'QUICK MEALS', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80' },
  { name: 'Compact Hair Dryer', category: 'home', label: 'Home care', price: '৳1,650', tag: 'DAILY USE', image: 'https://images.unsplash.com/photo-1522338140505-0c8892b07b09?auto=format&fit=crop&w=800&q=80' },
  { name: 'Mini Electric Stove', category: 'kitchen', label: 'Kitchen', price: '৳2,350', tag: 'FAVORITE', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80' },
  { name: 'Extension Board', category: 'power', label: 'Power & utility', price: '৳650', tag: 'ESSENTIAL', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80' },
  { name: 'Small Vacuum Cleaner', category: 'home', label: 'Home care', price: '৳3,290', tag: 'EASY CLEAN', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80' },
  { name: 'Multi-Use Grinder', category: 'kitchen', label: 'Kitchen', price: '৳1,490', tag: 'KITCHEN HELP', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Morning Toaster', category: 'kitchen', label: 'Kitchen', price: '৳1,590', tag: 'BREAKFAST', image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80' },
  { name: 'Universal Adapter Set', category: 'power', label: 'Power & utility', price: '৳420', tag: 'HANDY', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80' }
];

function productMarkup(product, index) {
  const dealData = [
    ['৳3,390', '4.8', '124', '50+ sold', '15% OFF'], ['৳2,590', '4.7', '86', '30+ sold', '17% OFF'],
    ['৳1,490', '4.9', '211', '100+ sold', '16% OFF'], ['৳1,750', '4.6', '57', '20+ sold', '15% OFF'],
    ['৳2,090', '4.7', '73', '40+ sold', '14% OFF'], ['৳1,950', '4.8', '92', '60+ sold', '15% OFF'],
    ['৳2,790', '4.7', '104', '70+ sold', '16% OFF'], ['৳790', '4.9', '193', '150+ sold', '18% OFF'],
    ['৳3,790', '4.6', '41', '15+ sold', '13% OFF'], ['৳1,790', '4.8', '88', '50+ sold', '17% OFF'],
    ['৳1,890', '4.7', '69', '40+ sold', '16% OFF'], ['৳520', '4.9', '156', '120+ sold', '19% OFF']
  ][index];
  const [oldPrice, rating, reviews, sold, discount] = dealData;
  return `<div class="col-6 col-md-4 col-xl-3 product-column" data-category="${product.category}"><article class="product-card"><a href="contact.html" class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${product.name}"><span class="product-tag">${product.tag}</span><span class="product-stock">In stock</span></a><div class="product-info"><span class="product-category">${product.label}</span><h3 class="product-title">${product.name}</h3><div class="product-rating">★ ${rating} <span>(${reviews})</span></div><p class="product-sold">${sold}</p><div class="product-bottom"><div class="product-price-wrap"><span class="product-price">${product.price}</span><span><span class="product-old-price">${oldPrice}</span> <span class="product-discount">${discount}</span></span></div><button class="market-add" type="button" data-add><span>ADD TO CART</span><span>+</span></button></div></div></article></div>`;
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
    if (!event.target.matches('[data-add]')) return;
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
  const initial = new URLSearchParams(window.location.search).get('category');
  const filter = category => {
    let visible = 0;
    columns.forEach(column => { const matches = category === 'all' || column.dataset.category === category; column.classList.toggle('product-hidden', !matches); if (matches) visible += 1; });
    buttons.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
    if (count) count.textContent = `${visible} product${visible === 1 ? '' : 's'}`;
  };
  buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  filter(['kitchen', 'home', 'power'].includes(initial) ? initial : 'all');
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
renderProducts();
setupCart();
setupFilters();
setupForms();
