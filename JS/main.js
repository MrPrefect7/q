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

  // যদি "date" ও currentDate মেলে
  if (savedDate && savedDate === currentDate) {
    // লোকাল স্টোরেজের ডাটা দিয়ে HTML এলিমেন্ট আপডেট করা হচ্ছে
    document.getElementById("orglink").src = localStorage.getItem("orglink");

    document.getElementById("server1").textContent = localStorage.getItem("server1");
    document.getElementById("server2").textcontent = localStorage.getItem("server2");

    document.getElementById("download1").href = localStorage.getItem("download1");
    document.getElementById("download2").href = localStorage.getItem("download2");
    document.getElementById("download3").href = localStorage.getItem("download3");
    
document.getElementById("download1").textContent = localStorage.getItem("text1");    
document.getElementById("download2").textContent = localStorage.getItem("text2");   
document.getElementById("download3").textContent = localStorage.getItem("text3");   
  } else {
    // যদি মিল না পায় তাহলে লোকাল স্টোরেজ থেকে ডাটা মুছে ফেলা হবে
    localStorage.removeItem("date");
    localStorage.removeItem("orglink");
    localStorage.removeItem("server1");
    localStorage.removeItem("server2");
    localStorage.removeItem("download1");
    localStorage.removeItem("download2");
    localStorage.removeItem("download3");
    
    localStorage.removeItem("text1");
    localStorage.removeItem("text2");
    localStorage.removeItem("text3");
  }
});

