const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);

const input = document.getElementById("button");
input.addEventListener("click", function() {
 alert("i was clicked!");
});




