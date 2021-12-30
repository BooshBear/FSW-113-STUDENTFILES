// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
function fetchData(){
    getFromSWAPI();
}

function getFromSWAPI() {
    // assign values to any necessary variables
    let queryType = document.getElementById("queryType").value
    let itemID = document.getElementById("itemID").value

    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
        console.log(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
// labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.


function updateInfo(data) {
    let dataLabel1 = document.getElementById("dataLabel1")
    let dataValue1 = document.getElementById("dataValue1")
    let dataLabel2 = document.getElementById("dataLabel2")
    let dataValue2 = document.getElementById("dataValue2")

    dataLabel1.innerHTML = "Name: "
    dataValue1.innerHTML = data.name;
    dataLabel2.innerHTML = "Height: "
    dataValue2.innerHTML = data.height;
}