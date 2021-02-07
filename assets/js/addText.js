window.onscroll = function() {myFunction()};

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

    Infot2.classList.remove("sticky")
    Infot3.classList.remove("sticky")
        Infot4.classList.remove("sticky")
    Infot5.classList.remove("sticky")
        Infot6.classList.remove("sticky")
    Infot7.classList.remove("sticky")
        Infot8.classList.remove("sticky")
    Infot9.classList.remove("sticky")

     if (window.pageYOffset > 990 && window.pageYOffset < 1525) {
    Infot2.classList.add("sticky");
    } 
    else if (window.pageYOffset > 2200 && window.pageYOffset < 2800) {
      Infot3.classList.add("sticky");  
    }
    else if (window.pageYOffset > 3370 && window.pageYOffset < 4050) {
      Infot4.classList.add("sticky");  
    }
    else if (window.pageYOffset > 4590 && window.pageYOffset < 5230) {
      Infot5.classList.add("sticky");  
    }
    else if (window.pageYOffset > 5785 && window.pageYOffset < 6424) {
      Infot6.classList.add("sticky");  
    }
    else if (window.pageYOffset > 7016 && window.pageYOffset < 7665) {
      Infot7.classList.add("sticky");  
    }
    else if (window.pageYOffset > 8212 && window.pageYOffset < 8814) {
      Infot8.classList.add("sticky");  
    }
    else if (window.pageYOffset > 9394) {
      Infot9.classList.add("sticky");  
    }
    
  console.log(window.pageYOffset)
}



