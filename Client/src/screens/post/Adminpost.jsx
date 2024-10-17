import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../Styles/adminpost.module.css';

function Adminpost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [sourceCodePath, setSourceCodePath] = useState('');
  const [githublink, setgithublink] = useState('');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [previewLink, setPreviewLink] = useState('');  // Added state for Preview Link
  const [video, setVideo] = useState(null);            // Added state for Video
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const [videoName, setVideoName] = useState('No video chosen');  // Added state for Video Name

  // Handle image file selection
  const handleFileChange = (event) => {
    const input = event.target;
    if (input.files.length > 0) {
      setFileName(input.files[0].name);
      setImage(input.files[0]);
    } else {
      setFileName('No file chosen');
    }
  };

  // Handle video file selection
  const handleVideoChange = (event) => {
    const input = event.target;
    if (input.files.length > 0) {
      setVideoName(input.files[0].name);
      setVideo(input.files[0]);
    } else {
      setVideoName('No video chosen');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('sourceCodePath', sourceCodePath);
    formData.append('githublink', githublink);
    formData.append('html', html);
    formData.append('css', css);
    formData.append('js', js);
    formData.append('previewLink', previewLink);  // Added previewLink to formData
    formData.append('video', video);              // Added video to formData

    try {
      await axios.post('http://localhost:500/api/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Your code is uploaded');
    } catch (error) {
      console.error('Error uploading data', error);
      setMessage('Failed to upload data');
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <motion.div
      className={styles.cointaner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.formdiv}>
        <h1 className={styles.header}>Upload Form</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.maindiv}>
            <div className={styles.leftdiv}>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.title}>Title :</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                />
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.sourcecodepath}>Source Code Path :</label>
                <input
                  type="text"
                  value={sourceCodePath}
                  onChange={(e) => setSourceCodePath(e.target.value)}
                  placeholder="Source Code Path"
                  required
                />
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.sourcecodepath}>Git Hub Link :</label>
                <input
                  type="text"
                  value={githublink}
                  onChange={(e) => setgithublink(e.target.value)}
                  placeholder="Git Hub Link"
                  required
                />
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.file}>Image Upload :</label>
                <div className={styles.fileInputWrapper}>
                  <input type="file" className={styles.fileInput} id="file" onChange={handleFileChange} />
                  <label htmlFor="file" className={styles.customFileLabel}>Choose a file</label>
                  <span className={styles.fileName}>{fileName}</span>
                </div>
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.file}>Video Upload :</label>
                <div className={styles.fileInputWrapper}>
                  <input type="file" className={styles.fileInput} id="video" onChange={handleVideoChange} />
                  <label htmlFor="video" className={styles.customFileLabel}>Choose a video</label>
                  <span className={styles.fileName}>{videoName}</span>
                </div>
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.description}>Description :</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.description}>Preview Link :</label>
                <input
                  type="text"
                  value={previewLink}
                  onChange={(e) => setPreviewLink(e.target.value)}
                  placeholder="Preview Link"
                  required
                />
              </div>
              
            </div>
            <div className={styles.rightdiv}>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.HTML}>HTML</label>
                <textarea
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                  placeholder="HTML Code"
                  required
                ></textarea>
              </div>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.CSS}>CSS</label>
                <textarea
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                  placeholder="CSS Code"
                  required
                ></textarea>
              </div>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.JS}>JS</label>
                <textarea
                  value={js}
                  onChange={(e) => setJs(e.target.value)}
                  placeholder="JS Code"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.formbtn}>
            <button type="submit">{submitting ? 'Submitting...' : 'Submit'}</button>
          </div>
        </form>
        {message && (
          <div className={`${styles.popup} ${message === 'Your code is uploaded' ? styles.success : styles.error}`}>
            {message}
          </div>
        )}
      </div>
    <div/>
    </motion.div>
  );
}

export default Adminpost;
