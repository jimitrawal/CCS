const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files should be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Generate unique filename
  }
});

const upload = multer({ storage: storage });

// Serve HTML form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission with file upload
app.post('/submit-form', upload.single('filename'), (req, res) => {
  // Access the uploaded image using req.file
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imagePath = req.file.path;
  const originalName = req.file.originalname;

  // Process the image further or store it in a permanent location
  // For now, just send back a response indicating success and the image path
  res.send(`Form submitted successfully!\nImage uploaded: ${originalName} (${imagePath})`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
