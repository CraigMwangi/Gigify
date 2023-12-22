document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      subject: document.getElementById("subject").value,
      description: document.getElementById("description").value,
      email: document.getElementById("email").value,
    };

    fetch("/send-contact-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Message sent successfully.");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  });
