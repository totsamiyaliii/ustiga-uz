const products = [
    { id: 1, name: 'Naqshli Futbolka', price: 139000, img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTG6xmtrK8OuLk36ej2LwTBYjSypKMvXBwc-fTW6QtqD2YFfmsR' },
    { id: 2, name: 'Porche Futbolka', price: 129000, img: 'https://img.thecdn.in/297879/SKU-0488_0-1724491086528.jpg?width=600&format=webp' },
    { id: 3, name: 'Merasdes benz g-clas Futbolka', price: 129000, img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1649/prod/QC/20250313/17/6e874f6a-835c-3632-b5cc-7253583cf32c/1_org_zoom.jpg' },
    { id: 4, name: 'Xudi', price: 199000, img: 'https://a-static.mlcdn.com.br/800x560/casaco-moletom-dollar-cash-dolar-money-blusa-frio-rap-trap-mago-das-camisas/magodascamisas3/15903496838/41c79946f6d4ba16fb168e0b742324b0.jpeg' },
    { id: 5, name: 'Futbloka arab yozuvi bilan', price: 149000, img: 'https://cdn1.ozone.ru/s3/multimedia-c/c600/6463686420.jpg' },
    { id: 6, name: 'need money for bmw futbolka', price: 139000, img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTvih7AmyUyUpwQM5FvZ8h74CQ-vH8jBBUfykvHS28p9oNZUS3' },
    { id: 7, name: 'need money for ferari futbolka', price: 139000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xoq2gbBfmvT519O6tN6WzSEOvhiBicQbHsyosl560zBo34JI7UkmVKBCi55k36Ra8wk&usqp=CAU' },
    { id: 8, name: 'only you futbolka', price: 149000, img: 'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/db591b474bf7496081493fa72926d1d0~tplv-aphluv4xwc-crop-webp:1080:1080.webp?dr=15592&from=2378011839&idc=maliva&ps=933b5bde&shcp=e1be8f53&shp=8dbd94bf&t=555f072d' },
    { id: 9, name: 'need money for porche futbolkda', price: 129000, img: 'https://wavedotr.com/cdn/shop/files/NeedMoneyForPorscheT2.jpg?v=1693126713' }
  ];
  
  const cart = [];
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  
  function renderProducts() {
    productList.innerHTML = '';
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}" onclick="openModal('${p.img}')" />
        <h3>${p.name}</h3>
        <p>${p.price} so'm</p>
        <button onclick='addToCart(${p.id})'>Savatga qo‘shish</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const item = products.find(p => p.id === id);
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    cart.push({ ...item, size, color });
    renderCart();
  }
  
  function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      cartItems.innerHTML += `<div class="cart-item">${item.name} - ${item.price} so'm - ${item.size} - ${item.color}</div>`;
    });
  }
  
  function sendToTelegram() {
    if (cart.length === 0) return alert('Savat bo‘sh');
    const order = cart.map(i => `${i.name} (${i.price} so'm, ${i.size}, ${i.color})`).join('%0A');
    const telegramURL = `https://t.me/totsamiyalii?text=Savatdan zakaz:%0A${order}`;
    window.open(telegramURL, '_blank');
  }
  
  function openModal(img) {
    document.getElementById('modalImage').src = img;
    document.getElementById('imageModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  window.onload = function () {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
    renderProducts();
  };
  