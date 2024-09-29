const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", () => addNote()); // Call addNote without parameters

function addNote(noteText = "") { // Default parameter for noteText
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
            <i class="fas fa-save save"></i>
            <i class="fas fa-trash trash"></i>
        </div>
        <textarea class="textarea">${noteText}</textarea> <!-- Set default value here -->
    `;

  const save = note.querySelector(".save");
  const trash = note.querySelector(".trash");
  const textarea = note.querySelector(".textarea");

  // Save note when the save button is clicked
  save.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event bubbling
    saveNotes(); // Call saveNotes without passing the event
  });

  // Remove note when the trash button is clicked
  trash.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event bubbling
    note.remove();
    saveNotes(); // Save after removal to update localStorage
  });

  main.appendChild(note);
}

// Save notes to localStorage
function saveNotes() {
  const notes = document.querySelectorAll(".note textarea");
  const data = Array.from(notes).map((note) => note.value);
  
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

// Load notes from localStorage on page load
function loadNotes() {
  const storedNotes = JSON.parse(localStorage.getItem("notes"));

  if (storedNotes) {
    storedNotes.forEach(noteText => {
      addNote(noteText); // Pass the noteText to the addNote function
    });
  }
}

loadNotes();
