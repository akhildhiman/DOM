//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.body.children[1].lastElementChild.lastElementChild;

//Give the section with an id of container the text "Hello!".
document.getElementById("#container").innerText = "Hello!";

//Add the class main to the div with a class of footer.
document.querySelector(".footer").classList.add("main");

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");

//Create a new li element.
let newLi = document.createElement("li");
document.body.appendChild(newItem);

//Give the li the text "four".
newItem.innerText = "four";

//Append the li to the ul element.
document.querySelector("ul").appendChild(newLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".
let orderedList = document.querySelectorAll("ol");
orderedList.forEach(function(item){
    return item.style.background = "green";
})

//Remove the div with a class of footer.
document.querySelector(".footer").remove();
