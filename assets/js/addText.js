window.onscroll = function() {
    myFunction();
};
// Get infotext
var Infot2 = document.getElementsByClassName("info2t")[0];
var Infot3 = document.getElementsByClassName("info3t")[0];
var Infot4 = document.getElementsByClassName("info4t")[0];
var Infot5 = document.getElementsByClassName("info5t")[0];
var Infot6 = document.getElementsByClassName("info6t")[0];
var Infot7 = document.getElementsByClassName("info7t")[0];
var Infot8 = document.getElementsByClassName("info8t")[0];
var Infot9 = document.getElementsByClassName("info9t")[0];
// Add the sticky class to the infotext when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    Infot2.classList.remove("sticky");
    Infot3.classList.remove("sticky");
    Infot4.classList.remove("sticky");
    Infot5.classList.remove("sticky");
    Infot6.classList.remove("sticky");
    Infot7.classList.remove("sticky");
    Infot8.classList.remove("sticky");
    Infot9.classList.remove("sticky");
    if (window.pageYOffset > 300 && window.pageYOffset < 1500) {
        Infot2.classList.add("sticky");
    } else if (window.pageYOffset > 1510 && window.pageYOffset <
        2710) {
        Infot3.classList.add("sticky");
    } else if (window.pageYOffset > 2720 && window.pageYOffset <
        3920) {
        Infot4.classList.add("sticky");
    } else if (window.pageYOffset > 3930 && window.pageYOffset <
        5130) {
        Infot5.classList.add("sticky");
    } else if (window.pageYOffset > 5140 && window.pageYOffset <
        6340) {
        Infot6.classList.add("sticky");
    } else if (window.pageYOffset > 6350 && window.pageYOffset <
        7550) {
        Infot7.classList.add("sticky");
    } else if (window.pageYOffset > 7560 && window.pageYOffset <
        8760) {
        Infot8.classList.add("sticky");
    } else if (window.pageYOffset > 8770) {
        Infot9.classList.add("sticky");
    }
}