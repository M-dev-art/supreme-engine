// finding the elements and giving them eventListeners
let inputOpen = false
let room = document.querySelector("#createHere");

let headerButton = document.querySelector("#h1")
headerButton.addEventListener("click", function() { manageTheWholeThing("h1") })
//headerButton.addEventListener("mouseover", function() { manageTheWholeThing("h1") })

let paragraphButton = document.querySelector("#p")
paragraphButton.addEventListener("click", function() { manageTheWholeThing("p") })

let clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", function() {
    room.innerHTML = "";
    inputOpen = false
})

//functions
function manageTheWholeThing(type) {
    if (inputOpen == false) {
        inputOpen = true;
        let newForm = createForm();
        room.appendChild(newForm);
        let submitButton = document.querySelector("#done");
        let submitInput = document.querySelector("#submitInput");
    
        let valueOfInput;
        submitButton.addEventListener("click", function() {
            let valueOfInput = submitInput.value;
            writeNewElement(type, valueOfInput);
        })
    } else {
        alert("You may only edit one text at a time.")
    }
}

//The actual elements are getting printed here
function writeNewElement(type, text) {
    let newElementToWrite = createAnyElement(type, {
        class: "mx-2"
    });
    newElementToWrite.innerHTML = text;
    room.appendChild(newElementToWrite);

    let formGroup = document.querySelector("#submitInput").parentElement;
    formGroup.remove()

    inputOpen = false
}

function createAnyElement(type, props) {
    
    let newElement = document.createElement(type);

    for (let i in props) {
        newElement.setAttribute(i, props[i]);
    }
    
    return newElement
}

function createForm() {
    let newInput = createAnyElement("textarea", {
        class: "form-control",
        placeholder: "Type your text Here!",
        id: "submitInput",
        rows: "4"
    });

    let newButton = createAnyElement("button", {
        type: "button",
        class: "btn btn-success mt-1",
        id: "done"
    });
    newButton.innerHTML = "Done"

    let formGroup = createAnyElement("div", {
        class: "my-2"
    });

    formGroup.appendChild(newInput);
    formGroup.appendChild(newButton);

    return formGroup
}