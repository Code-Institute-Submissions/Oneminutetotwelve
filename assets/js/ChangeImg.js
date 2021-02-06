//Initializing playfunction
let i = 0;

//image array

let images = []; 

images[0] = "url(assets/img/pexels-alex-conchillos-3941855.jpg)";
images[1] = "url(assets/img/cape_town001.jpg)";
images[2] = "url(assets/img/pexels-tom-fisk-3186574.jpg)";
images[3] = "url(assets/img/pexels-chris-leboutillier-929385.jpg)";
images[4] = "url(assets/img/pexels-vladyslav-dukhin-4070727.jpg)";
images[5] = "url(assets/img/pexels-pixabay-60013.jpg)";
images[6] = "url(assets/img/IYORBank_CoralBleaching_TheOceanAgency_51.jpeg)";
images[7] = "url(assets/img/barehands_clean_up_640_08.jpg)";
images[8] = "url(assets/img/pexels-wildan-zainul-faki-3364110.jpg)";
images[9] = "url(assets/img/pexels-karolina-grabowska-4207908.jpg)";
images[10] = "url(assets/img/pexels-duané-viljoen-5097418.jpg)";


//text array

let text=[];

text[0] = "With an exponentially increasing population <br> reaching <a id='Worldpop'></a>  in 2019 <br>we meet challenges such as <br>shrinking  <a href= 'https://data.worldbank.org/indicator/EN.POP.DNST?end=2019&start=1961' target='_blank'>living space</a>, <a href= 'https://news.un.org/en/story/2020/11/1077792' target='_blank'>starvation, </a> and  <a href= 'https://en.wikipedia.org/wiki/Climate_change' target='_blank'>changing climate</a>.";
text[1] = 'In 2017  <a id="povertyData"></a> % of population <br>was living under subsistence minimum. <br> The  <a href= "https://www.bbc.com/news/business-32824770" target="_blank">gap between rich and poor</a> is increasing. ';
text[2] = ' Additionally, earth resources are unevenly allocated,<br> <a href= "https://www.bbc.com/news/business-32824770" target="_blank">overexploited</a> and <a href= "http://www.conservationandsociety.org/article.asp?issn=0972-4923;year=2003;volume=1;issue=1;spage=99;epage=111;aulast=Ehrenfeld" target="_blank"> cultivated in an unliteral way</a>.<br> Our behaviour, the demand for certain products and <br>our lifestyle have contributed to <br> <a href= "https://en.wikipedia.org/wiki/Climate_change" target="_blank">climate change</a> and <a href= "https://en.wikipedia.org/wiki/Climate_change" target="_blank">loss of species';
text[3] = ' Earth annual average temperature</a> is increasing <br> and was increase with 1 degree Celsisus between 2019 and 2020.';
text[4] = ' One reason related to increasing temperatures are <br><a href= "https://edition.cnn.com/2019/08/21/americas/amazon-rainforest-fire-intl-hnk-trnd/index.html" target="_blank">burning of fossil fuel, devastating of forest area</a> and <a href= "https://en.wikipedia.org/wiki/History_of_chemistry" target="_blank"> producing products </a> <br>leading to increasing CO2 emission. ';
text[5] = 'The <a href= "https://www.ipcc.ch/sr15/" target="_blank"> global warming </a> effects our living and <a href= "https://www.wwf.org.uk/press-release/living-planet-report-2020" target="_blank">change our nature';
text[6] = 'We stand in for <a href= "https://edition.cnn.com/2020/06/01/world/sixth-mass-extinction-accelerating-intl/index.html" target="_blank">the sixth mass extinction of species </a><br> with 85 species reported extinct at <a href= "https://www.iucnredlist.org/" target="_blank">IUCN homepage</a> during 2020.';
text[7] = 'We have to change our <a href= "https://www.footprintnetwork.org/our-work/ecological-footprint/" target="_blank"> footprint </a> <br> to overcome the challenges that we stand for and turn the wheel towards a better world. ';
text[8] = 'Even so there is light in the tunnel. <br> Our life expectancy is increasing and was <a id="ageData"></a> year during 2019. ';
text[9] = 'The ambition with this website is to present the state our world is today <br> and give a possibility to contact organisations that are involved in a certain issue. ';
text[10] = 'Together we can create better tomorrow !!!';


//background color array

