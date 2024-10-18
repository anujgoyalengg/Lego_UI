// DisplayPage.jsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from 'copy-to-clipboard';
import styles from "../Styles/CodePage.module.css";
import { FaGithub } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const code = location.state;

  const [copiedSection, setCopiedSection] = useState(null);

  const handleCopy = (text, section) => {
    copy(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 1000);
  };

  const customStyle = {
    backgroundColor: '#0D0D0D',
    padding: '20px',
    borderRadius: '0 0 8px 8px',
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const customDracula = {
    ...dracula,
    'code[class*="language-"]': {
      ...dracula['code[class*="language-"]'],
      color: '#E0E0E0',
      background: 'none',
    },
    'pre[class*="language-"]': {
      ...dracula['pre[class*="language-"]'],
      background: 'none',
      padding: '0',
      margin: '0',
    },
    'code[class*="language-"]::before': {
      ...dracula['code[class*="language-"]::before'],
      content: 'none',
    },
    'code[class*="language-"]::after': {
      ...dracula['code[class*="language-"]::after'],
      content: 'none',
    },
    'span.token.comment, span.token.prolog, span.token.doctype, span.token.cdata': {
      color: '#6272a4',
    },
    'span.token.punctuation': {
      color: '#f8f8f2',
    },
    'span.token.property, span.token.tag, span.token.constant, span.token.symbol, span.token.deleted': {
      color: '#ff79c6',
    },
    'span.token.boolean, span.token.number': {
      color: '#bd93f9',
    },
    'span.token.selector, span.token.attr-name, span.token.string, span.token.char, span.token.builtin, span.token.inserted': {
      color: '#50fa7b',
    },
    'span.token.operator, span.token.entity, span.token.url, span.token.variable': {
      color: '#f8f8f2',
    },
    'span.token.atrule, span.token.attr-value, span.token.function, span.token.class-name': {
      color: '#f1fa8c',
    },
    'span.token.keyword': {
      color: '#ff79c6',
    },
    'span.token.regex, span.token.important': {
      color: '#ffb86c',
    },
    'span.token.important, span.token.bold': {
      fontWeight: 'bold',
    },
    'span.token.italic': {
      fontStyle: 'italic',
    },
    'span.token.entity': {
      cursor: 'help',
    },
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <h1 className={styles.heading}>CSS Login Pages</h1>
        <div className={styles.main}>
          <div className={styles.leftSide}>
            <img src={code.imagePath} alt={code.title} className={styles.image} />
          </div>
          <div className={styles.rightSide}>
            <p className={styles.description}>{code.description}</p>
            <a href={code.githublink} target="_blank" rel="noopener noreferrer">
              <button><FaGithub /> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <h3 className={styles.codeHeading}>HTML Code</h3>
            <button className={styles.copyButton} onClick={() => handleCopy(code.html, 'html')}>
              {copiedSection === 'html' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <SyntaxHighlighter language="html" style={customDracula} customStyle={customStyle}>
            {code.html}
          </SyntaxHighlighter>
        </div>
        <div className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <h3 className={styles.codeHeading}>CSS Code</h3>
            <button className={styles.copyButton} onClick={() => handleCopy(code.css, 'css')}>
              {copiedSection === 'css' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <SyntaxHighlighter language="css" style={customDracula} customStyle={customStyle}>
            {code.css}
          </SyntaxHighlighter>
        </div>
        <div className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <h3 className={styles.codeHeading}>JavaScript Code</h3>
            <button className={styles.copyButton} onClick={() => handleCopy(code.js, 'js')}>
              {copiedSection === 'js' ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <SyntaxHighlighter language="javascript" style={customDracula} customStyle={customStyle}>
            {code.js}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
