// JavaScript to handle fade-in animation for the body section
window.addEventListener("scroll", function() {
    const photoParagraphSection = document.querySelector(".photo-and-paragraph");
    const sectionOffsetTop = photoParagraphSection.offsetTop;
    const screenHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate the threshold point to trigger the animation
    const threshold = sectionOffsetTop - screenHeight * 0.5;

    if (scrollPosition >= threshold) {
        photoParagraphSection.style.opacity = "1";
    }
});