let bgclr=[];

bgclr[0] = '#000000';
bgclr[1] = '#0a0505';
bgclr[2] = '#060606';
bgclr[3] = '#241c09';
bgclr[4] = '#242425';
bgclr[5] = '#080503';
bgclr[6] = '#212a1c';
bgclr[7] = '#0c0c0c';
bgclr[8] = '#bbc0c4';
bgclr[9] = '#b69e84';
bgclr[10] = '#121315';


let time = 3600; // time in millie seconds


let play = document.getElementById("play");
let textframe =document.getElementsByClassName("factText")[0];
let factframe = document.querySelector(".factSection");
let topframe = document.querySelector(".topsegment");
let panelframe = document.querySelector(".panel");


let  playfunction = play.addEventListener("click", function() {

//function changeImage() {
    textframe.innerHTML = text[i];
    factframe.style.backgroundImage = images[i];
    factframe.style.backgroundColor = bgclr[i];
    topframe.style.backgroundColor = bgclr[i];
    panelframe.style.backgroundColor = bgclr[i];


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

   // setTimeout('changeImage()', time);
})



//play.addEventListener("click", changeImage())


//let  playfunction = play.addEventListener("click", changeImage())
//      setTimeout('changeImage()', time)
//});

//{
       //window.onload = changeImage;
//})

//document.getElementById("play").addEventListener("click", function() {
 //   document.getElementsByClassName("factText")[0].innerHTML = "With an exponentially increasing population <br> reaching <a id='Worldpop'></a>  in 2019 <br>we meet challenges such as <br>shrinking  <a href= 'https://data.worldbank.org/indicator/EN.POP.DNST?end=2019&start=1961' target='_blank'>living space</a>, <a href= 'https://news.un.org/en/story/2020/11/1077792' target='_blank'>starvation, </a> and  <a href= 'https://en.wikipedia.org/wiki/Climate_change' target='_blank'>changing climate</a>.";
 //     document.querySelector(".topsegment").style.backgroundColor = '#000000';
 // document.querySelector(".factSection").style.backgroundColor = '#000000';
// document.querySelector(".panel").style.backgroundColor = '#000000';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-alex-conchillos-3941855.jpg)";
// });

//document.getElementById("play").addEventListener("click", function() {
//    document.getElementsByClassName("factText")[0].innerHTML = 'In 2017  <a id="povertyData"></a> % of population <br>was living under subsistence minimum. <br> The  <a href= "https://www.bbc.com/news/business-32824770" target="_blank">gap between rich and poor</a> is increasing. ';
//      document.querySelector(".topsegment").style.backgroundColor = '#0a0505';
//  document.querySelector(".factSection").style.backgroundColor = '#0a0505';
// document.querySelector(".panel").style.backgroundColor = '#0a0505';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/cape_town001.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
   // document.getElementsByClassName("factText")[0].innerHTML = ' Additionally, earth resources are unevenly allocated,<br> <a href= "https://www.bbc.com/news/business-32824770" target="_blank">overexploited</a> and <a href= "http://www.conservationandsociety.org/article.asp?issn=0972-4923;year=2003;volume=1;issue=1;spage=99;epage=111;aulast=Ehrenfeld" target="_blank"> cultivated in an unliteral way</a>.<br> Our behaviour, the demand for certain products and <br>our lifestyle have contributed to <br> <a href= "https://en.wikipedia.org/wiki/Climate_change" target="_blank">climate change</a> and <a href= "https://en.wikipedia.org/wiki/Climate_change" target="_blank">loss of species';
   //   document.querySelector(".topsegment").style.backgroundColor = '#060606';
 // document.querySelector(".factSection").style.backgroundColor = '#060606';
// document.querySelector(".panel").style.backgroundColor = '#060606';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-tom-fisk-3186574.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
 //  document.getElementsByClassName("factText")[0].innerHTML = ' Earth annual average temperature</a> is increasing <br> and was increase with 1 degree Celsisus between 2019 and 2020.';
 //     document.querySelector(".topsegment").style.backgroundColor = '#241c09';
//  document.querySelector(".factSection").style.backgroundColor = '#241c09';
// document.querySelector(".panel").style.backgroundColor = '#241c09';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-chris-leboutillier-929385.jpg)";
//});


