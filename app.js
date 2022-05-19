// selecting modal btn
const openModalBtn = document.querySelector(".modal-btn");

// selecting the elements to add functionality
const modalOverlay = document.querySelector(".modal-overlay");
// selecting close btn
const closeBtn = document.querySelector(".close-btn");

// event listeners
openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
