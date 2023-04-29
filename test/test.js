document.addEventListener("DOMContentLoaded", function() {
    const navIcon = document.querySelector("#hamburger");
    navIcon.addEventListener("click", function() {
      this.classList.toggle("open");
    });
});