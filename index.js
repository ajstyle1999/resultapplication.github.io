
 alert("hello web guyes..");
console.log(window.innerWidth);
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);

})
