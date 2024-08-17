const xhr = new XMLHttpRequest();
// Get request to access API
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/gengar');

// On successful load from API, set status 200, logging JSON
xhr.onload = () => {
    if (xhr.status === 200) { // Corrected the 'If' and added braces
        console.log(JSON.parse(xhr.responseText).name);
    }
};

// Error handling
xhr.onerror = () => console.log('Network Error!'); // Fixed typo in onerror and console.log
xhr.send();


