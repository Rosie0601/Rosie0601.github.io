let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let 左 = document.getElementById('左');
let 右 = document.getElementById('右');
let 中 = document.getElementById('中');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    左.style.left = value * 1.5 + 'px';
    右.style.left = value * -1.5 + 'px';
    中.style.top = value * 0.5 + 'px';
});