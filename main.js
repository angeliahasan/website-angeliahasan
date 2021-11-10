const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".showText");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
});
