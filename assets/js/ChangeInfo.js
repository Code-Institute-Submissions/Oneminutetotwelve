//Initializing playfunction
let i = 0;

//image array

let images = []; 

images[0] = "assets/img/pexels-alex-conchillos-3941855.jpg";
images[1] = "assets/img/cape_town001.jpg";
images[2] = "assets/img/pexels-tom-fisk-3186574.jpg";
images[3] = "assets/img/pexels-chris-leboutillier-929385.jpg";
images[4] = "assets/img/pexels-vladyslav-dukhin-4070727.jpg";
images[5] = "assets/img/pexels-pixabay-60013.jpg";
images[6] = "assets/img/IYORBank_CoralBleaching_TheOceanAgency_51.jpeg";
images[7] = "assets/img/barehands_clean_up_640_08.jpg";
images[8] = "assets/img/pexels-wildan-zainul-faki-3364110.jpg";
images[9] = "assets/img/pexels-karolina-grabowska-4207908.jpg";
images[10] = "assets/img/pexels-duané-viljoen-5097418.jpg";


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

//smoke effect array

let smoke=[];

smoke[0] = '400px 400px';
smoke[1] = '420px 420px';
smoke[2] = '440px 440px';
smoke[3] = '420px 420px';
smoke[4] = '400px 400px';
smoke[5] = '420px 420px';
smoke[6] = '440px 440px';
smoke[7] = '420px 420px';
smoke[8] = '400px 400px';
smoke[9] = '420px 420px';
smoke[10] = '440px 440px';

//fire effect array

let fire=[];

fire[0] = '300px 400px';
fire[1] = '320px 420px';
fire[2] = '340px 440px';
fire[3] = '360px 460px';
fire[4] = '340px 440px';
fire[5] = '320px 420px';
fire[6] = '360px 460px';
fire[7] = '340px 440px';
fire[8] = '320px 420px';
fire[9] = '300px 300px';
fire[10] = '320px 420px';

//spinning globe effect effect array

let globe=[];

globe[0] = "url(assets/img/pexels-pixabay-87651.jpg)";
globe[1] = "url(assets/img/pexels-pixabay-355935.jpg)";
globe[2] = "url(assets/img/pexels-pixabay-87651.jpg)";
globe[3] = "url(assets/img/pexels-pixabay-355935.jpg)";
globe[4] = "url(assets/img/pexels-pixabay-87651.jpg)";
globe[5] = "url(assets/img/pexels-pixabay-355935.jpg)";
globe[6] = "url(assets/img/pexels-pixabay-87651.jpg)";
globe[7] = "url(assets/img/pexels-pixabay-355935.jpg)";
globe[8] = "url(assets/img/pexels-pixabay-87651.jpg)";
globe[9] = "url(assets/img/pexels-pixabay-355935.jpg)";
globe[10] = "url(assets/img/pexels-pixabay-87651.jpg)";


let globesize=[];

globesize[0] = "450px 450px";
globesize[1] = "500px 500px";
globesize[2] = "450px 450px";
globesize[3] = "500px 500px";
globesize[4] = "450px 450px";
globesize[5] = "500px 500px;";
globesize[6] = "450px 450px";
globesize[7] = "500px 500px;";
globesize[8] = "450px 450px";
globesize[9] = "500px 500px;";
globesize[10] = "450px 450px";




let time = 3600; // time in millie seconds

let burningglobe = document.getElementsByClassName("earth")[0];
let play = document.getElementById("play");
let textframe =document.getElementsByClassName("factText")[0];
let factframe = document.getElementsByClassName("factSection")[0];
let smoker = document.querySelector(".test1Frame");
let firer = document.querySelector(".test2Frame");
let glober = document.querySelector(".earth");


let  playfunction = play.addEventListener("click", function() {

//function changeImage() {
    textframe.innerHTML = text[i];
     factframe.src = images[i];
  
     if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

})



let  globefunction = burningglobe.addEventListener('mouseover', function(){
    
        for (i = 0; i < images.length; i++) {
           smoker.style.backgroundSize+=smoke[i];
      firer.style.backgroundSize+=fire[i];
       glober.style.backgroundImage+=globe[i];
        glober.style.backgroundSize+=globesize[i];
}   
})