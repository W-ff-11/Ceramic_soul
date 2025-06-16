

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import "/src/sass/style.scss";


// let text = "hello world";
// const pi = 3.14;
// const isOpen = true;
// let a;

// text = 'this is text';


// console.log(text);
// console.log(a);

// const person = {
//     name:"ivan",
//     age: 32,
// };

// console.log(person.name);

// const titles = [
//     "Make your dream come true or decorate your home",
//     "create or buy",
//     "our store",
// ];

// console.log(titles[0]);

// function calc(a, b) {
//     console.log(a + b);
// }

// calc(5, 5);
// calc(10, 12);

// if (isOpen) {
//     console.log('магазин открыт')
// } else {
//     console.log('магазин закрыт')
// }

// const vase = document.querySelector('.touch__decor');
// console.log(vase);

// vase.addEventListener('click', () => {
//     console.log(vase);
// });

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

try {
   new Swiper('.works__slider', {
   slidesPerView: 1,
   loop: true,
   breakpoints: {
       1200: {
            slidesPerView: 3,
            spaceBetween: 5,
    },
       1920: {
            spaceBetween: 35,
    },
  },
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  modules: [Navigation, Pagination],
});
} catch(e) {}

