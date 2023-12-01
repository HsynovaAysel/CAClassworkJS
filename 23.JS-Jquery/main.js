let arr = JSON.parse(localStorage.getItem("add")) || [];

$(".add").on("click", function (event) {
  event.preventDefault();
  arr.push($("input").val());
  localStorage.setItem("add", JSON.stringify(arr));
  drawList(arr);
  $("input").val("");
});

function drawList(arr) {
  $(".box").html("");
  arr.forEach((el) => {
    let span = document.createElement("span");
    span.style.backgroundColor = "rgb(0, 0, 255, 0.3)";
    span.style.border = "1px solid blue";
    span.style.borderRadius = "5px";
    span.style.padding = "5px";
    span.style.margin = "0 5px 0 0";

    span.innerText = el;

    $(".box").append(span);

    span.addEventListener("click", function () {
      this.remove();
      arr = arr.filter((item) => item !== el);
      localStorage.setItem("add", JSON.stringify(arr));
    });
  });
}
drawList(arr);
