// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
let selSystem = document.getElementById("system");
getSystems(0, selSystem)
function getSystems(parentID, dom) {
    //- This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    //- Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    //- After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    //- those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    //- this new array and the DOM element to the "populateDD" function (below).

    fetch("data.json")
    .then(res => res.json())
    .then(function (data) {
        let arr = []
        for (let i = 0; i < data.systems.length; i++) {
            if (data.systems[i].parentID == parentID) {
                arr.push(data.systems[i])
            }
        }
        populateDD(arr, dom)
    })
    .catch(err => console.log(err))
    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 
}

function populateDD(arry, dom) {
    //- This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    //- appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    //- function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    //- the select element's options using the sysName and sysID from the passed in array (see week five).
    let option = document.createElement("option");
    option.innerText = "Select an Item";
    dom.appendChild(option)
    for (let i = 0; i < arry.length; i++) {
        let sysName = arry[i].sysName
        let sysID = arry[i].sysID
        let option = document.createElement("option")
        option.setAttribute("id", `${sysID}`);
        option.innerText = sysName;
        dom.appendChild(option);
    }
}

document.querySelector('#system').addEventListener(
    // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.
    "change", function () {
        let selSystem = document.getElementById("system")
        let selected = selSystem.options[selSystem.selectedIndex].id
        let subSystem = document.getElementById("subSystem")
        getSystems(selected, subSystem)
    }
)
