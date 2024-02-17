const javascriptResources = document.querySelector("#resources");
const showResourcesBtn = document.querySelector("#show-resources");
showResourcesBtn.addEventListener("click", onClickShowResourcesBtn);
function onClickShowResourcesBtn(e) {
    javascriptResources.classList.remove("d-none");    
}

javascriptResources.addEventListener("mouseover", onHoverOver);
function onHoverOver(e) {
    e.target.classList.add("fw-bold");
}

javascriptResources.addEventListener("mouseout", onStopHoverOver);
function onStopHoverOver(e) {
    e.target.classList.remove("fw-bold");
}

javascriptResources.addEventListener("click", onClick);
function onClick(e) {
    e.target.classList.add("fst-italic");
}

javascriptResources.addEventListener("mouseout", onStopItalicHover);
function onStopItalicHover(e) {
    e.target.classList.remove("fst-italic");
    
}




