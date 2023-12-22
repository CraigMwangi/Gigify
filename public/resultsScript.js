document.addEventListener("DOMContentLoaded", function () {
  fetchData().then((data) => {
    populateResults(data);
  });
});

function populateResults(data) {
  const tableBody = document
    .getElementById("resultsTable")
    .getElementsByTagName("tbody")[0];

  data.forEach((item) => {
    let row = tableBody.insertRow();
    row.addEventListener("click", () => {
      window.location.href = `profile.html?actId=${item.id}`;
    });

    row.insertCell(0).innerHTML = item.actName;
    row.insertCell(1).innerHTML = item.location;
    row.insertCell(2).innerHTML = item.genre;
    row.insertCell(3).innerHTML = item.availability;
    row.insertCell(4).innerHTML = item.category;
    row.style.cursor = "pointer";
  });
}

// Example fetchData function
async function fetchData() {
  return [
    {
      id: 1,
      actName: "Archie Mooreston",
      location: "Whitechapel",
      genre: "Jazz",
      availability: "2024-07-15",
      category: "Musician",
    },
    {
      id: 2,
      actName: "The Old George",
      location: "Shoreditch",
      genre: "Jazz",
      availability: "2024-07-15",
      category: "Venue",
    },
    {
      id: 3,
      actName: "Marqius of Lewisham",
      location: "Lewisham",
      genre: "Hip-Hop",
      availability: "2024-07-23",
      category: "Venue",
    },
    {
      id: 4,
      actName: "Abby Cook",
      location: "New Cross",
      genre: "Soul",
      availability: "2024-07-23",
      category: "Musician",
    },
    {
      id: 5,
      actName: "Adam Day",
      location: "Kent",
      genre: "R&B",
      availability: "2024-07-28",
      category: "Musician",
    },
  ];
}
