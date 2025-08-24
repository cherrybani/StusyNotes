document.addEventListener("DOMContentLoaded", function () {
  const noteInput = document.getElementById("noteInput");
  const postBtn = document.getElementById("postBtn");
  const postContainer = document.getElementById("postContainer");

  // kalau nggak nemu elemen, stop
  if (!noteInput || !postBtn || !postContainer) return;

  // key storage berdasarkan nama file html
  const pageKey = "notes_" + location.pathname.split("/").pop();

  let notes = JSON.parse(localStorage.getItem(pageKey)) || [];

  function renderNotes() {
    postContainer.innerHTML = "";
    notes.forEach((note, index) => {
      const noteElement = document.createElement("div");
      noteElement.classList.add("note-item");

      const text = document.createElement("p");
      text.innerText = note; // newline kebaca karena CSS pakai pre-wrap

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✕";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function () {
        notes.splice(index, 1);
        localStorage.setItem(pageKey, JSON.stringify(notes));
        renderNotes();
      };

      noteElement.appendChild(deleteBtn);
      noteElement.appendChild(text);
      postContainer.appendChild(noteElement);
    });
  }

  renderNotes();

  postBtn.addEventListener("click", function () {
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
      notes.push(noteText);
      localStorage.setItem(pageKey, JSON.stringify(notes));
      renderNotes();
      noteInput.value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = {
    instagram: "https://instagram.com/rybaniism",
    twitter: "https://x.com/lihatapaantuch",
    email: "mailto:rybaniee.study@gmail.com"
  };

  // Instagram
  document.querySelectorAll("a[href=''][data-type='instagram']")
    .forEach(a => a.href = links.instagram);

  // Twitter
  document.querySelectorAll("a[href=''][data-type='twitter']")
    .forEach(a => a.href = links.twitter);

  // Email
  document.querySelectorAll("a[href=''][data-type='email']")
    .forEach(a => a.href = links.email);
});
