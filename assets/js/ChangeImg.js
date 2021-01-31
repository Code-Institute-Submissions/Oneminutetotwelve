
//Initializing img-ticker
let i = 0;
let images = []; //array
let time = 3500; // time in millie seconds

images[0] = '<div class="factSection">' + '<p class= "text-center">' + 'The earth is ours to nurture and care for' + '</p>' + '</div>';

console.log(images);


function changeImage() {

    let i = 0;
    let len = images.length;
    if (i < len -1){
    document.getElementById('frame').innerHTML = images[i];;
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}