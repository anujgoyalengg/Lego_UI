const express = require('express');
const { uploadUserCode, getUserCodes, editUserCode, deleteUserCode } = require('../controllers/usercode');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');

const router = express.Router();

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user_codes',
  },
});

// Initialize Multer with Cloudinary storage
const upload = multer({ storage: storage });

// Routes
router.post('/upload', upload.single('image'), uploadUserCode);   // Upload user code
router.get('/codes', getUserCodes);                              // Get all user codes
router.put('/edit/:id', upload.single('image'), editUserCode);  // Edit user code by ID
router.delete('/delete/:id', deleteUserCode);                  // Delete user code by ID 

module.exports = router;
