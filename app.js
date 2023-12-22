const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "M0R3band$1",
  database: "gigify",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  const { category, email, fullName, birthday, location, username, password } =
    req.body;

  if (
    !category ||
    !email ||
    !fullName ||
    !birthday ||
    !location ||
    !username ||
    !password
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if username already exists
  connection.query(
    "SELECT username FROM users WHERE username = ?",
    [username],
    async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Server error" });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: "Username already taken" });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertQuery =
          "INSERT INTO users (category, email, fullName, birthday, location, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [
          category,
          email,
          fullName,
          birthday,
          location,
          username,
          hashedPassword,
        ];

        connection.query(insertQuery, values, (insertError, insertResult) => {
          if (insertError) {
            console.error("Database error:", insertError);
            return res.status(500).json({ message: "Server error" });
          }
          res.status(200).json({ message: "User registered successfully" });
        });
      } catch (hashingError) {
        console.error("Hashing error:", hashingError);
        res.status(500).json({ message: "Error processing your request" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        // Passwords match
        res.json({ success: true, message: "Login successful" });
      } else {
        // Passwords don't match
        res.status(401).json({ message: "Invalid username or password" });
      }
    });
  });
});

app.post("/send-contact-message", (req, res) => {
  const { subject, description, email } = req.body;

  console.log(
    `Email sent with details: Subject: ${subject}, Description: ${description}, From: ${email}`
  );

  res.json({ message: "Email sent successfully" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
