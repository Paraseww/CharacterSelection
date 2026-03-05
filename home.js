const selectBox = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

selectBox.addEventListener("change", function () {

    let selectedCharacter = selectBox.value;

    image.src = "images/" + selectedCharacter + ".png";

});