/*let button = document.querySelector(".name-of-search"); //див кнопки, по которой должен быть клик
let body = document.querySelector(".body-of-form"); // само выплывающее тело формы
let form = document.querySelector(".form-of-order") // вся форма в целом

button.addEventListener("click", function (evt){
    evt.preventDefault();
    body.classList.add("float");
}) */

$(".name-of-search").on("click", function () {
  //$(".body-of-form").fadeIn(150);
  $(".body-of-form").css({
    display: "grid",
  });
});
