const express = require('express');
const { uploadAdminCode, getAdminCodes, editAdminCode, deleteAdminCode, } = require('../controllers/admincode.Controllers');
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

router.post('/upload', (req, res, next) => {
    console.log(req.body); // Log the body
    console.log(req.files); // Log the files
    next(); // Proceed to the next middleware
}, upload.fields([{ name: 'image' }, { name: 'video' }]), (req, res) => {
    const { body, files } = req; // Collecting data from the request
    const data = {
        ...body, // Merging additional data from the request body
        image: files.image ? files.image[0] : undefined, // Adding image data
        video: files.video ? files.video[0] : undefined // Adding video data
    };
    uploadAdminCode(req, res, data); // Pass the combined data to the controller
});
router.get('/codes', getAdminCodes);
router.put('/edit/:id', upload.single('image'), editAdminCode);  
router.delete('/delete/:id', deleteAdminCode);   
// New route for video upload
// router.post('/upload/video', upload.single('video'), uploadVideo);

module.exports = router;
