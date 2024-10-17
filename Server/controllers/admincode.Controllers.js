const AdminCode = require('../model/AdminCodes');

// Upload new user code
const uploadAdminCode = async (req, res) => {
  try {
    const { title, description, sourceCodePath, githublink, html, css, js, useremail, previewLink, image, video } = req.body;

    const newCode = new AdminCode({
      title,
      description,
      imagePath: image ? image.path : undefined, // Use the new structure
      videoPath: video ? video.path : undefined, // Use the new structure
      sourceCodePath,
      githublink,
      html,
      css,
      js,
      useremail,
      previewLink
    });
    await newCode.save();
    res.status(201).send('Data uploaded successfully');
  } catch (error) {
    console.error('Error uploading data', error);
    res.status(500).send('Failed to upload data');
  }
};

// Fetch all user codes
const getAdminCodes = async (req, res) => {
  try {
    const codes = await AdminCode.find();
    res.status(200).json(codes);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Failed to fetch data');
  }
};

// Edit user code
const editAdminCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, sourceCodePath, githublink, html, css, js, previewLink } = req.body;
    const { image, video } = req.files || {};

    const updateData = {
      title,
      description,
      sourceCodePath,
      githublink,
      html,
      css,
      js,
      previewLink
    };

    // Update imagePath if a new image is provided
    if (image && image[0]) {
      updateData.imagePath = image[0].path;
    }
    // Update videoPath if a new video is provided
    if (video && video[0]) {
      updateData.videoPath = video[0].path;
    }

    const updatedCode = await AdminCode.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedCode) {
      return res.status(404).send('Code not found');
    }

    res.status(200).json(updatedCode);
  } catch (error) {
    console.error('Error updating data', error);
    res.status(500).send('Failed to update data');
  }
};

// Delete user code
const deleteAdminCode = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCode = await AdminCode.findByIdAndDelete(id);

    if (!deletedCode) {
      return res.status(404).send('Code not found');
    }

    res.status(200).send('Code deleted successfully');
  } catch (error) {
    console.error('Error deleting data', error);
    res.status(500).send('Failed to delete data');
  }
};

module.exports = { uploadAdminCode, getAdminCodes, editAdminCode, deleteAdminCode };
