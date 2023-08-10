const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeModal = document.querySelector(".close-modal");

trigger.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
