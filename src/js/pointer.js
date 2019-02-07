document.body.onmousemove = (e) => {
    pointer.style.left = `${e.clientX - pointer.getBoundingClientRect().height/2}px`;
    pointer.style.top = `${e.clientY - pointer.getBoundingClientRect().width/2}px`;
}