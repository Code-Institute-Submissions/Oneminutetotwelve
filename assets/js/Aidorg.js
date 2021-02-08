

fetch("https://www.insamlingskontroll.se/autocomplete/json",
{mode:'no-cors'})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
          
         