window.addEventListener('load', function() {
    const pageEnd = performance.mark('pageEnd')
    const loadTime = pageEnd.startTime / 1000

    var popup = document.createElement('div');
    popup.textContent = 'Page loaded in ' + loadTime.toFixed(2) + ' milliseconds';

    popup.classList.add('popup');

    document.body.appendChild(popup);

    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000);
});
