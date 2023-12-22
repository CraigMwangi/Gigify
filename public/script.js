function search(event) {
  event.preventDefault();

  // Get form values
  const acts = document.getElementById("acts").value;
  const location = document.getElementById("location").value;
  const genre = document.getElementById("genre").value;
  const availability = document.getElementById("availability").value;

  console.log("Search Parameters:", { acts, location, genre, availability });
  document.getElementById("searchResults").textContent =
    "Search submitted. Check console for parameters.";
}
