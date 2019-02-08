function init () {
    const workshop_imgs = [
        require('../imgs/workshops/iot.png'),
        require('../imgs/workshops/deep.jpeg'),
        require('../imgs/workshops/arvr.png')
    ];

    let workshopImage = document.getElementsByClassName("workshop-image");

    workshop_imgs.map((img, index) => {
        workshopImage[index].style.backgroundImage = `url(${img})`;
    });

}

init();