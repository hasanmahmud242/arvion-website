const brandName = 'TUSOROVA';
const whatsappNumber = '8801987510088';
const contactNumber = '8801845552350';
const displayContactNumber = '+880 1845-552350';
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
  document.querySelectorAll('a[href*="wa.me/8801777887879"]').forEach(link => {
    link.href = link.href.replace(/8801777887879/g, whatsappNumber);
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.href = `tel:${contactNumber}`;
  });
  const phoneWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const phoneNodes = [];
  while (phoneWalker.nextNode()) phoneNodes.push(phoneWalker.currentNode);
  phoneNodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(/\+880 1777-887879/g, displayContactNumber);
  });
}

function buildMarketplaceHeader() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const currentSearch = new URLSearchParams(window.location.search).get('search') || '';
  nav.innerHTML = `<div class="container marketplace-header"><div class="marketplace-main"><a class="navbar-brand" href="index.html" aria-label="${brandName} home"><img src="assets/tusorova-mark.svg" alt="" width="36" height="36"><span>${brandName}</span></a><form class="marketplace-search" role="search"><label class="visually-hidden" for="siteSearch">Search TUSOROVA products</label><input id="siteSearch" type="search" value="${escapeHtml(currentSearch)}" placeholder="Search cookers, kettles, blenders and more" autocomplete="off"><button type="submit" aria-label="Search products">⌕</button></form><div class="marketplace-actions"><a class="account-link" href="contact.html"><span>Need help?</span><b>Support</b></a><a class="marketplace-whatsapp" href="https://wa.me/${whatsappNumber}?text=Hello%20${brandName}!%20I%27m%20interested%20in%20your%20products." target="_blank" rel="noopener" aria-label="Chat with ${brandName} on WhatsApp"><img src="assets/whatsapp-chat.svg" alt=""><b>${brandName}</b></a></div><button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Open navigation"><span class="navbar-toggler-icon"></span></button></div><div class="collapse navbar-collapse" id="mainNav"><div class="marketplace-categories"><a class="category-all" href="products.html">☰ <span>All products</span></a><a href="products.html?category=kitchen">Kitchen essentials</a><a href="products.html?category=home">Home care</a><a href="products.html?category=power">Power & utility</a><a href="products.html?category=personal">Personal care</a><a href="products.html">New arrivals</a><a href="products.html#shopProducts">Deals</a><a href="products.html#orderGuide">Order guide</a><a href="about.html">Our story</a><a href="contact.html">Support</a></div></div></div>`;
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
  lamp: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
  hawkinsInductionDisplay: 'assets/hawkins-agi-883-display.png',
  hawkinsInductionGallery: 'assets/hawkins-agi-883-gallery.png',
  miyakoMultiCookerMain: 'assets/miyako-mc-580t-main.png',
  miyakoMultiCookerBox: 'assets/miyako-mc-580t-box.png',
  panasonicMixerMain: 'assets/panasonic-pro-hotel-king-main.png',
  panasonicMixerBox: 'assets/panasonic-pro-hotel-king-box.png',
  novenaAirFryerMain: 'assets/novena-naf-656mp-main.png',
  novenaAirFryerBox: 'assets/novena-naf-656mp-box.png',
  miyakoHandMixerMain: 'assets/miyako-hm-6679-c4-main.png',
  miyakoHandMixerBox: 'assets/miyako-hm-6679-c4-box.png'
};

