document.querySelectorAll('.engineering-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        let details = item.querySelector('.details');
        details.style.display = 'block';
        details.style.height = details.scrollHeight + 'px';
    });

    item.addEventListener('mouseout', () => {
        let details = item.querySelector('.details');
        details.style.height = '0';
        details.style.display = 'none';
    });
});