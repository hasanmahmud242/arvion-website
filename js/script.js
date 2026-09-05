const brandName = 'TUSOROVA';
const whatsappNumber = '8801987510088';
const contactNumber = '8801845552350';
const displayContactNumber = '+880 1845-552350';
const whatsappGreeting = `আসসালামু আলাইকুম ${brandName}! আমি আপনাদের পণ্য সম্পর্কে জানতে চাই।`;
const whatsappUrl = message => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function applyBranding() {
  document.title = document.title.replace(/ARVION/gi, brandName);
  document.querySelectorAll('meta[name="description"]').forEach(meta => {
    meta.content = meta.content.replace(/ARVION/gi, brandName);
  });
  document.querySelectorAll('.navbar-brand').forEach(brand => {
    brand.textContent = brandName;
  });
  document.querySelectorAll('.footer-brand').forEach(brand => {
    brand.innerHTML = '<img src="assets/tusorova-logo-light.png" alt="TUSOROVA" width="200" height="100">';
    brand.setAttribute('aria-label', `${brandName} home`);
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
    link.href = whatsappUrl(whatsappGreeting);
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
  nav.innerHTML = `<div class="container marketplace-header"><div class="marketplace-main"><a class="navbar-brand site-logo-link" href="index.html" aria-label="${brandName} home"><img src="assets/tusorova-logo-light.png" alt="TUSOROVA" width="156" height="64"></a><form class="marketplace-search" role="search"><label class="visually-hidden" for="siteSearch">Search TUSOROVA products</label><input id="siteSearch" type="search" value="${escapeHtml(currentSearch)}" placeholder="Search cookers, kettles, blenders and more" autocomplete="off"><button type="submit" aria-label="Search products">⌕</button></form><div class="marketplace-actions"><a class="account-link" href="contact.html"><span>Need help?</span><b>Support</b></a><a class="marketplace-whatsapp" href="${whatsappUrl(whatsappGreeting)}" target="_blank" rel="noopener" aria-label="Chat with ${brandName} on WhatsApp"><img src="assets/whatsapp-chat.svg" alt=""><b>${brandName}</b></a></div><button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Open navigation"><span class="navbar-toggler-icon"></span></button></div><div class="collapse navbar-collapse" id="mainNav"><div class="marketplace-categories"><a class="category-all" href="products.html">☰ <span>All products</span></a><a href="products.html?category=kitchen">Kitchen essentials</a><a href="products.html?category=home">Home care</a><a href="products.html?category=power">Power & utility</a><a href="products.html?category=personal">Personal care</a><a href="products.html">New arrivals</a><a href="products.html#shopProducts">Deals</a><a href="products.html#orderGuide">Order guide</a><a href="about.html">Our story</a><a href="contact.html">Support</a></div></div></div>`;
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
  miyakoHandMixerBox: 'assets/miyako-hm-6679-c4-box.png',
  kemeiKm6630Main: 'assets/kemei-km-6630-main.png',
  kemeiKm6630Box: 'assets/kemei-km-6630-box.png',
  vgrV318Main: 'assets/vgr-v318-main.png',
  vgrV318Box: 'assets/vgr-v318-box.png',
  miyakoMc400tMain: 'assets/miyako-mc-400t-main.png',
  miyakoMc400tBox: 'assets/miyako-mc-400t-box.png',
  miyakoKettle: 'assets/miyako-mjk-2500bs.jpg',
  vgrV937Main: 'assets/vgr-v937-main.png',
  vgrV937Box: 'assets/vgr-v937-box.png',
  vgrV987Main: 'assets/vgr-v987-main.png',
  vgrV987Box: 'assets/vgr-v987-box.png',
  vintageT9Main: 'assets/vintage-t9-main.png',
  vintageT9Box: 'assets/vintage-t9-box.png',
  htcAt522Main: 'assets/htc-at-522-main.png',
  htcAt522Box: 'assets/htc-at-522-box.png',
  prestigeEb7002Main: 'assets/prestige-eb-7002-main.png',
  bajajToofaanGuarantee: 'assets/bajaj-toofaan-guarantee.png',
  htcAt1210: 'assets/htc-at-1210.jpg',
  miyakoRm250: 'assets/miyako-rm-250.jpg',
  saharaHeCw01Sa: 'assets/sahara-he-cw-01-sa.jpg',
  kemeyKm9837: 'assets/kemey-km-9837.jpg',
  jaipanHotelKing: 'assets/jaipan-hotel-king.jpg',
  miyakoMhd2300s: 'assets/miyako-mhd-2300s.jpg',
  miyakoEi135: 'assets/miyako-ei-135.jpg',
  jaipanKitchenMaster: 'assets/jaipan-kitchen-master.jpg',
  penasonicKitchenFire: 'assets/penasonic-kitchen-fire.jpg',
  taitanAg2015: 'assets/taitan-ag-2015.jpg',
  bajajPlusToofaan: 'assets/bajaj-plus-toofaan.jpg',
  bajajHeavyDuty750w: 'assets/bajaj-heavy-duty-750w.jpg',
  miyakoEi140: 'assets/miyako-ei-140.jpg',
  lgSuperLgMaxDc: 'assets/lg-super-lg-max-dc.jpg',
  panasonicHotelKing1300w: 'assets/panasonic-hotel-king-1300w.jpg',
  saharaHotelKing: 'assets/sahara-hotel-king.jpg',
  taitanAe20: 'assets/taitan-ae-20.jpg',
  jaipanFamilyMate: 'assets/jaipan-family-mate.jpg',
  jaipanSupermax: 'assets/jaipan-supermax.jpg',
  htcAt538: 'assets/htc-at-538.jpg',
  kemeiKm809a: 'assets/kemei-km-809a.jpg'
};

const catalogProducts = [
  { name: 'Hawkins Black Berry Inverter Induction Cooker', brand: 'Hawkins Black Berry', model: 'AGI-883', category: 'kitchen', label: 'Kitchen', price: '৳3,400', tag: 'INVERTER', description: 'Touch controls, LED display, timer, lock, auto shut-off, overheat protection, and up to 85% energy saving.', details: [{ label: 'Model', value: 'AGI-883' }, { label: 'Inverter technology', value: 'Power-saving cooking that can reduce electricity use by up to 85%.' }, { label: 'Controls', value: 'Smart touch sensor controls with a clear digital LED display.' }, { label: 'Cooking features', value: 'Built-in functions, power adjustment, lock function, and preset timer control.' }, { label: 'Glass surface', value: 'High-temperature resistant crystal glass plate with floral artwork.' }, { label: 'Safety', value: 'Built-in overheat protection and automatic shut-off.' }], image: catalogImages.hawkinsInductionDisplay, gallery: [catalogImages.hawkinsInductionDisplay, catalogImages.hawkinsInductionGallery], fit: 'contain' },
  { name: 'Kemei 4-in-1 Professional Grooming Kit', brand: 'Kemei', model: 'KM-6630', category: 'personal', label: 'Personal care', price: '৳850', tag: '4-IN-1', description: 'Rechargeable 4-in-1 kit for nose, beard, hair, and eyebrow trimming.', details: [{ label: 'Model', value: 'KM-6630' }, { label: 'Nose and ear trimmer', value: 'Safe, fast trimming for unwanted nose and ear hair.' }, { label: 'Beard trimmer head', value: 'For precision edges and daily beard or mustache maintenance.' }, { label: 'Hair trimmer attachment', value: 'For close hair trimming and quick touch-ups.' }, { label: 'Eyebrow trimmer head', value: 'For gentle, accurate eyebrow shaping.' }, { label: 'Power and build', value: 'Rechargeable with an included charging cable; compact stainless-and-black easy-grip body.' }, { label: 'Blades', value: 'Durable washable stainless steel cutter heads for smooth trimming without pulling.' }], image: catalogImages.kemeiKm6630Main, gallery: [catalogImages.kemeiKm6630Main, catalogImages.kemeiKm6630Box], fit: 'contain' },
  { name: 'VGR Professional Hair Clipper', brand: 'VGR', model: 'V-318 (Super Trim)', category: 'personal', label: 'Personal care', price: '৳1,550', tag: '2000 MAH', description: 'Professional corded or cordless hair clipper with LED display and taper lever.', details: [{ label: 'Model', value: 'V-318 (Super Trim)' }, { label: 'Battery', value: 'Long-lasting 2000 mAh rechargeable lithium battery.' }, { label: 'Operation', value: 'Use cordlessly or plug in while charging.' }, { label: 'Taper lever', value: 'Side adjustment lever for smooth blending and precise fade adjustments.' }, { label: 'Blades', value: 'Precision-ground professional stainless steel blades for smooth, snag-free cutting.' }, { label: 'Display', value: 'Digital LED front display shows the remaining battery percentage.' }, { label: 'Storage', value: 'Integrated hanging loop for convenient hook storage.' }], image: catalogImages.vgrV318Main, gallery: [catalogImages.vgrV318Main, catalogImages.vgrV318Box], fit: 'contain' },
  { name: 'Miyako Cordless Electric Kettle', brand: 'Miyako', model: 'MJK-2500 BS', category: 'kitchen', label: 'Kitchen', price: '৳1,350', tag: '2.5 LITERS', description: '2.5 L cool-touch cordless kettle with a food-grade stainless steel inner pot.', details: [{ label: 'Model', value: 'MJK-2500 BS' }, { label: 'Capacity', value: '2.5 Liters' }, { label: 'Power rating', value: '1500 W–2000 W.' }, { label: 'Cool-touch body', value: 'Double-wall insulation helps keep the outer body safe to touch.' }, { label: 'Inner pot', value: '304 food-grade stainless steel for safe, odor-free water boiling.' }, { label: 'Cordless base', value: '360° swivel base for easy lifting and placement from any angle.' }, { label: 'Safety', value: 'Automatic shut-off and boil-dry protection.' }, { label: 'Lid', value: 'One-touch lid opening for simple refilling and cleaning.' }], image: catalogImages.miyakoKettle, gallery: [catalogImages.miyakoKettle], fit: 'contain' },
  { name: 'Miyako Multi 2 Pot Cooker (Rice & Curry)', brand: 'Miyako', model: 'MC-400 T (DOUBLE)', category: 'kitchen', label: 'Kitchen', price: '৳3,750', tag: '3.5 LITERS', description: '3.5 L double-pot cooker for rice, curry, hotpot, boiling, and frying.', details: [{ label: 'Model', value: 'MC-400 T (DOUBLE)' }, { label: 'Capacity', value: '3.5 Liters' }, { label: 'Power rating', value: '1300 Watts for fast heating.' }, { label: 'Double pot system', value: 'Two separate inner pots for different dishes and easier cleaning.' }, { label: 'Inner coating', value: 'Ceramic marble non-stick surface with scratch resistance.' }, { label: 'Cooking uses', value: 'Suitable for hotpot, boiling, frying, rice, and curry.' }, { label: 'Safety and build', value: 'Tempered metal body, metal thermofuse protection, and tempered glass lid with steam vent.' }], image: catalogImages.miyakoMc400tMain, gallery: [catalogImages.miyakoMc400tMain, catalogImages.miyakoMc400tBox], fit: 'contain' },
  { name: 'VGR Professional Hair Trimmer V-937', brand: 'VGR (Voyager Series)', model: 'V-937', category: 'personal', label: 'Personal care', price: '৳1,150', tag: '500 MIN', description: 'Professional T-blade trimmer with 2000 mAh battery, Type-C charging, and LED display.', details: [{ label: 'Model', value: 'V-937' }, { label: 'Battery', value: '2000 mAh lithium battery with up to 500 minutes of continuous runtime.' }, { label: 'Operation', value: 'Corded or cordless use, including operation while charging.' }, { label: 'Charging', value: 'USB Type-C charging for convenient power-ups.' }, { label: 'Display', value: 'Smart digital LED display with battery percentage and status.' }, { label: 'Blades', value: 'Precision-ground stainless steel T-blades for crisp lines, zero-gapping, and smooth trimming.' }, { label: 'Design', value: 'Modern matte-black ergonomic body for accurate control.' }], image: catalogImages.vgrV937Main, gallery: [catalogImages.vgrV937Main, catalogImages.vgrV937Box], fit: 'contain' },
  { name: 'VGR Professional Hair Trimmer V-987', brand: 'VGR (Voyager Series)', model: 'V-987', category: 'personal', label: 'Personal care', price: '৳1,200', tag: '7000 RPM', description: 'Turbo hair trimmer with 2000 mAh battery, Type-C charging, and digital dashboard.', details: [{ label: 'Model', value: 'V-987' }, { label: 'Battery', value: '2000 mAh lithium battery with up to 400 minutes of continuous runtime.' }, { label: 'Turbo mode', value: '7000 RPM mode adds extra power for dense hair.' }, { label: 'Display', value: 'Digital LED dashboard shows exact battery percentage and status.' }, { label: 'Operation', value: 'Corded or cordless use with USB Type-C charging.' }, { label: 'Blades', value: 'Precision stainless steel T-blade for zero-gap detailing and sharp line-ups.' }, { label: 'Design', value: 'Dark metallic textured grip with built-in travel lock.' }], image: catalogImages.vgrV987Main, gallery: [catalogImages.vgrV987Main, catalogImages.vgrV987Box], fit: 'contain' },
  { name: 'Vintage T9 Hair & Beard Trimmer', brand: 'Vintage', model: 'Vintage T9', category: 'personal', label: 'Personal care', price: '৳350', tag: 'METAL BODY', description: 'Compact engraved metal T-blade trimmer for precise hair and beard detailing.', details: [{ label: 'Model', value: 'Vintage T9' }, { label: 'Body', value: 'Full metal bronze-finished body with a detailed carved dragon design.' }, { label: 'Blades', value: 'Exposed zero-gap stainless steel hanging T-blade for detailing, line-ups, and hair carving.' }, { label: 'Battery', value: 'Rechargeable lithium-ion battery with up to 120 minutes of runtime.' }, { label: 'Safety', value: 'R-shaped blade edge helps reduce skin irritation and accidental cuts.' }, { label: 'Design', value: 'Slim portable cylindrical handle with a bottom power switch.' }], image: catalogImages.vintageT9Main, gallery: [catalogImages.vintageT9Main, catalogImages.vintageT9Box], fit: 'contain' },
  { name: 'HTC Rechargeable Hair & Beard Trimmer', brand: 'HTC', model: 'AT-522', category: 'personal', label: 'Personal care', price: '৳500', tag: 'LOW NOISE', description: 'Rechargeable trimmer with adjustable cutting length and a lightweight ergonomic body.', details: [{ label: 'Model', value: 'AT-522' }, { label: 'Battery', value: 'Cordless rechargeable design with about 45–60 minutes of continuous grooming.' }, { label: 'Cutting length', value: 'Slide-up guide comb allows quick length adjustments without swapping attachment combs.' }, { label: 'Blades', value: 'High-grade stainless steel cutter head for snag-free trimming and detailing.' }, { label: 'Design', value: 'Lightweight curved body with a textured blue power switch.' }, { label: 'Operation', value: 'Low-noise motor helps reduce vibration and operating noise.' }], image: catalogImages.htcAt522Main, gallery: [catalogImages.htcAt522Main, catalogImages.htcAt522Box], fit: 'contain' },
  { name: 'Prestige Electric Hand Mixer', brand: 'Prestige', model: 'EB-7002', category: 'kitchen', label: 'Kitchen', price: '৳1,200', tag: '800 W', description: 'Powerful 800 W hand mixer with 5 speed settings for whipping, beating, and mixing.', details: [{ label: 'Model', value: 'EB-7002' }, { label: 'Power rating', value: '800 W powerful motor.' }, { label: 'Speed settings', value: 'Five speed settings for flexible blending, whipping, and mixing.' }, { label: 'Ergonomic design', value: 'Lightweight comfortable-grip body for easy control during longer baking sessions.' }, { label: 'Finish', value: 'Modern brushed stainless steel housing with black accent trims.' }, { label: 'Uses', value: 'Suitable for whipping cream, beating eggs, mixing batter, and light dough preparation.' }], image: catalogImages.prestigeEb7002Main, gallery: [catalogImages.prestigeEb7002Main], fit: 'contain' },
  { name: 'Bajaj Toofaan Mixer Grinder', brand: 'Bajaj', model: 'Toofaan', category: 'kitchen', label: 'Kitchen', price: '৳3,800', tag: '2 YEARS', description: 'Heavy-duty 1600 W mixer grinder with four stainless steel jars and a two-year guarantee.', details: [{ label: 'Model', value: 'Toofaan' }, { label: 'Guarantee', value: '2 years guarantee.' }, { label: 'Power rating', value: '1600 W heavy-duty motor for grinding, blending, and spice preparation.' }, { label: 'Jars included', value: 'Four stainless steel jars: wet grinding, dry grinding, liquidizing, and small chutney jars with transparent dome lids.' }, { label: 'Speed control', value: 'Front rotary control knob with multiple speed levels and pulse setting.' }, { label: 'Build', value: 'Modern red-and-black dual-tone housing with sturdy non-slip rubber feet.' }], image: catalogImages.bajajToofaanGuarantee, gallery: [catalogImages.bajajToofaanGuarantee], fit: 'contain' },
  { name: 'HTC Rechargeable Hair Trimmer AT-1210', brand: 'HTC', model: 'AT-1210', category: 'personal', label: 'Personal care', price: '৳500', tag: 'T-BLADE', description: 'Compact blue-and-silver cordless hair trimmer for accurate home and travel grooming.', details: [{ label: 'Precision cutting', value: 'Sharp fine-tooth T-blade for clean edges, detailing, and accurate trimming.' }, { label: 'Grip', value: 'Textured non-slip front surface supports easy control while styling.' }, { label: 'Power', value: 'Rechargeable cordless operation with a built-in long-life battery.' }, { label: 'Design', value: 'Sleek compact blue-and-silver casing for home or travel use.' }], image: catalogImages.htcAt1210, gallery: [catalogImages.htcAt1210], fit: 'contain' },
  { name: 'Miyako Chapati, Tortilla & Roti Maker', brand: 'Miyako', model: 'RM-250', category: 'kitchen', label: 'Kitchen', price: '৳2,900', tag: '1200W', description: '1200 W roti maker with a large 10-inch non-stick plate for chapati and tortilla making.', details: [{ label: 'Plate size', value: '10-inch large cooking plate for standard and oversized rotis, tortillas, and chapatis.' }, { label: 'Power', value: '1200 W heating element for fast heating and quick cooking.' }, { label: 'Surface', value: 'Non-stick cooking plates help dough release easily and simplify cleaning.' }, { label: 'Controls', value: 'Automatic thermostat control with neon power and heat readiness indicators.' }, { label: 'Build', value: 'Stainless steel top cover with heat-resistant Bakelite handles.' }], image: catalogImages.miyakoRm250, gallery: [catalogImages.miyakoRm250], fit: 'contain' },
  { name: 'SAHARA Super Hand Mixer', brand: 'SAHARA (Omega Gold)', model: 'HE-CW-01-SA', category: 'kitchen', label: 'Kitchen', price: '৳650', tag: '7 SPEEDS', description: '500 W hand mixer with seven speeds, inverter power saving, and beaters plus dough hooks.', details: [{ label: 'Power', value: '500 W maximum power with inverter power-saving technology.' }, { label: 'Speed settings', value: 'Seven precision speeds for whipping, folding, blending, creaming, and mixing.' }, { label: 'Attachments', value: 'Two stainless steel beaters and two dough hooks for light and thicker mixtures.' }, { label: 'Design', value: 'Compact lightweight white casing with grey accents, easy-grip handle, and top speed switch.' }], image: catalogImages.saharaHeCw01Sa, gallery: [catalogImages.saharaHeCw01Sa], fit: 'contain' },
  { name: 'KEMEY Negative Ions Hair Dryer', brand: 'KEMEY (Kemei)', model: 'KM-9837', category: 'personal', label: 'Personal care', price: '৳850', tag: '900W', description: 'Turquoise 900 W hair dryer with negative ion technology and smart temperature control.', details: [{ label: 'Technology', value: 'Negative ions help reduce frizz and leave hair smoother and glossier.' }, { label: 'Temperature control', value: 'Smart temperature control helps limit heat damage during drying.' }, { label: 'Motor', value: '900 W AC motor provides fast airflow for home styling.' }, { label: 'Controls', value: 'Multiple heat and speed settings on the handle.' }, { label: 'Design', value: 'Compact turquoise body with an ergonomic grip and hanging loop.' }], image: catalogImages.kemeyKm9837, gallery: [catalogImages.kemeyKm9837], fit: 'contain' },
  { name: 'Jaipan Hotel King Mixer Grinder', brand: 'Jaipan (TAITAN Series)', model: 'Hotel King', category: 'kitchen', label: 'Kitchen', price: '৳3,250', tag: '1 YEAR', description: 'Heavy-duty copper-motor mixer grinder with stainless steel jars and a one-year motor warranty.', details: [{ label: 'Motor', value: 'Copper motor built for long-lasting heavy-duty grinding.' }, { label: 'Jar set', value: 'Stainless steel jars with clear dome lids for wet grinding, dry grinding, liquidizing, and chutney making.' }, { label: 'Controls', value: 'Front rotary dial with multiple speed selections and pulse function.' }, { label: 'Build', value: 'White ABS body with teal accents and anti-skid rubber feet.' }, { label: 'Warranty', value: '1-year motor warranty.' }], image: catalogImages.jaipanHotelKing, gallery: [catalogImages.jaipanHotelKing], fit: 'contain' },
  { name: 'Miyako Professional Hair Dryer', brand: 'Miyako', model: 'MHD-2300S', category: 'personal', label: 'Personal care', price: '৳1,950', tag: 'AC MOTOR', description: 'Professional hair dryer with turbo wind, styling nozzle, and safety cut-off protection.', details: [{ label: 'Airflow', value: 'Super turbo wind for fast drying and precision blowouts.' }, { label: 'Motor', value: 'Long-life AC motor for reliable performance.' }, { label: 'Nozzle', value: 'Includes a detachable concentrator nozzle for targeted styling.' }, { label: 'Safety', value: 'Overheat protection and automatic safety cut-off.' }, { label: 'Design', value: 'Low-noise housing with dual rocker switches and a black ergonomic handle.' }], image: catalogImages.miyakoMhd2300s, gallery: [catalogImages.miyakoMhd2300s], fit: 'contain' },
  { name: 'Miyako Automatic Dry Iron EI-135', brand: 'Miyako', model: 'EI-135', category: 'home', label: 'Home care', price: '৳1,500', tag: '1000W', description: '1000 W automatic dry iron with a non-stick soleplate and easy fabric temperature control.', details: [{ label: 'Power', value: '1000 W / 220 V.' }, { label: 'Temperature setting', value: 'Under-handle dial for silk, wool, cotton, and linen fabric care.' }, { label: 'Indicator', value: 'Heating lamp turns off when the selected temperature is reached.' }, { label: 'Soleplate', value: 'Non-stick plate glides smoothly and helps prevent fabric sticking.' }, { label: 'Design', value: 'Lightweight white body with lavender accents and a braided swivel-guard cord.' }], image: catalogImages.miyakoEi135, gallery: [catalogImages.miyakoEi135], fit: 'contain' },
  { name: 'Jaipan Kitchen Master Mixer Grinder', brand: 'Jaipan', model: 'Kitchen Master', category: 'kitchen', label: 'Kitchen', price: '৳3,300', tag: '24 MONTHS', description: '1200 W copper-motor mixer grinder with three jars and a 24-month motor warranty.', details: [{ label: 'Motor', value: '1200 W high-speed, energy-efficient copper motor.' }, { label: 'Jar set', value: 'Three stainless steel jars for wet grinding, dry grinding, and chutney preparation.' }, { label: 'Lids', value: 'Unbreakable polycarbonate lids with secure sealing rings.' }, { label: 'Controls', value: 'Green rotary dial with multi-speed settings and pulse mode.' }, { label: 'Warranty', value: '24 months official motor warranty.' }], image: catalogImages.jaipanKitchenMaster, gallery: [catalogImages.jaipanKitchenMaster], fit: 'contain' },
  { name: 'Penasonic Kitchen Fire Mixer Grinder & Juicer', brand: 'Penasonic (Plus)', model: 'Kitchen Fire', category: 'kitchen', label: 'Kitchen', price: '৳3,450', tag: '2 YEARS', description: '1300 W mixer grinder and juicer with three stainless steel jars and a two-year warranty.', details: [{ label: 'Motor', value: '1300 W heavy-duty copper motor for blending, grinding, and juicing.' }, { label: 'Jar set', value: 'Three stainless steel jars for liquidizing, dry grinding, and chutney making.' }, { label: 'Controls', value: 'Red front speed knob with multiple speed options and pulse function.' }, { label: 'Build', value: 'Red-and-black dual-tone body with anti-skid feet.' }, { label: 'Warranty', value: '2-year warranty.' }], image: catalogImages.penasonicKitchenFire, gallery: [catalogImages.penasonicKitchenFire], fit: 'contain' },
  { name: 'TAITAN Double Layer Electric Kettle', brand: 'TAITAN (Prestige)', model: 'AG-2015', category: 'kitchen', label: 'Kitchen', price: '৳1,250', tag: '3.0 L', description: 'Large 3.0 L double-layer kettle with 1500 W fast boiling and auto shut-off protection.', details: [{ label: 'Capacity', value: '3.0 liter capacity for family, office, or tea-stall use.' }, { label: 'Power', value: '1500 W fast-boiling heating base.' }, { label: 'Safe-touch body', value: 'Double-layer insulation helps keep the outer plastic body cooler to touch.' }, { label: 'Safety', value: 'Locking lid, automatic shut-off, and boil-dry protection.' }, { label: 'Base', value: 'Dark blue and black body with an indicator light and 360° swivel base.' }], image: catalogImages.taitanAg2015, gallery: [catalogImages.taitanAg2015], fit: 'contain' },
  { name: 'BAJAJ+ Toofaan 3-in-1 Mixer Grinder', brand: 'BAJAJ+ (Inspiring Trust)', model: 'TOOFAAN', category: 'kitchen', label: 'Kitchen', price: '৳3,400', tag: '2 YEARS', description: '1200 W copper-motor 3-in-1 mixer grinder with three jars and two-year motor warranty.', details: [{ label: 'Motor', value: '1200 W high-torque 100% copper motor.' }, { label: 'Jar set', value: 'Three stainless steel jars for liquidizing, dry grinding, and chutney preparation.' }, { label: 'Uses', value: 'For spices, batter, sauces, juices, wet grinding, and dry grinding.' }, { label: 'Controls', value: 'Red rotary speed switch with multiple settings and pulse control.' }, { label: 'Warranty', value: '2-year motor warranty.' }], image: catalogImages.bajajPlusToofaan, gallery: [catalogImages.bajajPlusToofaan], fit: 'contain' },
  { name: 'BAJAJ Heavy Duty Mixer Grinder', brand: 'BAJAJ (Inspiring Trust)', category: 'kitchen', label: 'Kitchen', price: '৳2,600', tag: '2 YEARS', description: '750 W copper-motor mixer grinder with lockable jars, free grate attachment, and two-year warranty.', details: [{ label: 'Motor', value: '750 W high-efficiency copper motor for continuous grinding.' }, { label: 'Jar set', value: 'Three stainless steel airtight lockable jars with dome lids.' }, { label: 'Attachment', value: 'Includes a free grate and shred blade attachment.' }, { label: 'Blades', value: 'Rust-resistant stainless steel blades for fine grinding and blending.' }, { label: 'Warranty', value: '2-year motor warranty.' }], image: catalogImages.bajajHeavyDuty750w, gallery: [catalogImages.bajajHeavyDuty750w], fit: 'contain' },
  { name: 'Miyako Automatic Dry Iron EI-140', brand: 'Miyako', model: 'EI-140', category: 'home', label: 'Home care', price: '৳1,550', tag: '1000W', description: '1000 W black automatic dry iron with anti-dirt body coating and adjustable thermostat.', details: [{ label: 'Power', value: '1000 W / 220–240 V.' }, { label: 'Body', value: 'Anti-dirt outer coating helps resist dust, smudges, and dirt buildup.' }, { label: 'Temperature control', value: 'Adjustable thermostat beneath the handle for different fabrics.' }, { label: 'Indicator', value: 'Heating pilot lamp signals when the iron reaches the desired temperature.' }, { label: 'Design', value: 'Matte black ergonomic body with a reinforced swivel cord guard.' }], image: catalogImages.miyakoEi140, gallery: [catalogImages.miyakoEi140], fit: 'contain' },
  { name: 'LG super Digital Commercial Scale', brand: 'LG super', model: 'LG-MAX-DC', category: 'home', label: 'Home & shop', price: '৳1,550', tag: '1G PRECISION', description: 'Commercial digital scale with 1 g precision, triple LED display, and rechargeable power.', details: [{ label: 'Precision', value: '1 g division for accurate retail and commercial weighing.' }, { label: 'Display', value: 'Triple red LED readouts show weight, unit price, and total price.' }, { label: 'Platform', value: 'Heavy-duty stainless steel weighing tray and big-capacity load cell.' }, { label: 'Controls', value: 'Numeric keypad with M1–M3 memory, store, zero, and clear buttons.' }, { label: 'Power', value: 'Rechargeable battery support and DC input for operation during power cuts.' }], image: catalogImages.lgSuperLgMaxDc, gallery: [catalogImages.lgSuperLgMaxDc], fit: 'contain' },
  { name: 'Panasonic Hotel King Mixer Grinder', brand: 'Panasonic', model: 'Hotel King', category: 'kitchen', label: 'Kitchen', price: '৳2,600', tag: '1 YEAR', description: '1300 W copper-motor mixer grinder with three sealed jars and a one-year warranty.', details: [{ label: 'Motor', value: '1300 W high-torque motor with 100% copper winding.' }, { label: 'Jar capacities', value: '1.5 L wet jar, 1.0 L dry jar, and 0.4 L chutney jar.' }, { label: 'Lids', value: 'Airtight dual-sealing transparent dome lids help prevent spills.' }, { label: 'Blades', value: 'High-grade surgical stainless steel blades for chopping, blending, and grinding.' }, { label: 'Warranty', value: '1-year product warranty.' }], image: catalogImages.panasonicHotelKing1300w, gallery: [catalogImages.panasonicHotelKing1300w], fit: 'contain' },
  { name: 'SAHARA Hotel King Mixer Grinder', brand: 'SAHARA (TAITAN Series)', model: 'Hotel King', category: 'kitchen', label: 'Kitchen', price: '৳3,250', tag: '1 YEAR', description: 'Heavy-duty copper-motor Hotel King mixer grinder with stainless steel jars and one-year warranty.', details: [{ label: 'Motor', value: '1650 W approximate 100% copper motor for continuous heavy-duty grinding.' }, { label: 'Jar set', value: 'Stainless steel jars with transparent dome lids for wet grinding, dry blending, and chutney making.' }, { label: 'Controls', value: 'Red rotary dial with multi-speed selections and pulse control.' }, { label: 'Build', value: 'Classic red and black dual-tone base with anti-skid feet.' }, { label: 'Warranty', value: '1-year motor warranty.' }], image: catalogImages.saharaHotelKing, gallery: [catalogImages.saharaHotelKing], fit: 'contain' },
  { name: 'TAITAN Electric Kettle', brand: 'TAITAN (Prestige)', model: 'AE-20', category: 'kitchen', label: 'Kitchen', price: '৳600', tag: '2.0 L', description: '2.0 L stainless steel kettle with fast boiling, 360° base, and one-year warranty.', details: [{ label: 'Capacity', value: '2.0 liter large capacity.' }, { label: 'Heating', value: 'Fast-boiling concealed element for quick water heating and easier cleaning.' }, { label: 'Safety', value: 'Dual metal thermostat protection with dry-boil protection and safety lock lid.' }, { label: 'Base', value: 'Cordless 360° swivel base for easy handling and placement.' }, { label: 'Warranty', value: '1-year product warranty.' }], image: catalogImages.taitanAe20, gallery: [catalogImages.taitanAe20], fit: 'contain' },
  { name: 'Jaipan Family Mate Mixer Grinder', brand: 'Jaipan', model: 'Family Mate', category: 'kitchen', label: 'Kitchen', price: '৳2,800', tag: '2 YEARS', description: '1000 W copper-motor mixer grinder with stainless steel jars and two-year motor warranty.', details: [{ label: 'Motor', value: '1000 W 100% copper motor with computerised balanced motor technology.' }, { label: 'Build', value: 'Stylish white ABS body with light green base accents and anti-skid feet.' }, { label: 'Jar set', value: 'Stainless steel jars for wet blending, dry grinding, and chutney making.' }, { label: 'Controls', value: 'Green rotary knob with three speed controls and pulse function.' }, { label: 'Warranty', value: '2-year motor warranty.' }], image: catalogImages.jaipanFamilyMate, gallery: [catalogImages.jaipanFamilyMate], fit: 'contain' },
  { name: 'Jaipan SUPERMAX Mixer Grinder', brand: 'Jaipan', model: 'SUPERMAX', category: 'kitchen', label: 'Kitchen', price: '৳3,800', tag: '1650W', description: '1650 W copper-motor mixer grinder with grinding jars, a juicer jar, and one-year warranty.', details: [{ label: 'Motor', value: '1650 W 100% copper motor for heavy-duty grinding, blending, and juicing.' }, { label: 'Jar configuration', value: 'Stainless steel grinding jars plus dedicated juicer jar with internal fruit filter.' }, { label: 'Blades', value: 'High-grade stainless steel blades for fine grinding and smooth blending.' }, { label: 'Build', value: 'Yellow-and-black ABS housing with rotary speed control and anti-skid feet.' }, { label: 'Warranty', value: '1-year product warranty.' }], image: catalogImages.jaipanSupermax, gallery: [catalogImages.jaipanSupermax], fit: 'contain' },
  { name: 'HTC Rechargeable Hair Trimmer AT-538', brand: 'HTC', model: 'AT-538', category: 'personal', label: 'Personal care', price: '৳500', tag: 'LCD', description: 'Rechargeable trimmer with precision T-blade, LCD battery display, dock, and four guide combs.', details: [{ label: 'Blade', value: 'Professional precision-cut T-blade for edging, lining, and accurate hair trimming.' }, { label: 'Battery', value: '900 mAh rechargeable battery for cordless grooming.' }, { label: 'Display', value: 'Integrated LCD screen shows battery status and operation cues.' }, { label: 'Accessories', value: 'Four 3–12 mm guide combs, charging cable, cleaning brush, and charging stand.' }, { label: 'Design', value: 'Silver-and-black ergonomic casing with textured anti-slip rear grip.' }], image: catalogImages.htcAt538, gallery: [catalogImages.htcAt538], fit: 'contain' },
  { name: 'Kemei Professional Hair Clipper & Trimmer', brand: 'Kemei', model: 'KM-809A', category: 'personal', label: 'Personal care', price: '৳1,150', tag: '200 MIN', description: 'Rechargeable professional clipper with taper lever, LED display, and up to 200 minutes runtime.', details: [{ label: 'Taper lever', value: 'Side lever supports smooth blade length adjustment for blending and fades.' }, { label: 'Display', value: 'Digital LED display shows remaining battery power and charge status.' }, { label: 'Runtime', value: 'Up to 200 minutes of cordless operation after a 4-hour charge.' }, { label: 'Motor', value: 'Constant cutting force helps cut thick hair smoothly without pulling.' }, { label: 'Accessories', value: 'Guide combs, charging cable, and blade guard included.' }], image: catalogImages.kemeiKm809a, gallery: [catalogImages.kemeiKm809a], fit: 'contain' },
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
  'Kemei 4-in-1 Professional Grooming Kit',
  'VGR Professional Hair Clipper',
  'Miyako Cordless Electric Kettle',
  'Miyako Multi 2 Pot Cooker (Rice & Curry)',
  'VGR Professional Hair Trimmer V-937',
  'VGR Professional Hair Trimmer V-987',
  'Vintage T9 Hair & Beard Trimmer',
  'HTC Rechargeable Hair & Beard Trimmer',
  'Prestige Electric Hand Mixer',
  'Bajaj Toofaan Mixer Grinder',
  'HTC Rechargeable Hair Trimmer AT-1210',
  'Miyako Chapati, Tortilla & Roti Maker',
  'SAHARA Super Hand Mixer',
  'KEMEY Negative Ions Hair Dryer',
  'Jaipan Hotel King Mixer Grinder',
  'Miyako Professional Hair Dryer',
  'Miyako Automatic Dry Iron EI-135',
  'Jaipan Kitchen Master Mixer Grinder',
  'Penasonic Kitchen Fire Mixer Grinder & Juicer',
  'TAITAN Double Layer Electric Kettle',
  'BAJAJ+ Toofaan 3-in-1 Mixer Grinder',
  'BAJAJ Heavy Duty Mixer Grinder',
  'Miyako Automatic Dry Iron EI-140',
  'LG super Digital Commercial Scale',
  'Panasonic Hotel King Mixer Grinder',
  'SAHARA Hotel King Mixer Grinder',
  'TAITAN Electric Kettle',
  'Jaipan Family Mate Mixer Grinder',
  'Jaipan SUPERMAX Mixer Grinder',
  'HTC Rechargeable Hair Trimmer AT-538',
  'Kemei Professional Hair Clipper & Trimmer',
  'Miyako Multi Cooker (Rice & Curry)',
  'Panasonic Pro 3 in 1 Mixer Grinder',
  'Novena Inverter Air Fryer',
  'Miyako Hand Mixer / Egg Beater'
]);
const products = catalogProducts.filter(product => approvedProductNames.has(product.name));

function orderUrlFor(product) {
  const message = `আসসালামু আলাইকুম ${brandName}!\n\nআমি এই পণ্যটি অর্ডার করতে চাই:\n\nপণ্যের নাম: ${product.name}\nদাম: ${product.price}\nপরিমাণ: ১টি\n\nদয়া করে পণ্যের স্টক, ডেলিভারি চার্জ এবং পেমেন্টের তথ্য জানাবেন।`;
  return whatsappUrl(message);
}

const productUrlFor = index => `product.html?product=${index}`;

function productMarkup(product, index, compactListing = false) {
  const orderUrl = orderUrlFor(product);
  const productUrl = productUrlFor(index);
  const columnClass = compactListing ? 'col-6 col-md-4 col-lg-3 col-xxl-2' : 'col-6 col-md-4 col-xl-3';
  return `<div class="${columnClass} product-column" data-category="${product.category}" data-search="${product.name.toLowerCase()} ${product.label.toLowerCase()} ${product.tag.toLowerCase()} ${product.description.toLowerCase()}"><article class="product-card"><a class="product-image-wrap product-card-link" href="${productUrl}" aria-label="View ${escapeHtml(product.name)} details"><img class="product-image" src="${product.image}" alt="${escapeHtml(product.name)}"></a><div class="product-info"><h3 class="product-title"><a class="product-title-link" href="${productUrl}">${escapeHtml(product.name)}</a></h3><div class="product-bottom"><span class="product-price">${product.price}</span><a class="market-add" href="${orderUrl}" target="_blank" rel="noopener" aria-label="Order ${escapeHtml(product.name)} on WhatsApp"><span>ORDER</span><span>↗</span></a></div></div></article></div>`;
}

function renderProducts() {
  const featured = document.querySelector('#featuredProducts');
  const shop = document.querySelector('#shopProducts');
  if (featured) featured.innerHTML = products.slice(0, 4).map((product, index) => productMarkup(product, index)).join('');
  if (shop) shop.innerHTML = products.map((product, index) => productMarkup(product, index, true)).join('');
}

function productDetailsMarkup(product) {
  const overview = [
    product.brand && { label: 'Brand', value: product.brand },
    product.model && { label: 'Model', value: product.model },
    product.description && { label: 'Description', value: product.description }
  ].filter(Boolean);
  const specifications = product.details || [
    { label: 'Category', value: product.label },
    { label: 'Price', value: product.price },
    { label: 'About this product', value: product.description }
  ];
  const details = [...overview, ...specifications.filter(detail => !['brand', 'model', 'description', 'about this product'].includes(detail.label.toLowerCase()))];
  return details.map(detail => `<div class="details-item"><h3>${escapeHtml(detail.label)}</h3><p>${escapeHtml(detail.value)}</p></div>`).join('');
}

function renderProductPage() {
  const container = document.querySelector('#productDetail');
  if (!container) return;

  const requestedIndex = new URLSearchParams(window.location.search).get('product');
  const index = requestedIndex === null ? Number.NaN : Number(requestedIndex);
  const product = Number.isInteger(index) && index >= 0 ? products[index] : null;
  if (!product) {
    container.innerHTML = '<div class="product-page-empty"><h1>Product not found</h1><p>Please return to the shop and choose a product.</p><a class="market-add" href="products.html"><span>BACK TO SHOP</span><span>→</span></a></div>';
    return;
  }

  const images = [...new Set(product.gallery && product.gallery.length ? product.gallery : [product.image])];
  document.title = `${product.name} | ${brandName}`;
  container.innerHTML = `<div class="container"><nav class="product-breadcrumb" aria-label="Breadcrumb"><a href="products.html">Shop</a><span>›</span><a href="products.html?category=${product.category}">${escapeHtml(product.label)}</a><span>›</span><span aria-current="page">${escapeHtml(product.name)}</span></nav><div class="row g-4 g-lg-5"><div class="col-lg-6"><section class="product-detail-gallery"><div class="product-detail-main-image"><img id="productDetailMainImage" src="${images[0]}" alt="${escapeHtml(product.name)}"></div>${images.length > 1 ? `<div class="product-detail-thumbnails" aria-label="More photos of ${escapeHtml(product.name)}">${images.map((image, imageIndex) => `<button class="product-detail-thumbnail${imageIndex === 0 ? ' active' : ''}" type="button" data-product-image="${imageIndex}" aria-label="Show photo ${imageIndex + 1}"${imageIndex === 0 ? ' aria-current="true"' : ''}><img src="${image}" alt=""></button>`).join('')}</div>` : ''}</section></div><div class="col-lg-6"><section class="product-detail-summary"><p class="product-detail-brand">${escapeHtml(product.brand || product.label)}</p><h1>${escapeHtml(product.name)}</h1>${product.model ? `<p class="product-detail-model">Model: ${escapeHtml(product.model)}</p>` : ''}<p class="product-detail-description">${escapeHtml(product.description)}</p><p class="product-detail-price">${product.price}</p><a class="product-detail-order" href="${orderUrlFor(product)}" target="_blank" rel="noopener"><span>ORDER ON WHATSAPP</span><span>↗</span></a><p class="product-detail-help">We will confirm stock, delivery charge, and payment details on WhatsApp.</p></section></div></div><section class="product-specifications"><h2>Product details</h2><div class="details-list">${productDetailsMarkup(product)}</div></section></div>`;

  const mainImage = container.querySelector('#productDetailMainImage');
  container.querySelectorAll('[data-product-image]').forEach(button => button.addEventListener('click', () => {
    const imageIndex = Number(button.dataset.productImage);
    mainImage.src = images[imageIndex];
    mainImage.alt = `${product.name} — photo ${imageIndex + 1}`;
    container.querySelectorAll('[data-product-image]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.toggleAttribute('aria-current', active);
    });
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
renderProductPage();
setupFilters();
setupSiteSearch();
setupForms();
