# EcoTurningPoint

![Mockup](assets/wireframe/EcoTurningPoint.jpg "Typography EcoTurningPoint")

#### The aim of this website is to in a simplistic way present some of todays challenges such climate change, poverty and global warming by using realtime data on global and on countrywise level. This will be done using data from Worldbank and connect it to Google-map. Finally I will present options on how to get involved or support different organisations working these challenges. 
------
-----

## UX(User Experience)

### Project Goal

#### The goal of this project is to build a interactive and responsive website presenting todays global challenges using data e.g. Worldbank and connect it to Googlemap.

#### The features on the website will:
- Give users the possibilty to understand todays global problems based on facts and realtime data
- Give users the possibilty to compare data on global and countrywise level
- Give users a chance to get involved in specific topics and support Aid organisation working with these topics 


#### I will achieve this by:
- Present Global data from Worldbank together with links describing problem such as global warming, climate change, species extinction, poverty etc.. 
- Extract data on countrylevel from Worldbank, connect and present it on a Googlemap-function
- Link to trustworthy Aid organisations 


## User Goal

#### We expect this website to be used by the following personas
- Knowledge seeker who want to get background on todays global problems based on realtime data
- People who want to get involved and change the directions of today global challenges

The personas main goal is to find informations about today problems so that they know how they should relate, get involved and make a change. Their age span is supposed to be between 25 and 45 years old.

### User Stories

#### As a knowledge seeker I want to have a website with realtime data connected to a mapfunction and links to Aidorganisations so that....
1.  I can find information about todays problems
2.  I can compare and get an idea on how the problems differ between countries 
3.  I can find and engage in aid organisations that work with challenges that concerns me

#### As a person who want to get involved and change problems on global scale I want to have a website with realtime data connected to a mapfunction and links to Aidorganisation so that....
1.  I can find information and get an idea on the severity of a specific problem
2.  I can compare and get an idea on how the problems differ between countries 
3.  I can support and get involved in an organisation that work with challenges that concerns me

-----

### Design Choices

#### Typology
![Typology](assets/wireframe/typo.jpg "Typography EcoTurningPoint")

#### Fonts 


#### Colors



#### Wireframe
![Wireframe](assets/wireframe/Ecoturningpoint.pdf "Wireframe EcoTurningPoint")


## Technologies Used

### Languages

- HTML5
  - Used as the main mark-up language for the website content.
- CSS3
  - Used to style the individual webpages.
- Javascript
  -  Used to collecting data from Worldbank, countrycoordinates from trackCorona and adding the information to a Googlemap function in the Countrydata page.
   Data from Worldbank was also presented on global scale on the index page and text section was activated using an onscrollfunction.

### Libraries

- Bootstrap
  - Used to design a mobile-first responsive website layout.
- jQuery
  - Loaded as part of the Bootstrap CDN starter template
- Popper
  - Loaded as part of the Bootstrap CDN starter template
- Gitignore
  - Used to format code while constructing the webpage

### Tools

- Git
  - Git was used for version control by utilising the Gitpod terminal to commit to Git and push to GitHub.
- GitHub
  - Used to store, host and deploy the project files and source code after being pushed from Git.
- Gitpod
  - An online IDE linked to the GitHub repository used for the majority of the code development.
- Font-Awesome
  - Used for icons to enhance headings and add emphasis to text.
- Google fonts
  - Used for the website fonts.
- Microsoft PowerPoint
  - Used for creating mockups for e.g., Topology in readme-file
- Am I Responsive?
  - A tool for taking a quick snapshot of the responsive breakpoints of the website to visualise how the site will look on different device screen sizes in one place. The resulting screenshot is also used as the README.md logo image.
- Google Inspection Tool
  - Used for testing the design and its responsiveness
- LightHouse
  - Used for validating how well adjusted the design is in large devices as in small mobile devices
- W3Cs CCS-validator
  - Used for validating the css-code
- W3C Markup-validator
  - Used for validating the html-code

---

## Features

### Features Implemented

- Responsive mobile first design using a Bootstrap framework.
- User friendly with balanced use of image
- A Navbar with easy navigation that collapses on mobile displays
- Footer about section, quick links and socialmedia links
- Onscroll and parallax function on index page with text and pictures in a balanced porportion to allow users to interact and absorb important inforamtion
- Google map function on countrydata page with click function on country marker to open window to allow users to navigate and compare information between countries
- Links to external website explaining the background to some of the challenges we are facing today
- Links to aid organisation
- Social media links (not activated)

### Future Features

- Activate links to social media
- Add graphs and figures to Countrydata page with information on how factors at country level such poverty, emission etc.. changed over time
- Add list and form to index pages with option to search for aid organisation working in a specific field

