    // Preloader JavaScript
    window.addEventListener("load", () => {
      const preloader = document.getElementById("lod");

      // Set timeout to show preloader for 10 seconds
      setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader
      }, 2000);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
  // Get the current date and format it as 'M/D/YYYY'
  const currentDate = new Date().toLocaleDateString();

  // Set the current date in the 'date' element
  document.getElementById('date').textContent = currentDate;

  // Define token values directly in JavaScript (No need for HTML elements)
  const token1 = "Hi";
  const token2 = "01101000 01100101 01101100 01101100 01101111";

  // Define dates
  const d1Date = "8/01/2025";
  const d2Date = "31/01/2025";

  // Check if 'currentDate' matches 'd1Date' or 'd2Date'
  if (currentDate === d1Date) {
    document.getElementById('verifytoken').textContent = token1;
  } else if (currentDate === d2Date) {
    document.getElementById('verifytoken').textContent = token2;
  }
});

    
   
    
document.getElementById('proceed').addEventListener('click', () => {
    // Get the token entered by the user
    const userInput = document.getElementById('token').value;

    // Convert the user input to binary
    const binaryToken = userInput
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');

    // Get the text from 'verifytoken'
    const verifyToken = document.getElementById('verifytoken').textContent;

    // Check if the binary token matches the verify token
    if (binaryToken === verifyToken) {
        // Hide the 'proceed' button and the input field
        document.getElementById('proceed').style.display = 'none';
        document.getElementById('token').style.display = 'none';

        // Show the 'gtbutton'
        document.getElementById('gtbutton').style.display = 'flex';
localStorage.setItem("s1", document.getElementById("s1").textContent); 
localStorage.setItem("s2", document.getElementById("s2").textContent);   
    } else {
        // Show an alert message if the tokens do not match
        localStorage.clear();
        alert('The token you entered is invalid. Please try again.');
    }
});



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("gtbutton").addEventListener("click", function() {
    // Save the current date and time to localStorage
    localStorage.setItem("date", document.getElementById("date").textContent);

    // Save the values from p tags to localStorage
    localStorage.setItem("org", document.getElementById("org").textContent);
    localStorage.setItem("d1", document.getElementById("d1").textContent);
    localStorage.setItem("d2", document.getElementById("d2").textContent);
    localStorage.setItem("d3", document.getElementById("d3").textContent);

    localStorage.setItem("text1", document.getElementById("text1").textContent);
    localStorage.setItem("text2", document.getElementById("text2").textContent);
    localStorage.setItem("text3", document.getElementById("text3").textContent);

    // Redirect to index.html
    window.location.href = "../index.html";
  });
});
