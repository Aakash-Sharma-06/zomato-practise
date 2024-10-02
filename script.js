document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('main img');
    const mainText = document.querySelector('main p');

    // Simple fade-in animation
    mainImage.style.opacity = 0;
    mainText.style.opacity = 0;

    setTimeout(() => {
        mainImage.style.transition = 'opacity 2s';
        mainImage.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        mainText.style.transition = 'opacity 2s';
        mainText.style.opacity = 1;
    }, 1000);
});
