document.addEventListener('DOMContentLoaded', () => {
    const bulb = document.getElementById('bulb');

    bulb.addEventListener('mouseover', () => {
        bulb.src = 'images.jpg';
    });

    bulb.addEventListener('mouseout', () => {
        bulb.src = 'imagesoff.jpg';
    });
});
































