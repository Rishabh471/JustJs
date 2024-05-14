document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var createButton = document.getElementById("createButton");
    
    // Add click event listener to the button
    createButton.addEventListener("click", function() {
        // Create a new element
        var newElement = document.createElement("div");
        
        // Add class and content to the new element
        newElement.classList.add("new-element");
        newElement.textContent = "This is a new element";
        
        // Append the new element to the container
        var container = document.getElementById("container");
        container.appendChild(newElement);
    });
});