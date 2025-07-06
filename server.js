// server.js

const express = require('express');
const app = express();
const port = 3000;

// Dummy data: A list of lessons
const lessons = [
  { id: 1, title: "Art Class", description: "Fun art class", price: 50, availableStock: 7, location: "London" },
  { id: 2, title: "Biology Class", description: "Fun biology adventures", price: 60, availableStock: 3, location: "Birmingham" },
  { id: 3, title: "Business Class", description: "Learn business fundamentals", price: 40, availableStock: 7, location: "Manchester" },
  { id: 4, title: "Chemistry Class", description: "Explore chemical reactions", price: 55, availableStock: 4, location: "Leeds" },
  { id: 5, title: "Physics Class", description: "Discover the laws of nature", price: 45, availableStock: 6, location: "Sheffield" },
  { id: 6, title: "English Class", description: "Improve language skills", price: 50, availableStock: 8, location: "Liverpool" },
  { id: 7, title: "Sport Science Class", description: "Stay active and fit", price: 60, availableStock: 9, location: "Glasgow" },
  { id: 8, title: "Computer Science Class", description: "Learn coding and programming", price: 70, availableStock: 5, location: "Bristol" },
  { id: 9, title: "History Class", description: "Learn history fundamentals", price: 65, availableStock: 4, location: "Nottingham" },
  { id: 10, title: "Maths Class", description: "Learn advanced math", price: 75, availableStock: 3, location: "Leicester" }
];

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a route to fetch all lessons
app.get('/lessons', (req, res) => {
  res.json(lessons); // Send lessons data as a response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