//document.getElementById("play").addEventListener("click", function() {
//   document.getElementsByClassName("factText")[0].innerHTML = ' One reason related to increasing temperatures are <br><a href= "https://edition.cnn.com/2019/08/21/americas/amazon-rainforest-fire-intl-hnk-trnd/index.html" target="_blank">burning of fossil fuel, devastating of forest area</a> and <a href= "https://en.wikipedia.org/wiki/History_of_chemistry" target="_blank"> producing products </a> <br>leading to increasing CO2 emission. ';
//      document.querySelector(".topsegment").style.backgroundColor = '#242425';
//  document.querySelector(".factSection").style.backgroundColor = '#242425';
// document.querySelector(".panel").style.backgroundColor = '#242425';
 // document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-vladyslav-dukhin-4070727.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
//   document.getElementsByClassName("factText")[0].innerHTML = 'The <a href= "https://www.ipcc.ch/sr15/" target="_blank"> global warming </a> effects our living and <a href= "https://www.wwf.org.uk/press-release/living-planet-report-2020" target="_blank">change our nature';
//      document.querySelector(".topsegment").style.backgroundColor = '#080503';
//  document.querySelector(".factSection").style.backgroundColor = '#080503';
// document.querySelector(".panel").style.backgroundColor = '#080503';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-pixabay-60013.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
//   document.getElementsByClassName("factText")[0].innerHTML = 'We stand in for <a href= "https://edition.cnn.com/2020/06/01/world/sixth-mass-extinction-accelerating-intl/index.html" target="_blank">the sixth mass extinction of species </a><br> with 85 species reported extinct at <a href= "https://www.iucnredlist.org/" target="_blank">IUCN homepage</a> during 2020.';
  //    document.querySelector(".topsegment").style.backgroundColor = '#212a1c';
 // document.querySelector(".factSection").style.backgroundColor = '#212a1c';
 //document.querySelector(".panel").style.backgroundColor = '#212a1c';
 // document.querySelector(".factSection").style.backgroundImage = "url(assets/img/IYORBank_CoralBleaching_TheOceanAgency_51.jpeg)";
//});

//document.getElementById("play").addEventListener("click", function() {
 //  document.getElementsByClassName("factText")[0].innerHTML = 'We have to change our <a href= "https://www.footprintnetwork.org/our-work/ecological-footprint/" target="_blank"> footprint </a> <br> to overcome the challenges that we stand for and turn the wheel towards a better world. ';
 //     document.querySelector(".topsegment").style.backgroundColor = '#0c0c0c';
 // document.querySelector(".factSection").style.backgroundColor = '#0c0c0c';
// document.querySelector(".panel").style.backgroundColor = '#0c0c0c';
//  document.querySelector(".factSection").style.backgroundImage = "url(assets/img/barehands_clean_up_640_08.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
  // document.getElementsByClassName("factText")[0].innerHTML = 'Even so there is light in the tunnel. <br> Our life expectancy is increasing and was <a id="ageData"></a> year during 2019. ';
    //  document.querySelector(".topsegment").style.backgroundColor = '#bbc0c4';
 // document.querySelector(".factSection").style.backgroundColor = '#bbc0c4';
 //document.querySelector(".panel").style.backgroundColor = '#bbc0c4';
 // document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-wildan-zainul-faki-3364110.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
  // document.getElementsByClassName("factText")[0].innerHTML = 'The ambition with this website is to present the state our world is today <br> and give a possibility to contact organisations that are involved in a certain issue. ';
  //    document.querySelector(".topsegment").style.backgroundColor = '#b69e84';
  //document.querySelector(".factSection").style.backgroundColor = '#b69e84';
 //document.querySelector(".panel").style.backgroundColor = '#b69e84';
 // document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-karolina-grabowska-4207908.jpg)";
//});

//document.getElementById("play").addEventListener("click", function() {
  // document.getElementsByClassName("factText")[0].innerHTML = 'Together we can create better tomorrow !!!';
    //  document.querySelector(".topsegment").style.backgroundColor = '#121315';
 // document.querySelector(".factSection").style.backgroundColor = '#121315';
 //document.querySelector(".panel").style.backgroundColor = '#121315';
  //document.querySelector(".factSection").style.backgroundImage = "url(assets/img/pexels-duané-viljoen-5097418.jpg)";
//});

//window.onload = changeImage;
