    // Preloader JavaScript
    window.addEventListener("load", () => {
      const preloader = document.getElementById("lod");

      // Set timeout to show preloader for 10 seconds
      setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader
      }, 2000);
    });


window.onload = function () {
    const oldDateElement = document.getElementById("olddate");
    const divA = document.getElementById("expired");
    const divB = document.getElementById("coming");
    const content = document.getElementById("all");

    // id="olddate" থেকে ডেট নেওয়া
    const oldDateText = oldDateElement.textContent.trim();

    // ডেট ফর্ম্যাট পরিবর্তন করে Date অবজেক্ট তৈরি করা
    const [day, month, year] = oldDateText.split("/").map(Number);
    const oldDate = new Date(year, month - 1, day);

    // কারেন্ট ডেট নেওয়া (সময় বাদ দেওয়া)
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // শর্ত অনুযায়ী কাজ করা
    if (oldDate > currentDate) {
        divB.style.display = "flex";
        content.style.display = "none";
    } else if (oldDate < currentDate) {
        divA.style.display = "flex";
        content.style.display = "none";
    }
};

        

      // Wait until the DOM is fully loaded
      document.addEventListener('DOMContentLoaded', () => {
        // Get the current date
        const currentDate = new Date();

        // Format the date as 'MM/DD/YYYY'
        const formattedDate = currentDate.toLocaleDateString();

        // Display the date in the <span> with ID 'currentDate'
        document.getElementById('date').textContent = formattedDate;
      });
      
      
      
      // Copy 
      document.getElementById('copybutton').addEventListener('click', function() {
  // টোকেন টেক্সট কপি করা
  const tokenText = document.getElementById('token').textContent;
  navigator.clipboard.writeText(tokenText).then(() => {
    // ব্যাকগ্রাউন্ড এবং টেক্সট কালার পরিবর্তন
    const tokenElement = document.getElementById('token');
    const copyButton = document.getElementById('copybutton');

    tokenElement.style.backgroundColor = '#4CAF50'; // সবুজ ব্যাকগ্রাউন্ড
    tokenElement.style.color = '#fff'; // সাদা টেক্সট

    copyButton.style.backgroundColor = '#4CAF50';
    copyButton.style.color = '#fff';
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});

// রেফারার URL চেক করা এবং সেট করা
        const referrerURL = document.referrer;
        const referElement = document.getElementById('referURL');

        if (referrerURL) {
            // যদি রেফারার URL থাকে, তাহলে তা প্যারাগ্রাফে দেখাও
            referElement.textContent = `${referrerURL}`;
        } else {
            // যদি রেফারার URL না থাকে (ডিরেক্ট এন্ট্রি), তখন মেসেজ দেখাও
            referElement.textContent = "";
        }
        
  document.getElementById('proceed').addEventListener('click', function (e) {
            e.preventDefault(); // লিঙ্কের ডিফল্ট বিহেভিয়ার বন্ধ করা

            // referURL এবং oldURL থেকে টেক্সট সংগ্রহ
    const referURL = document.getElementById('referURL').textContent.trim();
    const oldURL = document.getElementById('oldURL').textContent.trim();

            // শর্ত চেক
            if (referURL === oldURL) {
                // যদি দুই URL একই হয়, তাহলে gtbutton দেখাও
           document.getElementById('gtbutton').style.display = 'flex';
           document.getElementById('proceed').style.display = 'none';
            } else {
                // যদি দুই URL একই না হয়, তাহলে gtbutton লুকাও এবং অ্যালার্ট দেখাও
                document.getElementById('gtbutton').style.display = 'none';
                document.getElementById('proceed').style.display = 'flex';
                alert('Your User Verification Failed, Please Follow The All Rules');

                // ইউজারকে অন্য পেজে রিডাইরেক্ট করা
                window.location.href = 'http://example.com'; // এখানে আপনার পছন্দমত URL দিন
            }
        });
  
  document.getElementById("gtbutton").addEventListener("click", function () {
      // Get the binary text from token1
      const binaryText = document.getElementById("token1").textContent;

      // Convert binary to normal text
      const normalText = binaryText
        .split(" ") // Split the binary string by spaces
        .map(bin => String.fromCharCode(parseInt(bin, 2))) // Convert each binary to a character
        .join(""); // Join the characters to form the string

      // Replace the text in id="token" with the converted text
      document.getElementById("token").textContent = normalText;

      // Hide the button
      document.getElementById("gtbutton").style.display = "none";
      document.getElementById("tbox").style.display = "flex";
      document.getElementById("about").style.display = "flex";
    });
