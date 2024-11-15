const menuButton = document.getElementById('menu_button');
const closeButton = document.getElementById('close-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.add('open'); // نمایش منو
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('open'); // مخفی کردن منو
});

// مدیریت کلیک بر روی بخش‌ها
const menuItems = document.querySelectorAll('#menu a');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // جلوگیری از پیش‌فرض لینک
        const submenu = item.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open'); // نمایش یا مخفی کردن زیرمنو
        }
    });
});