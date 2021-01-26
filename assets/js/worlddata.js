// World data input worldpopulation

fetch('https://api.worldbank.org/v2/country/1W/indicator/SP.POP.TOTL/?format=json&date=2010:2020&per_page=5000')
            .then(function (response) {
                return response.json();
            })
            .then(function (popdata) {
                appendpopData(popdata);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

            sumWorldPop = 0;

     function appendpopData(popdata) {
            document.getElementById("Worldpop").innerHTML = 'World population' + ' [ ' + popdata[1][1].date + ' ]: ' + (popdata[1][1].value/1000000000).toFixed(2) + '  billion people';
       }

// Worldbank input mean world mean life expectence

fetch("https://api.worldbank.org/v2/en/country/1W/indicator/SP.DYN.LE00.IN?format=json&per_page=100&source=2&date=2010:2020")
          .then(function (resp) {
                return resp.json();
            })
            .then(function (agedata) {
                appendageData(agedata);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

        function appendageData(agedata) {
        document.getElementById("ageData").innerHTML = 'Mean life expectence' + ' [ ' + agedata[1][2].date + ' / World ]: ' + agedata[1][2].value.toFixed(1) + '  year';
        }

        // Worldbank input procentage of world people living on less 1.9$ a day
        fetch("https://api.worldbank.org/v2/en/country/1W/indicator/SI.POV.DDAY?format=json&per_page=100&source=2&date=2010:2020")

            .then(function (res) {
                return res.json();
            })
            .then(function (povertydata) {
                appendagePovertyData(povertydata);
            })
            .catch(function (err1) {
                console.log('error: ' + err1);
            });

        function appendagePovertyData(povertydata) {
         document.getElementById("povertyData").innerHTML = 'Poverty headcount ratio at $1.90 a day (% of population)' + ' [ ' + povertydata[1][3].date + ' / World ]: ' + povertydata[1][3].value.toFixed(2) + '  %';
        }


        // Worldbank input CO2 emisson kilo tonnes / year
        
        fetch("https://api.worldbank.org/v2/en/country/1W/indicator/EN.ATM.CO2E.KT?format=json&per_page=20000&source=2")

             .then(function (respnse) {
                return respnse.json();
            })
            .then(function (CO2data) {
                appendageCO2Data(CO2data);
                   })
            .catch(function (err2) {
                console.log('error: ' + err2);
            });

        function appendageCO2Data(CO2data) {
        document.getElementById("CO2Data").innerHTML = 'Annual carbon dioxide emissions '+ '[ ' + CO2data[1][4].date + ' / World ]: ' + CO2data[1][4].value.toFixed(2) + '  Kilo tonnes';        //Carbon dioxide emissions
        }