const item = document.getElementById('item');

item.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'A') {
        e.target.classList.toggle('activo');
    }
});