const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
var button = document.getElementById("submit");
button.addEventListener("click", function() { 
    const iput = document.querySelectorAll("input")
    const response = [...iput];
    chkLang(response);
})

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    for (let i = 0; i < langs.length; i++) {
        if (langs[i].value === lang) {
            result = true;
        }
    }

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}