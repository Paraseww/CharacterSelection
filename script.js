const select = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

select.addEventListener("change", function(){

    let character = select.value;

    image.src = "images/" + character + ".png";

});