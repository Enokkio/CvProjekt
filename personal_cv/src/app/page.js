'use client'; // Add this at the top of the file
import { usePDF } from 'react-to-pdf';

export default function Home() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  // Define styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      height: "300vh",
      margin: "auto",  // Centers the container
    },
    leftSection: {
      width: "33%",
      backgroundColor: "#98D8EF",
      padding: "16px",
      boxSizing: "border-box", // Include padding in width calculation
    },
    rightSection: {
      width: "67%",
      backgroundColor: "#ffffff", // White background
      padding: "16px",
      boxSizing: "border-box",
    },
  };

  return (
    <div>
    <button onClick={() => toPDF()}>Download PDF</button>

      <div style={styles.container}  ref={targetRef}>
        {/* Left Section: 33% Width */}
        <div style={styles.leftSection}>
          <h2>Left Section</h2>
          <p>This section takes 33% of the width.</p>
        </div>

        {/* Right Section: 67% Width */}
        <div style={styles.rightSection}>
        <h2>Google Link</h2>
       
        </div>
      </div>


    </div>

  );
}
