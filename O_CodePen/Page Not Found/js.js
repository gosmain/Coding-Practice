let container = document.getElementById("container");
window.onmousemove = function(e) {
    let x = - e.clientX/5,
        y = - e.clientY/5;
        container.style.backgroundPositionX = x + "px";
        container.style.backgroundPositionY = y + "px";
}