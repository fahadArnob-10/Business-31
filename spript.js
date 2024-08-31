document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // মেনু টগল করার জন্য ইভেন্ট লিসেনার
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // প্রতিটি মেনু আইটেম ক্লিক করার পর মেনু হাইড করার জন্য ইভেন্ট লিসেনার
    const menuItems = document.querySelectorAll('#mobile-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    });
});
