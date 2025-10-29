$(document).ready(function() {

    // Burger menu toggle
    
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');

    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.burger-btn, .nav').length) {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Set current year in footer

    $('#year').text(new Date().getFullYear())
});