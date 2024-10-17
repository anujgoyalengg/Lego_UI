const UserCode = require('../model/UserCodes');

// Upload new user code
const uploadUserCode = async (req, res) => {
  try {
    const { title, description, sourceCodePath, githublink, html, css, js, useremail } = req.body;
    const imagePath = req.file.path;

    const newCode = new UserCode({
      title,
      description,
      imagePath,
      sourceCodePath,
      githublink,
      html,
      css,
      js,
      useremail,
    });
    await newCode.save();
    res.status(201).send('Data uploaded successfully');
  } catch (error) {
    console.error('Error uploading data', error);
    res.status(500).send('Failed to upload data');
  }
};

// Fetch all user codes
const getUserCodes = async (req, res) => {
  try {
    const codes = await UserCode.find();
    res.status(200).json(codes);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Failed to fetch data');
  }
};

// Edit user code
const editUserCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, sourceCodePath, githublink, html, css, js, useremail } = req.body;
    const imagePath = req.file ? req.file.path : undefined; // Check if file upload is provided

    const updateData = {
      title,
      description,
      sourceCodePath,
      githublink,
      html,
      css,
      js,
      useremail,
    };

    // Only update imagePath if a new image is provided
    if (imagePath) {
      updateData.imagePath = imagePath;
    }

    const updatedCode = await UserCode.findByIdAndUpdate(id, updateData, { new: true });

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
const deleteUserCode = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCode = await UserCode.findByIdAndDelete(id);

    if (!deletedCode) {
      return res.status(404).send('Code not found');
    }

    res.status(200).send('Code deleted successfully');
  } catch (error) {
    console.error('Error deleting data', error);
    res.status(500).send('Failed to delete data');
  }
};

module.exports = { uploadUserCode, getUserCodes, editUserCode, deleteUserCode };
