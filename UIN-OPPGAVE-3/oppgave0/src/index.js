// Oppgave 1
const removeButton = document.getElementById("remove-btn");
removeButton.addEventListener("click", removeText);

function removeText(){
    textBeingRemoved.remove();
}

const textBeingRemoved = document.getElementById("remove");

// Oppgave 2
const changeButton = document.getElementById("change-btn");
changeButton.addEventListener("click", changeText);

function changeText(){
    document.getElementById("change").innerHTML = ("Test test test");
}

// Oppgave 3
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// https://www.devhandbook.com/javascript/dom/event-target/
const inputBox = document.getElementById("input"); //Input-boksen
inputBox.addEventListener("input", updateValue);

const inputText = document.getElementById("input-text");//Teksten som vises

function updateValue(e){
    inputText.innerText = e.target.value; 
}

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const listPrintButton = document.getElementById("write-list");
listPrintButton.addEventListener("click", printList);

function printList(){
    for (let i = 0; i < myList.length; i++){
        document.getElementById("ul").innerHTML += "<li>" + myList[i] + "</li>";
    }
}

// Oppgave 5
// https://www.w3schools.com/js/js_htmldom_nodes.asp
const makeElementButton = document.getElementById("create");
makeElementButton.addEventListener("click", makeElement);

function makeElement(){
    let elementType = document.getElementById("select").value;
    const type = document.createElement(elementType); //bestemmer HTML tag fra dropdown
    const text = document.getElementById("text"); //vi targeter input feltet
    const node = document.createTextNode(text.value) //henter verdi fra input feltet og lagrer det som node
    type.appendChild(node); //legger inn node (teksten) inn under type (taggen) som child
    document.getElementById("placeholder").appendChild(type); //legger inn type(taggen) inn under placeholder(div) som child
}

// Oppgave 6
// https://www.w3schools.com/JSREF/met_node_removechild.asp
const deleteListButton = document.getElementById("remove-li");
deleteListButton.addEventListener("click", deleteListItem);

const list = document.getElementById("list");

function deleteListItem(){
    list.removeChild(list.firstElementChild); //bruk first/lastElementchild for å unngå dobbeltklikk pga linebreak in HTML
}

// Oppgave 7
const nameSubmitButton = document.getElementById("order");
const nameField = document.getElementById("name");
nameField.addEventListener("input", lengthCheck);

function lengthCheck(e){
    if (e.target.value.length > 4){
        nameSubmitButton.disabled = true;
    }
    else {
        nameSubmitButton.disabled = false;
    }
    //e.target.value.length forklaring: e.target er inputfeltet, value er innholdet i feltet og length er lengden på innholdet
}

// Oppgave 8
// https://www.programiz.com/javascript/examples/even-odd
const colorListButton = document.getElementById("color");
colorListButton.addEventListener("click", addColors);

const colorList = document.querySelectorAll(".children li");

function addColors(){  
    let color = "green";
    for (i = 0; i < colorList.length; i++) {
        if (i % 2 == 0) {
            color = "green";
        } else {
            color = "pink";
        }
        colorList[i].style.border = "2px solid " + color;
    }
}

