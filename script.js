console.log("Hello there!");

const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', function () {
    event.preventDefault();
    window.location.href = "./index.html"
});