function fetchData(callback) {
    setTimeout(() => {
        const data = "Data from server";
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); 


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data from server";
            resolve(data);
            //reject("Error fetching data"); 
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data)) 
    .catch(error => console.error(error)); 




    async function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = "Data from server";
                resolve(data);
                // reject("Error fetching data"); 
            }, 1000);
        });
    }
    
    async function displayData() {
        try {
            const data = await fetchData();
            console.log(data); 
        } catch (error) {
            console.error(error); 
        }
    }
    
    displayData();
    