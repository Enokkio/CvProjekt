'use client'; // Add this at the top of the file
import { usePDF } from 'react-to-pdf';
import Text from './components/Text';

export default function Home() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  // Define styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      margin: "auto",  // Centers the container

    },
    leftSection: {
      width: "33%",
      backgroundColor: "#98D8EF",
      padding: "16px",
      boxSizing: "border-box", // Include padding in width calculation
      padding: "16px",       // Optional padding inside the inner div
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      marginLeft:"20px",
      marginTop: "14px",
      marginBottom: "10px"
    },
    rightSection: {
      width: "67%",
      backgroundColor: "#ffffff", // White background
      padding: "16px",
      boxSizing: "border-box",
    },
    innerBox: {
      width: "90%",          // Slightly smaller than the container (80% of the width)       // Slightly smaller height (80% of the height)
      backgroundColor: "#ffffff", // White background for the inner div
      boxSizing: "border-box", // Ensure padding is included in size calculation
      padding: "16px",       // Optional padding inside the inner div
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
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
          
          <div style={styles.innerBox}>
            <Text
            summary="Profile Summary"
            paragraph="Som civilingenjörsstudent vid Lunds Tekniska Högskola och med en
yrkesexamen som gymnasieingenjör har jag en solid bakgrund inom
mjukvaruutveckling. Jag har arbetat med applikationer och
webblösningar, vilket har stärkt min förmåga att snabbt lära mig nya
teknologier och utvecklat mina samarbets- och
problemlösningsfärdigheter. Med en kombination av teknisk kompetens
och ett strukturerat arbetssätt är jag väl rustad att bidra inom olika
yrkesområden.
"
            fontSize="18px" // Optional, defaults to 16px if not provided
            />
          </div>
          
          <div style={styles.innerBox}>
            Sections box
          </div>
          
        </div>
      </div>


    </div>

  );
}
