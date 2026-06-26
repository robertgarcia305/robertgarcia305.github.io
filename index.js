document.addEventListener("DOMContentLoaded", () => {
    // Select all sliders and their arrows
    const sliders = document.querySelectorAll(".slider");
    const prevArrows = document.querySelectorAll("#prev-arrow");
    const nextArrows = document.querySelectorAll("#next-arrow");

    sliders.forEach((slider, index) => {
        let currentIndex = 0;
        
        // Bind the corresponding arrows to this slider
        const prevArrow = prevArrows[index];
        const nextArrow = nextArrows[index];

        prevArrow.addEventListener("click", () => {
            if (currentIndex === 0) {
                currentIndex = slider.children.length - 1; // Loop to last slide
            } else {
                currentIndex--;
            }
            updateSlider(slider, currentIndex);
        });

        nextArrow.addEventListener("click", () => {
            if (currentIndex === slider.children.length - 1) {
                currentIndex = 0; // Loop to first slide
            } else {
                currentIndex++;
            }
            updateSlider(slider, currentIndex);
        });

        function updateSlider(sliderElement, index) {
            const slideWidth = sliderElement.children[0].clientWidth;
            sliderElement.style.transform = `translateX(-${index * slideWidth}px)`;
            sliderElement.style.transition = "none"; // Disable transitions
        }
    });

    // Navigation functionality (unchanged)
    const menuIcon = document.querySelector('.menu');
    const closeIcon = document.querySelector('.x');
    const bottomNav = document.querySelector('.mobile-nav-bottom');

    menuIcon.addEventListener('click', () => {
        bottomNav.style.display = "flex";
        menuIcon.style.display = 'none'; // Hide the menu icon
        closeIcon.style.display = 'block'; // Show the close icon
    });

    closeIcon.addEventListener('click', () => {
        bottomNav.style.display = "none";
        menuIcon.style.display = 'block'; // Show the menu icon
        closeIcon.style.display = 'none'; // Hide the close icon
    });
});