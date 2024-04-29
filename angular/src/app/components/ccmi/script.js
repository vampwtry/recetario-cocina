var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween:30,
    slidesPerGroup:3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    var allCards = document.querySelectorAll('.swiper-slide');

    document.getElementById('searchInput').addEventListener('input', function() {
        var searchValue = this.value.trim().toLowerCase();

        allCards.forEach(function(card) {
            var name = card.querySelector('.name').textContent.toLowerCase();
            var cardWrapper = card.closest('.swiper-slide');
            var regex = new RegExp(searchValue, 'i'); // 'i' flag for case insensitive search

            if (regex.test(name) || searchValue === '') {
                cardWrapper.style.display = 'block';
            } else {
                cardWrapper.style.display = 'none';
            }
        });
    });
});