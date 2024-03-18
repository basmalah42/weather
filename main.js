

var allItems = [];

days("cairo");
document.querySelector(".title").classList.add("class","d-none");
async function days( country) {
   
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3aafbbf1d3134b8a91e163454240501&q=${country}&days=3`);
    allItems = await response.json();
    get();
    getNextDay();
    document.querySelector(".title").classList.remove("class","d-none");
}


function get() {
    document.getElementById("locationName").innerHTML = allItems.location.name;
    document.getElementById("imgWeather1").setAttribute("src", "https:" + allItems.current.condition.icon);
    document.getElementById("day1").innerHTML = getDayName(new Date(allItems.forecast.forecastday[0].date));
    document.getElementById("date").innerHTML = allItems.forecast.forecastday[0].date;
    document.getElementById("day2").innerHTML = getDayName(new Date(allItems.forecast.forecastday[1].date));
    document.getElementById("day3").innerHTML = getDayName(new Date(allItems.forecast.forecastday[2].date));
    document.getElementById("temp").innerHTML = allItems.current.temp_c + "<sup>o</sup>C";
    document.getElementById("case").innerHTML = allItems.current.condition.text;

}


function getNextDay() {
    document.getElementById("secondDayImg").setAttribute("src", "https:" + allItems.forecast.forecastday[1].day.condition.icon);
    document.getElementById("thirdDayImg").setAttribute("src", "https:" + allItems.forecast.forecastday[2].day.condition.icon);
    document.getElementById("maxTemp1").innerHTML = allItems.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C";
    document.getElementById("minTemp1").innerHTML = allItems.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>C";
    document.getElementById("maxTemp2").innerHTML = allItems.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>C";
    document.getElementById("minTemp2").innerHTML = allItems.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>C";
    document.getElementById("case1").innerHTML = allItems.forecast.forecastday[1].day.condition.text;
    document.getElementById("case2").innerHTML = allItems.forecast.forecastday[2].day.condition.text;
}


function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}