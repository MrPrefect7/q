    // Preloader JavaScript
    window.addEventListener("load", () => {
      const preloader = document.getElementById("lod");

      // Set timeout to show preloader for 10 seconds
      setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader
      }, 2000);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
  // Get the current date and format it as 'MM/DD/YYYY'
  const currentDate = new Date().toLocaleDateString();

  // Set the current date in the 'date' element
  document.getElementById('date').textContent = currentDate;

  // Get the text content of 'd1', 'd2', 'token1', 'token2'
  const d1Date = document.getElementById('d1').textContent;
  const d2Date = document.getElementById('d2').textContent;
  const token1 = document.getElementById('token1').textContent;
  const token2 = document.getElementById('token2').textContent;

  // Check if 'currentDate' matches 'd1Date' or 'd2Date'
  if (currentDate === d1Date) {
    // Replace the text of 'verifytoken' with 'token1'
    document.getElementById('verifytoken').textContent = token1;
  } else if (currentDate === d2Date) {
    // Replace the text of 'verifytoken' with 'token2'
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
    } else {
        // Show an alert message if the tokens do not match
        alert('The token you entered is invalid. Please try again.');
    }
});



// When the submit button is clicked
document.getElementById("gtbutton").addEventListener("click", function() {
  // Save the current date and time to localStorage
  localStorage.setItem("date", document.getElementById("date").textContent);

  // Save the values from p tags to localStorage
  localStorage.setItem("orglink", document.getElementById("orglink").textContent);
  localStorage.setItem("download1", document.getElementById("download1").textContent);
  localStorage.setItem("download2", document.getElementById("download2").textContent);
  localStorage.setItem("download3", document.getElementById("download3").textContent);
  
localStorage.setItem("text1", document.getElementById("text1").textContent);
localStorage.setItem("text2", document.getElementById("text2").textContent);
localStorage.setItem("text3", document.getElementById("text3").textContent);
  
  localStorage.setItem("server1", document.getElementById("server1").textContent);
  localStorage.setItem("server2", document.getElementById("server2").textContent);
  
  // Redirect to index.html
  window.location.href = "/video/index.html";
});

