document.getElementById("destroy").addEventListener("click", function() {
      localStorage.clear();
      window.location.reload(); // Reload the page to reflect the changes
    });
    
  document.addEventListener('DOMContentLoaded', () => {
  // Get the current date and format it as 'MM/DD/YYYY'
  const currentDate = new Date().toLocaleDateString();

  // Set the current date in the 'date' element
  document.getElementById('currentdate').textContent = currentDate;

});

document.addEventListener("DOMContentLoaded", function () {
  // লোকাল স্টোরেজ থেকে "date" নেওয়া হচ্ছে
  let savedDate = localStorage.getItem("date");
  let currentDate = document.getElementById("currentdate").textContent;

  // বাইনারি স্ট্রিং থেকে টেক্সটে রূপান্তর ফাংশন
  function binaryToText(binary) {
    return binary
      .split(" ") // প্রতিটি বাইনারি মান স্পেস দিয়ে বিভক্ত
      .map(bin => String.fromCharCode(parseInt(bin, 2))) // বাইনারি থেকে ASCII কনভার্ট
      .join(""); // পুনরায় স্ট্রিং তৈরি
  }

  // যদি "date" ও currentDate মেলে
  if (savedDate && savedDate === currentDate) {
    // লোকাল স্টোরেজের ডাটা দিয়ে HTML এলিমেন্ট আপডেট করা হচ্ছে
    document.getElementById("orglink").src = binaryToText(localStorage.getItem("org"));

    document.getElementById("download1").href = binaryToText(localStorage.getItem("d1"));
    document.getElementById("download2").href = binaryToText(localStorage.getItem("d2"));
    document.getElementById("download3").href = binaryToText(localStorage.getItem("d3"));

    // বাইনারি ডাটা কনভার্ট করে টেক্সটে পরিবর্তন
    document.getElementById("download1").textContent = binaryToText(localStorage.getItem("text1"));
    document.getElementById("download2").textContent = binaryToText(localStorage.getItem("text2"));
    document.getElementById("download3").textContent = binaryToText(localStorage.getItem("text3"));

    document.getElementById("s1").textContent = binaryToText(localStorage.getItem("s1"));
    document.getElementById("s2").textContent = binaryToText(localStorage.getItem("s2"));
  } else {
    // যদি মিল না পায় তাহলে লোকাল স্টোরেজ থেকে ডাটা মুছে ফেলা হবে
    localStorage.clear();
  }
});


document.getElementById("Button1").addEventListener("click", function() {
            let url = document.getElementById("s1").textContent; 
            document.getElementById("orglink").src = url;
        });

        document.getElementById("Button2").addEventListener("click", function() {
            let url = document.getElementById("s2").textContent; 
            document.getElementById("orglink").src = url;
        });
