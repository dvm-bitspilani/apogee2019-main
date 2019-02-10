function init () {
    const maxTextLength = 100
    const getInitLetters = str => str.slice(0, maxTextLength);
    const replaceText = text => text.length <= maxTextLength ? text : getInitLetters(text) + '...';

    const eventsData = [
        {
            heading: 'Armageddon',
            subheading: '',
            description: 'Gaming extravaganza . Featured games - CSGO, COD 4,Fifa 18/19, Blur',
            img: require('../imgs/kernel-events/armageddon.jpg'),
        }, 
        {
            heading: 'ICL',
            subheading: 'International Coding League',
            description: 'Talk is Cheap. Show me the code- Linus Torvalds Do you think you have mastered Competitive coding, the greatest mind sport? Do you feel the urge to solve Mind blowing problems and play the Game Of Codes? Here’s your stage to step on and prove your coding skills – A challenging stage, a nail-biting one! BITS-ACM presents ICL-International Coding League: a competitive programming contest based on the ACM ICPC this Apogee 2019. In March, some of the best minds in the country are to gather to compete for the crown.',
            img: require('../imgs/kernel-events/icl.jpg'),
        }, 
        {
            heading: 'RAW',
            subheading: '',
            description: 'In this event participants have to design a remote controlled robot to combat with the opponents. The arena will be of 24ftX24ft , fight zone will be of 20ftX20ft pushing the opponent bot out of the fight zone will result in victory.',
            img: require('../imgs/kernel-events/raw.jpg'),
        }, 
        {
            heading: 'Robo Soccer',
            subheading: '',
            description: 'Each team is required to design, construct and operate a prototype meeting the requirements of the problem statement. APOGEE-2019 Student Design Competition: Robot Soccer. You may choose to construct a team that is just one device or a team with multiple devices that are remotely controlled and must fit in a specified box provided by your team. The competition will have a multi-game group stage followed by a semi-final and final round for the top teams.',
            img: require('../imgs/kernel-events/robosoc.jpg'),
        }, 
        {
            heading: 'SMS',
            subheading: 'Stock Market Simulation',
            description: 'Stock Market Simulation is the flagship event of Economics and Finance Association in joint-collaboration with ACM, BITS Pilani. Investment is an art which has become a necessity in the current world as the opportunity cost of money left idle keeps on increasing. This event gives participants a glimpse of the daily life of stock investors and portfolio managers. There will be different stock indices, each index having stocks from some of their renowned sectors. Stock prices will change according to the company news, released on the web app, as well as the aggregate market demand and supply conditions. Trade in different stock indices will be done using their respective currencies.',
            img: require('../imgs/kernel-events/sms.jpg'),
        }, 
        {
            heading: 'Machine Learning Hackathon',
            subheading: '',
            description: 'Have you ever dreamt of exploring the world of Artificial Intelligence by solving a real-life problem? If yes, then your ticket to turning this enthralling thought into reality is right in front of you. BITS-ACM presents the premier machine learning hackathon this APOGEE 2019. Get the chance to wrestle with real-world datasets and the opportunity to show off those machine learning skills. Visualise your data and provide your technical insights for the patterns that lay hidden beneath!',
            img: require('../imgs/kernel-events/ml.png'),
        }, 
        {
            heading: 'Junkyard Wars',
            subheading: '',
            description: 'Do you have the imagination and will power to transform useless things into some great mechanisms? Then this is the event for you. BITS Pilani presents a new transformed version of famous Discovery Channel show “Junkyard Wars”. This event will check the participant’s knowledge of Engineering and ability to work in an exhausting situation. The participating teams are supposed to have sound theoretical and practical knowledge of Mechanical Engineering. It is a complete day and night event wherein the participants are required to make a vehicle from the junk provided to them in 36 hours in the final round. For this purpose, the BITS Workshop will be kept open during the complete event and participants can make use of the required machine tools. The teams will be selected for the final round from two initial rounds.',
            img: require('../imgs/kernel-events/junky.jpg'),
        }, 
        {
            heading: 'Reverse Engineering',
            subheading: '',
            description: 'In this event, we provide used motorcycle or scooter engines to the teams, they have to disassemble it, draw the CAD drawings of all the parts and reassemble the again. Team selection is done by taking a quiz in the first round.',
            img: require('../imgs/kernel-events/reveng.jpg'),
        }, 
        {
            heading: 'Apogee Innovation Challenge',
            subheading: '',
            description: 'The event aims to connect industry to college students. The students get a chance to apply theoretical knowledge on real industrial problems whereas the companies get solutions from a new perspective.',
            img: require('../imgs/kernel-events/aic.png'),
        }, 
        {
            heading: 'Q.E.D',
            subheading: '',
            description: 'Parliamentary Debate',
            img: require('../imgs/kernel-events/qed.jpg'),
        }, 
        {
            heading: 'Business Plan Competition',
            subheading: '',
            description: 'Teams pitch their Business plans of start-ups in the event in front of a panel of judges.',
            img: require('../imgs/kernel-events/bplan.jpg'),
        }, 
    ];

    const eventsHTML = eventsData.map(({heading, subheading, description, img}) => `
        <div class="event-card">
            <div class="event-image" style="background-image: url('${img}')"></div>
                <div class="event-info">
                    <h3>${heading}</h3>
                    <h6>${subheading}</h6>
                    <p>${replaceText(description)}</p>
                    <hr />
                    <!-- <span>FIND OUT MORE</span> -->
            </div>
        </div>
    `);
    
    document.getElementById("events-content-inner").innerHTML = eventsHTML;


}

init();