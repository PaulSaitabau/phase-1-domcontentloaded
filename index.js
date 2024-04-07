// Your code goes here

function updateDOM() {
    // Find the HTML element with the ID "text"
    var textElement = document.getElementById("text");

    // Update the content of the element
    textElement.innerHTML = "This is really cool!";
}

// calls the updateDOM function
document.addEventListener("DOMContentLoaded", function() {
    updateDOM();
});