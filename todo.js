let notes = availNotes();

let filteredNotes = {
  item: "",
};

renderNotes(notes, filteredNotes);

document.querySelector("#filtered_notes").addEventListener("input", function (e) {
    filteredNotes.item = e.target.value;
    renderNotes(notes, filteredNotes);
  });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  notes.push({
    title: e.target.elements.add.value,
  });

  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filteredNotes);
  e.target.elements.add.value = "";
});