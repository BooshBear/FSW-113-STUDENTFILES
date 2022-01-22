// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number

class Bug {
    constructor() {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = document.getElementById("reportedBy").value;
        this.system = document.getElementById("system").value;
        this.subSystem = document.getElementById("subSystem").value;
        this.bugDesc = document.getElementById("bugDesc").value;
    }

    addBug(count) {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let listWrapper = document.getElementById("listWrapper")
        let div = document.createElement("div")
        div.setAttribute("class", "data");
        div.setAttribute("id", "data"+count)
        div.innerHTML = `Reported By: ${this.reportedBy}<br>
        System: ${this.system}<br>
        SubSystem: ${this.subSystem}<br>
        Bug Descrition: ${this.bugDesc}<br>
        <button id="${count}" onClick="del(this.id);">Delete</button>
        <button id="${count}" onClick="res(this.id);">Resolve</button>`
        listWrapper.appendChild(div);
    }

    deleteBug(cnt) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        let div = document.getElementById("data" + cnt)
        div.remove();
    }

    resolveBug(cnt) {
        // Create code that changes the appropriate bug report to a darker color
        let div = document.getElementById("data" + cnt)
        div.style.backgroundColor = "dimgrey"
        div.style.color = "rgb(34, 33, 33)"
    }
}

let count = 0;
function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    count += 1;
    console.log(count)
    const bugin = new Bug();
    bugin.addBug(count);
}
function del(cnt) {
    const bugin = new Bug();
    bugin.deleteBug(cnt);
}
function res(cnt) {
    const bugin = new Bug();
    bugin.resolveBug(cnt);
}
