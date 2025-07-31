//promise
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching Data...");
        setTimeout(() => {
        let data = {
            name: "Fahad",
            age: 20,
            city: "Golarchi"
        }
        let source = true;
        if (source) {
            console.log("Data fetched Successfully\n");
            resolve(data);
        }
        else {
            reject("Error in Fetching Data");

            }
        }, 2000);
    })
}

let response = fetchData().then((Data) => {
    console.log(Data);
    
} )
    .catch((error) => {
    console.error(error)
})

