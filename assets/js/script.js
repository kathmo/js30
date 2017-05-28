const endpoint = 'https://cdn.rawgit.com/kathmo/search-suggest/0fd2e9dd/assets/data/nyc_museums.json';

const museums = [];

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
    .then(blob => blob.json())
    .then(JSONdata => museums.push(...JSONdata.data));

// search for a match with museum names
function search(searchTerm, museums) {
    return museums.filter(museum => {
        const regex = new RegExp(searchTerm, 'gi');
        // museum name is the 8th (9th) item (no keys here)
        console.log(museum);
        return museum[8].match(regex);
    });
}

// display search suggestions on the page
function displaySuggestions() {
    const suggArr = search(this.value, museums);
    const html = suggArr.map(museum => {
        const regex = new RegExp(this.value, 'gi');
        // highlight the part of the results that matches the search term
        const museumName = museum[8].replace(regex,
            `<span class="highlight">${this.value}</span>`);
        // if the museum has a website, then link to it
        if (museum[11]) {
            return `
              <li>
                <span class="name"><a href="${museum[11]}">${museumName}</a></span>
                <span class="number">${museum[10]}</span>
              </li>
            `;
        } else {
            return `
              <li>
                <span class="name">${museumName}</span>
                <span class="number">${museum[10]}</span>
              </li>
            `;
        }
    }).join(''); // turn array into a string
    suggestions.innerHTML = html;
}

searchInput.addEventListener('keyup', displaySuggestions);
