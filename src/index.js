import './main.scss';
import image from './images/surf.jpg';
import image2 from './images/surf_guy.jpg';

const createAndAddImage = images => {
    images.forEach(images => {
        document.body.insertAdjacentHTML("beforeend", `<img src="${images}" alt="image" >`)
    });
}

createAndAddImage([image, image2]);
console.log("Hello world!");
