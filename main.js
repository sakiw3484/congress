async function searchBill() {
    const input = document.getElementById("billInput").value
    const match = input.match(/(hr|s)(\d+)/); // matches 'hr21' or 's123'

            if (!match) {
                alert('Please enter a bill like "hr21" or "s123".');
                return;
            }

            const type = match[1];
            const number = match[2];
    const congress = 119; // hardcoded for now

    const url = `https://api.congress.gov/v3/bill/${congress}/${type}/${number}?api_key=9lIypQcPVxgpd9rvrloDeaWEALfoe0EdNuefN5lk`;


    try {
        const res = await fetch(url);
        const data = await res.json();

        // Display info nicely
        const bill = data.bill;
        const resultDiv = document.getElementById('results');
        
        resultDiv.innerHTML = `
        <div class="bill-info">

        <h2>${bill.title}</h2>
        <p><strong>Type:</strong> ${bill.type}</p>
        <p><strong>Bill Number:</strong> ${bill.number}</p>
        <p><strong>Congress:</strong> ${bill.congress}</p>
        <p><strong>Introduced Date:</strong> ${bill.introducedDate}</p>
        
        </div>
        `;
    } catch (err) {
        console.error(err);
        document.getElementById('results').innerHTML = `<p>Error fetching bill details.</p>`;
    }

   
}