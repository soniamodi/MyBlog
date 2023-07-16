const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");

button1.addEventListener("click", function() {
  showContent(content1);
});

button2.addEventListener("click", function() {
  showContent(content2);
});

button3.addEventListener("click", function() {
  showContent(content3);
});

function showContent(contentElement) {
  const allContent = document.getElementsByClassName("content");
  for (let i = 0; i < allContent.length; i++) {
    allContent[i].style.display = "none";
  }

  contentElement.style.display = "block";
}
