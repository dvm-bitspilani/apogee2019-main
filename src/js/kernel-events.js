window.addEventListener('load', () => {
    const getInitLetters = str => str.slice(0, 200);
    const replaceText = elem => elem.textContent = getInitLetters(elem.textContent) + '...';
    
    const e = document.querySelectorAll('.event-info p');
    Array.from(e).forEach(replaceText)
});