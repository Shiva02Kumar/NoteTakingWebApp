shownotes();

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("inNote");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card">
            <h1>Note ${index + 1}</h1>
            <p>${element}</p>
            <button id="${index}" onclick="delnote(this.id)" class="delbtn">Delete Note</button>
        </div>
        `;
    });
    let noteselem = document.getElementById("allNotes");
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;
    }
    else {
        noteselem.innerHTML = `Nothing To Show!! Use "Add a note" section above to add notes`;
    }
}

function delnote(index) {
    console.log("i am deleting = ", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById("search");
search.addEventListener("input", function(){
    let inval = search.value.toLowerCase();
    let card = document.getElementsByClassName("card");
    Array.from(card).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});