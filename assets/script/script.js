const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const logo = document.querySelector('.menu-logo');
const menuList = document.querySelector('.menu-list');


const callback = ([ entry ], observer) => {
    if(entry.isIntersecting){
        menu.style.position = 'fixed';
        menu.style.top = '0px';
        menu.style.background = '#22222250';
        menu.style.width = '100%';
        logo.style.background = 'transparent';
        menuList.style.background = 'transparent';
    } else {
        menu.removeAttribute('style')
    }
 }
 const observer = new IntersectionObserver(callback, { threshold: .4 });
 
 observer.observe(main);