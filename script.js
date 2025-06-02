const API_KEY = 'YdJQmavXHQgZMTdRv8AzP4LbMjOFFzEJXPKn7mn4';
const API_URL = 'https://api.congress.gov/v3/bills?api_key=' + '9lIypQcPVxgpd9rvrloDeaWEALfoe0EdNuefN5lk';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data to see if it's working
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
