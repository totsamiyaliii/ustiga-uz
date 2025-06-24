
const products = [
  { id: 1, name: 'Naqshli Futbolka', price: 199000, img: '' }
];
const cart = [];
function renderProducts() {
  const productList = document.getElementById('productList');
  products.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${p.name}</h3><p>${p.price} so'm</p><button onclick="openModal(${p.id})">Savatga qo‘shish</button>`;
    productList.appendChild(div);
  });
}
function openModal(id) {
  document.getElementById('sizeModal').style.display = 'flex';
  window.selectedProductId = id;
}
function closeModal() {
  document.getElementById('sizeModal').style.display = 'none';
}
function confirmSelection() {
  const size = document.getElementById('sizeSelect').value;
  const color = document.getElementById('colorSelect').value;
  const product = products.find(p => p.id === window.selectedProductId);
  cart.push({...product, size, color});
  renderCart();
  closeModal();
}
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach(i => {
    cartItems.innerHTML += `<div>${i.name} - ${i.size} - ${i.color}</div>`;
  });
}
function sendToTelegram() {
  const text = cart.map(i => `${i.name} (${i.size}, ${i.color})`).join('%0A');
  const url = `https://api.telegram.org/bot7948208143:AAH0dbRZC-h8J1-6cV3AlgHSN_Y1a8kP19A/sendMessage?chat_id=5437908068&text=Savat:%0A${text}`;
  window.open(url, '_blank');
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function sendContact() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const msg = document.getElementById('message').value;
  const text = `Kontakt:%0AIsm: ${name}%0ARaqam: ${phone}%0AXabar: ${msg}`;
  const url = `https://api.telegram.org/bot7948208143:AAH0dbRZC-h8J1-6cV3AlgHSN_Y1a8kP19A/sendMessage?chat_id=5437908068&text=${text}`;
  window.open(url, '_blank');
}
window.onload = renderProducts;
