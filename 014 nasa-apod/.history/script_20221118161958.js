// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 Images from NASA API
async function getNasaPictures() {
  try {
    const response = awati fetch(apiUrl);
    resultsArray = await

  } catch (error) {
    // Catch Error Here

  }
}
