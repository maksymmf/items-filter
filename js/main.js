'use strict';

//using classes
// function menuFilter() {
//     const menuButtons = document.querySelectorAll('.button');
//     const menuCards = document.querySelectorAll('.menu-item');

//     function filter(categoryButton, categoryCards) {
//         categoryCards.forEach(card => {
//             const isFiltered = !card.classList.contains(categoryButton);
//             const showAll = categoryButton === 'all';
//             if (isFiltered && !showAll) {
//                 card.classList.add('hide');
//             } else {
//                 card.classList.remove('hide');
//             }
//         });
//     }

//     menuButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const actualButton = button.dataset.filter;
//             filter(actualButton, menuCards)
//         });
//     });
// }

// menuFilter();

//using data-attributes
function menuFilter() {
    const menuButtons = document.querySelectorAll('.button');
    const menuCards = document.querySelectorAll('.menu-item');

    function filter(categoryButton, categoryCards) {
        categoryCards.forEach(card => {
            const matchingCards = card.dataset.item;
            const isFiltered = categoryButton !== matchingCards;
            const showAll = categoryButton === 'all';

            if (isFiltered && !showAll) {
                card.classList.add('hide');
            } else {
                card.classList.remove('hide');
            }
        });
    }

    menuButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const actualButton = button.dataset.filter;

            filter(actualButton, menuCards);

            menuButtons && menuButtons.forEach(button => {
                button.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
}

menuFilter();