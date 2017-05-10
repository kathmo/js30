const endpoint = 'https://rawgit.com/kathmo/autocomplete/master/assets/data/nyc_museums.json';

const museums = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(JSONdata => museums.push(...JSONdata.data));

function search(searchTerm, museums) {
    return museums.filter(museum => {
        const regex = new RegExp(searchTerm, 'gi');
        // museum name is 8th (9th) item (no keys here)
        return museum[8].match(regex);
    });
}
