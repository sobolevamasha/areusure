const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
};


const btn = document.querySelector('#btn');

document.getElementById('btn').onmouseenter = function () {
    document.getElementById('btn').classList.add('answer--no');
};

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

btn.addEventListener('click', () => {
    alert('No way!!! Try again to make totally sure!');
});

document.getElementById('btnYep').onclick = function() {
    document.getElementById('btn').style.visibility = "hidden";
    document.getElementById('img').style.visibility = "visible";
};
