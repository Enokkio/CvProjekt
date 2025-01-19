'use client'; // Add this at the top of the file

import React from 'react';

const Text = ({ summary, paragraph, fontSize = "16px" }) => {
  const styles = {
 
    title: {
      fontSize: fontSize,
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: fontSize,
      color: "#333",
    },
  };

  return (
    <div>
      <h2 style={styles.title}>{summary}</h2>
      <p style={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Text;