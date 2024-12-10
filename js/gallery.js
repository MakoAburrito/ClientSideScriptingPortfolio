document.addEventListener('DOMContentLoaded', () => {
    const images = ["images/hoverphoto.jpg", "images/Dandelion.jpg", "images/Grass.jpg", "images/Pumkin.jpg", "images/Blue-Desktop-Wallpaper.jpg"]; // List of image paths
    let currentIndex = 0;

    const galleryImage = document.getElementById("gallery-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateImage () {
        galleryImage.src = images[currentIndex];
    };

    prevButton.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateImage();
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }
        updateImage();
    });

        setInterval(() => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            updateImage();
        }, 5000);

    // funct calling
    updateImage();
});
