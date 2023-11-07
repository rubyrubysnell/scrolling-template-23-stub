const animatorButton = document.getElementById("animator")

animatorButton.onclick = (event) => {
    // modifying the button's parent - in this case, the container
    // on click, add a new class to the html, linked to the css animation
    animatorButton.parentNode.classList.add("right-to-left");
    animatorButton.disabled = true
    deAnimatorButton.disabled = false
}

const deAnimatorButton = document.getElementById("de-animator")

deAnimatorButton.onclick = (event) => {
    animatorButton.parentNode.classList.remove("right-to-left");
    deAnimatorButton.disabled = true
    animatorButton.disabled = false
}

// INTERSECTION OBSERVER //

const options = {
    rootMargin: "0px",
    threshold: 0.1
}

const callback = (entries, observer) => {

    // this is equivalent to 
    // for(let i = 0; i < entries.length; i++){
    //     const entry = entries[i];
    // }

    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("bottom-zig-zag")
        } else {
            entry.target.classList.remove("bottom-zig-zag")
        }
    }
}

const observer = new IntersectionObserver(callback, options);

const targetList = document.getElementsByClassName("observable")

for (const target of targetList) {
    observer.observe(target);
}
