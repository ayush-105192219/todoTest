const availNotes = function () {
    let notesJson = localStorage.getItem("notes");
  
    if (notesJson !== null) {
      return JSON.parse(notesJson);
    } else {
      return [];
    }
  };
  
const generateDOM = function(note){
    const El = document.createElement("div")

    const span = document.createElement("span");
    const button = document.createElement("button")
   
    // appending notes
    if(note.title.length > 0){
      span.textContent = note.title;}
      else{
        span.textContent = "UnNamed Notes"
      }
      El.appendChild(span)

      document.querySelector("#note").appendChild(El)
     }
 
const renderNotes = function (notes, filteredNotes) {
    let filter0 = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filteredNotes.item.toLowerCase());
    });


    document.querySelector("#notification").textContent = `You have ${filter0.length} todo`;
    document.querySelector("#note").innerHTML = "";
 
    filter0.forEach(function (note) {
      generateDOM(note) 
    });
  };
  