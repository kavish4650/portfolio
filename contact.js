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
