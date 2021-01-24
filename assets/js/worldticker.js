

//Initializing img-ticker
let i = 0;
let images = []; //array
let time = 1500; // time in millie seconds

//images in ticker

images[0] = "url(assets/img/pexels-wildan-zainul-faki-3364110.jpg)";
images[1] = "url(assets/img/pexels-jimmy-chan-1657935.jpg";
images[2] = "url(assets/img/pexels-vladyslav-dukhin-4070727.jpg)";
images[3] = "url(assets/img/pexels-nataliya-vaitkevich-4813970.jpg)";
images[4] = "url(assets/img/pexels-mike-chai-842339.jpg)";
images[5] = "url(assets/img/pexels-duané-viljoen-5097418.jpg)";

//function ticker

function changeImage() {
    let el = document.getElementById('main_right');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;