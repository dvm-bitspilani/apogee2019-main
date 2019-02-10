window.addEventListener('load', () => {
    const getInitLetters = str => str.slice(0, 200);
    const replaceText = elem => elem.textContent = getInitLetters(elem.textContent) + '...';
    
    const e = document.querySelectorAll('.event-info p');
    Array.from(e).forEach(replaceText)
});

function init () {
    const eventsData = [
        {
            heading: 'Armageddon',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/armageddon.jpg'),
        }, 
        {
            heading: 'ICL',
            subheading: 'International Coding League',
            description: '',
            img: require('../imgs/kernel-events/icl.jpg'),
        }, 
        {
            heading: 'RAW',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/raw.jpg'),
        }, 
        {
            heading: 'Robo Soccer',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/robosoc.jpg'),
        }, 
        {
            heading: 'SMS',
            subheading: 'Stock Market Simulation',
            description: '',
            img: require('../imgs/kernel-events/sms.jpg'),
        }, 
        {
            heading: 'Machine Learning Hackathon',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/ml.jpg'),
        }, 
        {
            heading: 'Junkyard Wars',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/junky.jpg'),
        }, 
        {
            heading: 'Reverse Engineering',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/reveng.jpg'),
        }, 
        {
            heading: 'Apogee Innovation Challenge',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/aic.jpg'),
        }, 
        {
            heading: 'Q.E.D',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/qed.jpg'),
        }, 
        {
            heading: 'Business Plan Competition',
            subheading: '',
            description: '',
            img: require('../imgs/kernel-events/bplan.jpg'),
        }, 
    ];
}

init();