document.addEventListener("DOMContentLoaded", function() {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");

  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const content3 = document.getElementById("content3");

  button1.addEventListener("click", function() {
    toggleContent(content1);
    hideContent(content2);
    hideContent(content3);
  });

  button2.addEventListener("click", function() {
    hideContent(content1);
    toggleContent(content2);
    hideContent(content3);
  });

  button3.addEventListener("click", function() {
    hideContent(content1);
    hideContent(content2);
    toggleContent(content3);
  });

  function hideContent(contentElement) {
    contentElement.style.display = "none";
  }

  function toggleContent(contentElement) {
    if (contentElement.style.display === "none") {
      contentElement.style.display = "block";
    } else {
      contentElement.style.display = "none";
    }
  }
});
