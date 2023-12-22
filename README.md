Gigify
README for Gigify Node.js Application

Introduction:
This README provides instructions for setting up and running the Gigify Node.js application. Gigify is a web application built using Node.js, Express, and MySQL, designed for musicians and venue owners to connect and manage gigs.

Prerequisites:
Before you begin, ensure you have the following installed:

Node.js (Download from Node.js website)
MySQL (Download from MySQL website)
A MySQL client (like MySQL Workbench or phpMyAdmin) for database setup
Installation
Clone or Download the Repository

If you have git installed, you can clone the repository using:

git clone CraigMwangi/Gigify

Alternatively, download and extract the ZIP file of the project.

Navigate to the Project Directory

Open your terminal or command prompt.

Change to the project directory:

cd Gigify

Install Dependencies

Run the following command to install the required Node.js modules:

npm install

Database Setup

Create a new MySQL database named gigify.
Use the provided SQL script to create necessary tables.
Configure Environment Variables

Set up your database connection details:
Host: localhost
User: root
Password: M0R3band$1
You can change these details in the connection configuration within the app.
Start the Server

Run the Node.js server with:

npm start

The server will start on localhost with the default port 3001.

Usage
Open your web browser and navigate to http://localhost:3001.
You should see the Gigify application running.
The application supports user registration, login, and sending contact messages.

Features
User Registration: Register new users with various details.
User Login: Log in functionality for existing users.
Contact Message Sending: Simulate sending a contact message.

Troubleshooting
Ensure all Node.js dependencies are correctly installed.
Verify that MySQL is running and accessible.
Check that the database gigify and all required tables are set up correctly.
Review error logs for specific error messages.
