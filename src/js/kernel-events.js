window.addEventListener('load', () => {
    const getInitLetters = str => str.slice(0, 200);
    const replaceText = elem => elem.textContent = getInitLetters(elem.textContent) + '...';
    
    const e = document.querySelectorAll('.event-info p');
    Array.from(e).forEach(replaceText)
});

function init () {
    const eventImgs = [
        require('../imgs/kernel-events/armageddon.jpg'),
        require('../imgs/kernel-events/icl.jpg'),
        require('../imgs/kernel-events/raw.jpg'),
        require('../imgs/kernel-events/robosoc.jpg'),
        require('../imgs/kernel-events/sms.jpg'),
        require('../imgs/kernel-events/ml.png'),
        require('../imgs/kernel-events/junky.jpg'),
        require('../imgs/kernel-events/reveng.jpg'),
        require('../imgs/kernel-events/aic.png'),
        require('../imgs/kernel-events/qed.jpg'),
        require('../imgs/kernel-events/bplan.jpg'),
    ];
}

init();