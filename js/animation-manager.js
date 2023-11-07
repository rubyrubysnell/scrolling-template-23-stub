// getting the animate button from the html document 
const animatorButton = document.getElementById("animator")

// when the button is clicked, the animation is triggered
animatorButton.onclick = (event) => {
    // modifying the button's parent - in this case, the container
    // on click, add a new class to the html, linked to the css animation
    animatorButton.parentNode.classList.add("active");
    // disable the animation button
    animatorButton.disabled = true
    // enable the reset button 
    deAnimatorButton.disabled = false
}

// get the reset button from the html document
const deAnimatorButton = document.getElementById("de-animator")

// when the button is clicked, reset the animation...
deAnimatorButton.onclick = (event) => {
    // ...by removing the class that triggers the animation, from the button's parent
    deAnimatorButton.parentNode.classList.remove("active");
    // set opacity to 1 when button is clicked
    deAnimatorButton.parentNode.style.opacity = 1;
    // re-enable the animation button
    deAnimatorButton.disabled = true
    // disable the reset button
    animatorButton.disabled = false
}

// INTERSECTION OBSERVER //

// necessary for the intersection observer
const options = {
    // tells the observer to use the whole viewport (with no margin) to observe
    rootMargin: "0px",
    // tells the observer that an intersection should be triggered when the element is 10% in the viewport
    // if threshold was 0, the observer might detect an intersection before the element is in view
    threshold: 0.1
}

// the callback is triggered when the observer intersects with any of the observed elements
// the callback manages the adding and removing of the class 'active'

const callback = (entries, observer) => {

    // this is equivalent to 
    // for(let i = 0; i < entries.length; i++){
    //     const entry = entries[i];
    // }

    // loop through the entries array
    // each element of this array is an object that contains information related to each of the observed HTML elements
    // specfically:
    // entry.isIntersecting = a boolean that will be true when the element is in view and false when it is out of view
    // entry.target = a reference to the HTML element that allows it to change its class

    for (const entry of entries) {
        // if the element is in view (intersecting), add the class "active" to trigger the corresponding animation
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        // if the element is not in view (intersecting), remove the class "active" to reset the corresponding animation
        } else {
            entry.target.classList.remove("active")
        // if the element is not in view (intersecting), make the opacity 0 (invisible)
            entry.target.style.opacity = 0;
        }
    }
}

// the observer object is linked to the viewport and contains the logic to trigger the callback every time an intersection is detected
// to create the observer we need to have the callback and the options pre-defined
// new IntersectionObserver(callback, options) is a precoded javascript function that we can freely use

const observer = new IntersectionObserver(callback, options);

// targetList is an array that contains all HTML elements with the class "observable"
// we add this class to detect elements in which an animation should be triggered upon intersecting with the viewport

const targetList = document.getElementsByClassName("observable")

// to link each of the targets inside the targetList array we need to loop through them and let the observer object know these should be observed

for (const target of targetList) {
    // observer.observe(target) is a precoded javascript function that we can freely use. it individually links each target to the observer
    observer.observe(target);
}
