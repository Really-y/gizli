const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

// Mobil için touch event desteği
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});