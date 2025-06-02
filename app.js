// Basic example using `fetch`
const searchBills = async (keyword) => {
    const response = await fetch(`https://api.congress.gov/v3/bill?query=${keyword}&api_key=9lIypQcPVxgpd9rvrloDeaWEALfoe0EdNuefN5lk`);
    const data = await response.json();
    console.log(data); // Let’s inspect this to know what to display
  };

