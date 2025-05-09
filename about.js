function menuSlide() {

    document.getElementsByClassName("menu")[0].style.display="none";
    document.getElementsByClassName("menu")[0].style.bottom="-800%";
    document.getElementsByClassName("close")[0].style.display="block";
    document.getElementsByClassName("menu-bar")[0].style.bottom = "0%";
    document.getElementsByClassName("menu-bar")[0].style.transition=" all 0.3s linear"
}
function closeSlide() {
    function delay(){
    document.getElementsByClassName("menu")[0].style.display="block";
    document.getElementsByClassName("close")[0].style.display="none";
    document.getElementsByClassName("menu")[0].style.bottom="5%";
    }
    setInterval (delay,1150);
    document.getElementsByClassName("menu-bar")[0].style.bottom = "100%"
    document.getElementsByClassName("menu-bar")[0].style.transition=" all 0.3s 1s linear"
}

const paragraph = document.querySelector('.about-me');
const spans = paragraph.querySelectorAll('span');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    spans.forEach((span, index) => {
      const opacity = (Math.max(0, scrollPosition - 400 - index * 3) / 100); // adjust opacity based on scroll position and word index
      span.style.opacity = opacity;
    });
  } else {
    spans.forEach((span) => {
      span.style.opacity = 0; // reset opacity to 0 when scrolling back up
    });
  }
});

