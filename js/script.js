
//weatherstack API key:
//kInEuy5XoQvYJSde

let endpoint = "https://my.meteoblue.com/images/meteogram_14day?lat=35.2621&lon=-81.1873&asl=245&tz=America%2FNew_York&apikey=kInEuy5XoQvYJSde&format=png&dpi=72&lang=en&temperature_units=F&precipitation_units=inch&windspeed_units=mph&location_name=Gastonia"

async function getWeather() {
    const response = await fetch(endpoint);
    const data = await response;
    const imageObjectURL = URL.createObjectURL(data.blob);
    // console.log(imageObjectURL);
    // let images = data.data;
    // return images;
}

// getWeather()

// let giphyContainer = document.querySelector("#gif-container");
// let button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", async function () {
    // let images = await getGiphys();
    // console.log(images);

    // giphyContainer.innerHTML = "";
    // // loop through images array
    // images.forEach(function (gif) {
    //     giphyContainer.innerHTML += `<img src="${gif.images.fixed_height.url}" class="col-3 mb-3"/>`;
    // });
});




// {
//     "request": {
//         "type": "City",
//         "query": "North Belmont, United States of America",
//         "language": "en",
//         "unit": "m"
//     },
//     "location": {
//         "name": "North Belmont",
//         "country": "United States of America",
//         "region": "North Carolina",
//         "lat": "35.272",
//         "lon": "-81.048",
//         "timezone_id": "America/New_York",
//         "localtime": "2026-10-14 18:36",
//         "localtime_epoch": 1792002960,
//         "utc_offset": "-4.0"
//     },
//     "current": {
//         "observation_time": "10:36 PM",
//         "temperature": 27,
//         "weather_code": 113,
//         "weather_icons": [
//             "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//         ],
//         "weather_descriptions": [
//             "Sunny"
//         ],
//         "astro": {
//             "sunrise": "07:30 AM",
//             "sunset": "06:50 PM",
//             "moonrise": "11:34 AM",
//             "moonset": "09:04 PM",
//             "moon_phase": "Waxing Crescent",
//             "moon_illumination": 11
//         },
//         "air_quality": {
//             "co": "223",
//             "no2": "6.2",
//             "o3": "105",
//             "so2": "1",
//             "pm2_5": "6.6",
//             "pm10": "6.7",
//             "us-epa-index": "1",
//             "gb-defra-index": "1"
//         },
//         "wind_speed": 6,
//         "wind_degree": 248,
//         "wind_dir": "WSW",
//         "pressure": 1016,
//         "precip": 0,
//         "humidity": 55,
//         "cloudcover": 2,
//         "feelslike": 27,
//         "uv_index": 0,
//         "visibility": 10,
//         "is_day": "yes"
//     }
// }