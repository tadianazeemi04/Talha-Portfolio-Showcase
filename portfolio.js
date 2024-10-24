window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

document.addEventListener("scroll", function () {
    const video = document.querySelector("video");
    const rect = video.getBoundingClientRect();
    
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        video.play();
    } else {
        video.pause(); 
    }
});
