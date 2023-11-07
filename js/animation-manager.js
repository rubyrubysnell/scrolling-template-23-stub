const animatorButton = document.getElementById("animator")

animatorButton.onclick = (event) => {
    // modifying the button's parent - in this case, the container
    // on click, add a new class to the html, linked to the css animation
    animatorButton.parentNode.classList.add("right-to-left");
    animatorButton.disabled=true
    deAnimatorButton.disabled=false
}

const deAnimatorButton = document.getElementById("de-animator")

deAnimatorButton.disabled=true

deAnimatorButton.onclick = (event) => {
    animatorButton.parentNode.classList.remove("right-to-left");
    deAnimatorButton.disabled=true
    animatorButton.disabled=false
}