

//Initializing img-ticker
let i = 0;
let images = []; //array
let time = 3500; // time in millie seconds

//images in ticker

images[0] = "url(assets/img/pexels-atiabii-3166780.jpg)";
images[1] = "url(assets/img/pexels-chris-leboutillier-929385.jpg";
images[2] = "url(assets/img/pexels-vladyslav-dukhin-4070727.jpg)";
images[3] = "url(assets/img/pexels-tom-fisk-3186574.jpg)";
images[4] = "url(assets/img/pexels-guduru-ajay-bhargav-1043558.jpg)";
images[5] = "url(assets/img/cape_town001.jpg)";
images[7] = "url(assets/img/IYORBank_CoralBleaching_TheOceanAgency_51.jpeg)";
images[6] = "url(assets/img/Desert-Dead-Animal-Nimal-Carcass-Skeleton-1474290.jpg)";
images[8] = "url(assets/img/pexels-duané-viljoen-5097418.jpg)";


//function ticker

function changeImage() {
    let el = document.getElementById('pictureframe');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;