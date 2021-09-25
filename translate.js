var text_input = document.querySelector("#txt_input");
console.log(text_input)
var button_translate = document.querySelector("#btn_translate");
button_translate.addEventListener("click", function(){
    console.log("clicked") ; console.log("Input", text_input.value)
})