function init () {
    const workshop_imgs = [
        require('../imgs/workshops/iot.png'),
        require('../imgs/workshops/deep.jpeg'),
        require('../imgs/workshops/arvr.png'),
        null,
        null,
        // require('../imgs/workshops/worldquant.jpg'),
    ];

    let workshopImage = document.getElementsByClassName("workshop-image");

    workshop_imgs.forEach((img, index) => {
        img && (workshopImage[index].style.backgroundImage = `url(${img})`);
    });

}

init();