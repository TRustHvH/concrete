function hoveropenother(){
    document.getElementById("start-footer-first").classList.add("active")
    document.getElementById("start-footer-second").classList.add("active")
    document.getElementById("start-footer-third").classList.add("active")
    document.getElementById("start-footer-fourth").classList.add("active")
}
function hovercloseother(){
    document.getElementById("start-footer-first").classList.remove("active")
    document.getElementById("start-footer-second").classList.remove("active")
    document.getElementById("start-footer-third").classList.remove("active")
    document.getElementById("start-footer-fourth").classList.remove("active")
}
function time(){
    let element = document.getElementById("1");
    element.style.opacity = "1";
}
setTimeout(time, 500)
