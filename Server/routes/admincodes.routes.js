const express = require('express');
const { uploadAdminCode, getAdminCodes, editAdminCode, deleteAdminCode } = require('../controllers/admincode.Controllers');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'admin_codes',
  },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadAdminCode);
router.get('/codes', getAdminCodes);
router.put('/edit/:id', upload.single('image'), editAdminCode);  
router.delete('/delete/:id', deleteAdminCode);   

module.exports = router;
