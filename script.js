$(document).ready(function(){
    var appid = "0cbb9ca46e3a74d91c3901d2c3bf89b7";
    var $searchInput = $(".search");
    var $searchBtn = $("#searchBtn");
    var $currentDay = $(".jumbotron");
    var $fiveDayForecast = $(".fiveDayForecast");

   
    

    
    // $("#searchBtn").on("click", function(event) {
    //     event.preventDefault()
    //     var search = $($searchInput).val().trim()
    //     getWeatherForCity(search)
    // })

    function getWeatherForCity(city) {
        $(".jumbotron").empty()
        $.ajax({
            method:"GET", 
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=0cbb9ca46e3a74d91c3901d2c3bf89b7"
        }) .then(function(res) {
            console.log(res.main.temp);
            var temp = $("<p>").text("Temperature: " + res.main.temp)
            var humidity = $("<p>").text("Humidity: " + res.main.humidity)
            var cityName = $("<h1>").text(res.name)
            $(".jumbotron").append(cityName,temp,humidity)
           
        });

        $searchBtn.on("click", function(){
            if($searchBtn.val()){
                getWeatherForCity($searchInput.val());
                $searchInput.val("");
            }
        });
     
    }
   
    

     //$cardBody.hide();
     //$fiveDayForecast.hide();
});







//console.log(JSON.stringify(new Date()).split(""));

//var todaysDate = JSON.stringify(new Date()).split("");
//var splitDate = todaysDate.split("")
