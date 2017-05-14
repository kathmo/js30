const endpoint = 'https://rawgit.com/kathmo/autocomplete/master/assets/data/nyc_museums.json';

const museums = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(JSONdata => museums.push(...JSONdata.data));

// search for a match with museum names
function search(searchTerm, museums) {
    return museums.filter(museum => {
        const regex = new RegExp(searchTerm, 'gi');
        // museum name is 8th (9th) item (no keys here)
        return museum[8].match(regex);
    });
}

// display search suggestions on the page
function displaySuggestions() {
    const suggArr = search(this.value, museums);
    const html = suggArr.map(museum => {
        return `
            <li>
              <span class="name">${museum[8]}</span>
            </li>
        `;
    }).join(''); // turn array into a string
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displaySuggestions);