---

## Version Control

### Version control for this repository is managed within GitHub and Gitpod using main as default branch for the project

- To start with a New Respository was created in GitHub, named OneminuteTwoTwelve
- OneminuteTwoTwelve was than linked to Gitpod pressing the green button Gitpod in the newly created Respository
- Gitpod was than used as an editor for creating the code in this project
- Python3 -m http.server was used in the Gitpod terminal to see newly made code in the webbrowser under port 8000
- New or modified files are staged using the git add . command in the Gitpod terminal
- The changes are committed using git commit -m command in the Gitpod terminal.
- The committed changes are pushed from Gitpod to GitHub using the git push command.
- The code was deployed in GitHub selecting main branch under setting in OneminuteTwoTwelve Respository

---

## Testing

- Aiming to use Lighthouse, google inspection tool, W3C validator(Html/CSS), manual testing will be presented as a pdf-protocol

### Fixed Bugs

#### I have encountered and fixed following bugs
- Unable to show google map due restriction in height of the element, solved by changing height of the dev
- Unable to show some function in google map due to overlaying footer element, changed the size of the footer section to avoid overlaying effects

### Known Bugs
- Depedending on device type picture and text are presented in an unsynchronized manor while scrolling through the index page, one solution could be to incoporate the image in onscroll function instead of using parallax effect in css
- Coordinates from trackCorona are only used in training purpose and i take no responsibility in the accuracy of the data

---
## Credits

### Image
- For my pages I used the images listed below. I collected the images from licenced or free to use sources.

#### Indexpage
- [Bckground image](assets/img/pexels-pixabay-60013.jpg) was downloaded from [Pexel.com](https://www.pexels.com/)
- [Info picture # 2](assets/img/pexels-guduru-ajay-bhargav-1043558.jpg) was downloaded from [Pexel.com](https://www.pexels.com/)
- [Info picture # 4](assets/img/pexels-guduru-ajay-bhargav-1043558.jpg) was downloaded from [Izismile.com](https://img.izismile.com/img/img3/20100729/640/barehands_clean_up_640_08.jpg)
- [Info picture # 6](assets//img/pexels-chris-leboutillier-929385.jpg) was downloaded from [Pexel.com](https://www.pexels.com/)
- [Info picture # 8](assets//img/pexels-karolina-grabowska-4207908.jpg) was downloaded from [Pexel.com](https://www.pexels.com/)
- [Footer image](assets//img/klipartz.com(6)_iceberg.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)

#### Countrydatapage
- [Footer image](assets//img/klipartz.com(6)_iceberg.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)

#### Countrydatapage
- [Header image](assets//img/klipartz.com_watersurface.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)
- [Smoke image](assets//img/klipartz.com_smoke.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)
- [Earth image](assets//img/pexels-pixabay-355935.jpg) was downloaded from [Pexel.com](https://www.pexels.com/)
- [Fire image](assets//img/klipartz.com(4)_fire.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)
- [Footer image](assets//img/klipartz.com(6)_iceberg.png) was downloaded from [Klipartz.com](https://www.klipartz.com/)

### Links

- I have extracted information or linked to following pages to provide the personas using my pages with useful information

* [worldbank.org](https://api.worldbank.org/v2/country/1W/indicator/SP.POP.TOTL/?format=json&date=2010:2020&per_page=5000) api for population density at global scale
* [worldbank.org](https://api.worldbank.org/v2/en/country/1W/indicator/SP.DYN.LE00.IN?format=json&per_page=100&source=2&date=2010:2020) api for life expectancy at global scale
* [worldbank.org](https://api.worldbank.org/v2/en/country/1W/indicator/SI.POV.DDAY?format=json&per_page=100&source=2&date=2010:2020) api for poverty at global scale
* [trackcorona](https://www.trackcorona.live/api/countries) api for country coordinates
* [worldbank.org](https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL/?format=json&date=2010:2020&per_page=5000) api for population density at country level
* [worldbank.org](https://api.worldbank.org/v2/en/country/all/indicator/SP.DYN.LE00.IN?format=json&per_page=3000&source=2&date=2010:2020) api for life expectancy at country level
* [worldbank.org](https://api.worldbank.org/v2/en/country/all/indicator/SI.POV.DDAY?format=json&per_page=3000&source=2&date=2010:2020) api for poverty at country level
* [worldbank.org](https://api.worldbank.org/v2/en/country/all/indicator/EN.ATM.CO2E.KT?format=json&per_page=20000&source=2) api for carbon emission at country level









### Content



#### Code
- Worldbank = for datacollection
- Google = Map Function


