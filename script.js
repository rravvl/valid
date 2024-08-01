document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('birthdaySong');
    audio.play();
    this.style.display = 'none';
    startSlides();
    startBalloons();
});

function startSlides() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
}

function startBalloons() {
    var balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        var delay = Math.random() * 5;
        balloon.style.animationDelay = delay + 's';
    });
}