const catalogProducts = [
  { name: 'Hawkins Black Berry Inverter Induction Cooker', brand: 'Hawkins Black Berry', model: 'AGI-883', category: 'kitchen', label: 'Kitchen', price: '৳3,400', tag: 'INVERTER', description: 'Touch controls, LED display, timer, lock, auto shut-off, overheat protection, and up to 85% energy saving.', details: [{ label: 'Model', value: 'AGI-883' }, { label: 'Inverter technology', value: 'Power-saving cooking that can reduce electricity use by up to 85%.' }, { label: 'Controls', value: 'Smart touch sensor controls with a clear digital LED display.' }, { label: 'Cooking features', value: 'Built-in functions, power adjustment, lock function, and preset timer control.' }, { label: 'Glass surface', value: 'High-temperature resistant crystal glass plate with floral artwork.' }, { label: 'Safety', value: 'Built-in overheat protection and automatic shut-off.' }], image: catalogImages.hawkinsInductionDisplay, gallery: [catalogImages.hawkinsInductionDisplay, catalogImages.hawkinsInductionGallery], fit: 'contain' },
  { name: 'Infrared Cooker', category: 'kitchen', label: 'Kitchen', price: '৳3,350', tag: 'POPULAR', description: 'Versatile glass-top cooker for quick meals and easy clean-up.', image: catalogImages.cooker },
  { name: 'Hotpot Cooker', category: 'kitchen', label: 'Kitchen', price: '৳2,490', tag: 'EASY MEALS', description: 'A handy electric pot for noodles, soup, tea, and small portions.', image: catalogImages.kitchen },
  { name: 'Roti Maker', category: 'kitchen', label: 'Kitchen', price: '৳2,290', tag: 'QUICK COOK', description: 'Makes soft flatbreads quickly for a simpler breakfast or dinner.', image: catalogImages.kitchen },
  { name: 'Small Blender', category: 'kitchen', label: 'Kitchen', price: '৳1,650', tag: 'COMPACT', description: 'Small countertop blender for shakes, sauces, and everyday blending.', image: catalogImages.blender },
  { name: 'Large Blender', category: 'kitchen', label: 'Kitchen', price: '৳3,750', tag: 'FAMILY SIZE', description: 'Higher-capacity blender for smoothies, juice, and family recipes.', image: catalogImages.blender },
  { name: 'Small Rechargeable Fan', category: 'home', label: 'Home care', price: '৳1,190', tag: 'PORTABLE', description: 'USB-rechargeable personal fan for desks, travel, and power cuts.', image: catalogImages.fan },
  { name: 'Electric Table Fan', category: 'home', label: 'Home care', price: '৳2,850', tag: 'COOL PICK', description: 'Reliable table fan with adjustable airflow for daily comfort.', image: catalogImages.fan },
  { name: 'All-in-One Trimmer', category: 'personal', label: 'Personal care', price: '৳1,350', tag: 'GROOMING', description: 'Cordless trimmer with practical attachments for neat daily grooming.', image: catalogImages.grooming },
  { name: 'Miyako Multi Cooker (Rice & Curry)', brand: 'Miyako', model: 'MC-580 T (DOUBLE)', category: 'kitchen', label: 'Kitchen', price: '৳4,200', tag: 'DOUBLE POT', description: '5 L, 1500 W multi cooker with two inner pots for rice, curries, soups, boiling, and frying.', details: [{ label: 'Model', value: 'MC-580 T (DOUBLE)' }, { label: 'Capacity', value: '5 Liters' }, { label: 'Power rating', value: '1500 Watts' }, { label: 'Double pot system', value: 'Two separate inner pots for versatile multi-dish cooking.' }, { label: 'Inner coating', value: 'Ceramic marble non-stick coating for easy food release and cleaning.' }, { label: 'Safety', value: 'Metal thermofuse thermal protection helps prevent overheating.' }, { label: 'Build and uses', value: 'Tempered glass lid and food-grade materials; suitable for rice, curries, soups, boiling, and frying.' }], image: catalogImages.miyakoMultiCookerMain, gallery: [catalogImages.miyakoMultiCookerMain, catalogImages.miyakoMultiCookerBox], fit: 'contain' },
  { name: 'Quick-Boil Electric Kettle', category: 'kitchen', label: 'Kitchen', price: '৳1,250', tag: 'DAILY USE', description: 'Fast boiling kettle for tea, coffee, noodles, and hot water.', image: catalogImages.kettle },
  { name: 'Sandwich Maker', category: 'kitchen', label: 'Kitchen', price: '৳1,790', tag: 'BREAKFAST', description: 'Toasted sandwiches at home with non-stick cooking plates.', image: catalogImages.kitchen },
  { name: 'Pop-up Toaster', category: 'kitchen', label: 'Kitchen', price: '৳1,590', tag: 'MORNING', description: 'Crisp toast made simply with adjustable browning control.', image: catalogImages.toaster },
  { name: 'Panasonic Pro 3 in 1 Mixer Grinder', brand: 'Panasonic Pro', model: 'HOTEL KING', category: 'kitchen', label: 'Kitchen', price: '৳3,700', tag: '1600 W', description: 'Heavy-duty 1600 W copper-motor mixer grinder with three stainless steel jars.', details: [{ label: 'Model / series', value: 'HOTEL KING' }, { label: 'Motor power', value: '1600 W heavy-duty motor.' }, { label: 'Motor type', value: '100% copper motor for high-capacity kitchen performance.' }, { label: 'Jar set', value: 'Three durable stainless steel jars for grinding, blending, and chutney making.' }, { label: 'Controls', value: 'Front rotary control knob with multiple speed settings.' }, { label: 'Warranty', value: '2 years warranty for the motor only.' }, { label: 'Build', value: 'Sturdy white base with green accent trim and secure lock-in jar handles.' }], image: catalogImages.panasonicMixerMain, gallery: [catalogImages.panasonicMixerMain, catalogImages.panasonicMixerBox], fit: 'contain' },
  { name: 'Miyako Hand Mixer / Egg Beater', brand: 'Miyako', model: 'HM-6679 C4', category: 'kitchen', label: 'Kitchen', price: '৳1,700', tag: '5 SPEEDS', description: '5-speed hand mixer with turbo boost, two beaters, and two dough hooks.', details: [{ label: 'Model', value: 'HM-6679 C4' }, { label: 'Power supply', value: '220–240 V / 50–60 Hz.' }, { label: 'Speed settings', value: 'Five settings for dry foods, liquid ingredients, cakes and cookies, creaming, and egg or cream whipping.' }, { label: 'Turbo function', value: 'Turbo button boosts the motor speed instantly when needed.' }, { label: 'Included attachments', value: 'Two chrome-plated beaters for eggs and cream, plus two dough hooks for kneading.' }, { label: 'Design', value: 'Lightweight, easy-grip handle with a top eject button for safe attachment release.' }], image: catalogImages.miyakoHandMixerMain, gallery: [catalogImages.miyakoHandMixerMain, catalogImages.miyakoHandMixerBox], fit: 'contain' },
  { name: 'Mini Food Chopper', category: 'kitchen', label: 'Kitchen', price: '৳1,290', tag: 'TIME SAVER', description: 'Quickly chops herbs, onions, and small ingredients for prep.', image: catalogImages.blender },
  { name: 'Novena Inverter Air Fryer', brand: 'Novena', model: 'NAF-656MP', category: 'kitchen', label: 'Kitchen', price: '৳7,400', tag: '6 LITERS', description: '6 L air fryer with dual heating, 360° hot-air circulation, and a viewing window.', details: [{ label: 'Brand', value: 'Novena, a product of Crockeries Garden Ltd.' }, { label: 'Model', value: 'NAF-656MP' }, { label: 'Capacity', value: '6 Liters' }, { label: 'Power rating', value: '1550 W + 300 W dual heating elements.' }, { label: 'Technology', value: 'Inverter Power Saving System with 360° rapid hot-air circulation.' }, { label: 'Cooking', value: 'Top and bottom heating for balanced cooking, with less oil and less need for flipping.' }, { label: 'Temperature range', value: 'Adjustable from 80°C to 200°C.' }, { label: 'Basket and controls', value: 'LFGB food-grade non-stick basket with dual mechanical temperature and timer knobs.' }, { label: 'Viewing window', value: 'Transparent front window and interior light to monitor cooking progress.' }], image: catalogImages.novenaAirFryerMain, gallery: [catalogImages.novenaAirFryerMain, catalogImages.novenaAirFryerBox], fit: 'contain' },
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

const approvedProductNames = new Set([
  'Hawkins Black Berry Inverter Induction Cooker',
  'Miyako Multi Cooker (Rice & Curry)',
  'Panasonic Pro 3 in 1 Mixer Grinder',
  'Novena Inverter Air Fryer',
  'Miyako Hand Mixer / Egg Beater'
]);
const products = catalogProducts.filter(product => approvedProductNames.has(product.name));

function orderUrlFor(product) {
  const message = `Hello ${brandName}! I would like to order:\n\nProduct: ${product.name}\nPrice: ${product.price}\nQuantity: 1\n\nPlease tell me the delivery details, delivery charge, and payment options.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function productMarkup(product, index, compactListing = false) {
  const orderUrl = orderUrlFor(product);
  const brandModel = product.brand ? `<p class="product-model">${escapeHtml(product.brand)} · Model ${escapeHtml(product.model)}</p>` : '';
  const imageClass = product.fit === 'contain' ? ' product-image-contain' : '';
  const columnClass = compactListing ? 'col-6 col-md-4 col-lg-3 col-xxl-2' : 'col-6 col-md-4 col-xl-3';
  return `<div class="${columnClass} product-column" data-category="${product.category}" data-search="${product.name.toLowerCase()} ${product.label.toLowerCase()} ${product.tag.toLowerCase()} ${product.description.toLowerCase()}"><article class="product-card"><button class="product-image-wrap product-gallery-trigger" type="button" data-gallery-index="${index}" aria-label="View photos for ${escapeHtml(product.name)}" aria-haspopup="dialog"><img class="product-image${imageClass}" src="${product.image}" alt="${escapeHtml(product.name)}"><span class="product-tag">${product.tag}</span><span class="product-stock">View photos</span></button><div class="product-info"><span class="product-category">${product.label}</span>${brandModel}<h3 class="product-title">${escapeHtml(product.name)}</h3><p class="product-description">${escapeHtml(product.description)}</p><div class="product-bottom"><span class="product-price">${product.price}</span><div class="product-actions"><button class="market-details" type="button" data-details-index="${index}" aria-label="View details for ${escapeHtml(product.name)}" aria-haspopup="dialog">DETAILS</button><a class="market-add" href="${orderUrl}" target="_blank" rel="noopener" aria-label="Order ${escapeHtml(product.name)} on WhatsApp"><span>ORDER</span><span>↗</span></a></div></div></div></article></div>`;
}

function renderProducts() {
  const featured = document.querySelector('#featuredProducts');
  const shop = document.querySelector('#shopProducts');
  if (featured) featured.innerHTML = products.slice(0, 4).map((product, index) => productMarkup(product, index)).join('');
  if (shop) shop.innerHTML = products.map((product, index) => productMarkup(product, index, true)).join('');
}

function setupProductGallery() {
  const triggers = document.querySelectorAll('.product-gallery-trigger');
  if (!triggers.length || !window.bootstrap) return;

  let modalElement = document.querySelector('#productGalleryModal');
  if (!modalElement) {
    document.body.insertAdjacentHTML('beforeend', '<div class="modal fade" id="productGalleryModal" tabindex="-1" aria-labelledby="productGalleryTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content product-gallery-modal"><div class="modal-header"><div><p class="gallery-kicker">PRODUCT PHOTOS</p><h2 class="modal-title" id="productGalleryTitle"></h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close photo gallery"></button></div><div class="modal-body"><img class="gallery-main-image" id="galleryMainImage" src="" alt=""><div class="gallery-thumbnails" id="galleryThumbnails"></div></div></div></div></div>');
    modalElement = document.querySelector('#productGalleryModal');
  }

  const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
  const title = modalElement.querySelector('#productGalleryTitle');
  const mainImage = modalElement.querySelector('#galleryMainImage');
  const thumbnails = modalElement.querySelector('#galleryThumbnails');
  const selectImage = (images, productName, selectedIndex) => {
    mainImage.src = images[selectedIndex];
    mainImage.alt = `${productName} — photo ${selectedIndex + 1}`;
    thumbnails.innerHTML = images.map((image, imageIndex) => `<button class="gallery-thumbnail${imageIndex === selectedIndex ? ' active' : ''}" type="button" data-gallery-image="${imageIndex}" aria-label="View photo ${imageIndex + 1} of ${escapeHtml(productName)}"${imageIndex === selectedIndex ? ' aria-current="true"' : ''}><img src="${image}" alt=""></button>`).join('');
  };

  triggers.forEach(trigger => trigger.addEventListener('click', () => {
    const product = products[Number(trigger.dataset.galleryIndex)];
    if (!product) return;
    const images = product.gallery || [product.image];
    title.textContent = product.name;
    selectImage(images, product.name, 0);
    modal.show();
    thumbnails.onclick = event => {
      const thumbnail = event.target.closest('[data-gallery-image]');
      if (!thumbnail) return;
      selectImage(images, product.name, Number(thumbnail.dataset.galleryImage));
    };
  }));
}

function setupProductDetails() {
  const triggers = document.querySelectorAll('[data-details-index]');
  if (!triggers.length || !window.bootstrap) return;

  let modalElement = document.querySelector('#productDetailsModal');
  if (!modalElement) {
    document.body.insertAdjacentHTML('beforeend', '<div class="modal fade" id="productDetailsModal" tabindex="-1" aria-labelledby="productDetailsTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content product-details-modal"><div class="modal-header"><div><p class="details-kicker">PRODUCT DETAILS</p><h2 class="modal-title" id="productDetailsTitle"></h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close product details"></button></div><div class="modal-body"><div class="details-list" id="productDetailsList"></div></div><div class="modal-footer"><button type="button" class="details-close" data-bs-dismiss="modal">Close</button><a class="market-add" id="productDetailsOrder" href="" target="_blank" rel="noopener"><span>ORDER ON WHATSAPP</span><span>↗</span></a></div></div></div></div>');
    modalElement = document.querySelector('#productDetailsModal');
  }

  const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
  const title = modalElement.querySelector('#productDetailsTitle');
  const list = modalElement.querySelector('#productDetailsList');
  const orderLink = modalElement.querySelector('#productDetailsOrder');
  triggers.forEach(trigger => trigger.addEventListener('click', () => {
    const product = products[Number(trigger.dataset.detailsIndex)];
    if (!product) return;
    const details = product.details || [
      { label: 'Category', value: product.label },
      { label: 'Price', value: product.price },
      { label: 'About this product', value: product.description },
      { label: 'Stock confirmation', value: 'Ask us on WhatsApp to confirm current availability before ordering.' }
    ];
    title.textContent = product.name;
    list.innerHTML = details.map(detail => `<div class="details-item"><h3>${escapeHtml(detail.label)}</h3><p>${escapeHtml(detail.value)}</p></div>`).join('');
    orderLink.href = orderUrlFor(product);
    modal.show();
  }));
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
setupProductGallery();
setupProductDetails();
setupFilters();
setupSiteSearch();
setupForms();
