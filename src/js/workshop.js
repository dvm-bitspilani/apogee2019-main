function init () {
    const workshop_imgs = [
        require('../imgs/workshops/deep.jpeg'),
        require('../imgs/workshops/ethicalhacking.jpeg'),
        require('../imgs/workshops/arvr.png'),
        require('../imgs/workshops/iot.png'),
        require('../imgs/workshops/androidapp.jpeg'),
        require('../imgs/workshops/finance.png'),
        require('../imgs/workshops/cisco.jpeg'),
    ];

    let workshopImage = document.getElementsByClassName("workshop-image");

    workshop_imgs.forEach((img, index) => {
        img && (workshopImage[index].style.backgroundImage = `url(${img})`);
    });

}

init();