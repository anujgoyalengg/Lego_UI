import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../Styles/adminpost.module.css";
import { UserContext } from "../../Services/UserContext";

function UserPostForm() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const codeToEdit = location.state?.code; // Retrieve code object passed from Card

  const [title, setTitle] = useState(codeToEdit?.title || "");
  const [description, setDescription] = useState(codeToEdit?.description || "");
  const [image, setImage] = useState(null);
  const [sourceCodePath, setSourceCodePath] = useState(codeToEdit?.sourceCodePath || "");
  const [githublink, setgithublink] = useState(codeToEdit?.githublink || "");
  const [html, setHtml] = useState(codeToEdit?.html || "");
  const [css, setCss] = useState(codeToEdit?.css || "");
  const [js, setJs] = useState(codeToEdit?.js || "");
  const [useremail, setUserEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  useEffect(() => {
    if (user) {
      setUserEmail(user.provider === "JWT" ? user.email : user.user.email);
    }
  }, [user]);

  const handleFileChange = (event) => {
    const input = event.target;
    if (input.files.length > 0) {
      setFileName(input.files[0].name);
      setImage(input.files[0]);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("sourceCodePath", sourceCodePath);
    formData.append("githublink", githublink);
    formData.append("html", html);
    formData.append("css", css);
    formData.append("js", js);
    formData.append("useremail", useremail);

    try {
      const url = codeToEdit ? `http://localhost:500/api/user/edit/${codeToEdit._id}` : "http://localhost:500/api/user/upload";
      const method = codeToEdit ? 'PUT' : 'POST';

      await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(codeToEdit ? "Your code has been updated" : "Your code is uploaded");
      navigate("/home"); // Redirect after successful submit
    } catch (error) {
      console.error("Error uploading data", error);
      setMessage("Failed to upload data");
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setMessage("");
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
        <h1 className={styles.header}>{codeToEdit ? "Edit Code" : "Upload Form"}</h1>
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
                <label className={styles.sourcecodepath}>
                  Source Code Path :
                </label>
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
                <input
                  type="hidden"
                  value={useremail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Git Hub Link"
                  required
                />
              </div>
              <div className={styles.leftelemetsdiv}>
                <label className={styles.file}>Image Upload :</label>
                <div className={styles.fileInputWrapper}>
                  <input
                    type="file"
                    className={styles.fileInput}
                    id="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file" className={styles.customFileLabel}>
                    Choose a file
                  </label>
                  <span className={styles.fileName}>{fileName}</span>
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
            </div>
            <div className={styles.rightdiv}>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.sourcecodepath}>HTML :</label>
                <textarea
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                  placeholder="HTML Code"
                  required
                ></textarea>
              </div>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.sourcecodepath}>CSS :</label>
                <textarea
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                  placeholder="CSS Code"
                  required
                ></textarea>
              </div>
              <div className={styles.rightelemetsdiv}>
                <label className={styles.sourcecodepath}>JavaScript :</label>
                <textarea
                  value={js}
                  onChange={(e) => setJs(e.target.value)}
                  placeholder="JavaScript Code"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.formbtn}>
            <button type="submit">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {message && (
          <div className={`${styles.popup} ${message === "Your code is uploaded" || message === "Your code has been updated" ? styles.success : styles.error}`}>
            {message}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default UserPostForm;
