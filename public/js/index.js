document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("dropdown");
    hamburger.addEventListener("click", function() {
      this.classList.toggle("open");
      nav.classList.toggle("open");
    });
});

function hideCookies() {
    document.getElementById('cookies_box').style.display = "none";
}
