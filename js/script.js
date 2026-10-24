
//weatherstack API key:
//kInEuy5XoQvYJSde

let endpoint = "https://my.meteoblue.com/images/meteogram_14day?lat=35.2621&lon=-81.1873&asl=245&tz=America%2FNew_York&apikey=kInEuy5XoQvYJSde&format=png&dpi=72&lang=en&temperature_units=F&precipitation_units=inch&windspeed_units=mph&location_name=Gastonia"

async function getWeather() {
        const response = await fetch(endpoint);
        // 1. Extract the raw binary image data as a Blob object
        const imageBlob = await response.blob(); 
        // 2. Create the temporary browser URL pointing to that Blob
        const imageObjectURL = URL.createObjectURL(imageBlob);
        document.getElementById("weather-image").src = imageObjectURL;
        console.log(imageObjectURL);
    // console.log(imageObjectURL);
    // let images = data.data;
    // return images;
}

const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
// getWeather()

const API_KEY = '58213696-9cf5edc2b61fe2008f50129f0';
const query = encodeURIComponent('chicken tenders and fries');
const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=3`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.hits && data.hits.length > 0) {
      // Grabs only the very first image object from the results array
      const singleImage = data.hits[0];
      document.getElementById("dining-image").src = singleImage.webformatURL;

      console.log("Image URL:", singleImage.webformatURL); 
      console.log("Author:", singleImage.user);
    } else {
      console.log("No images found.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));

fetch(url);
