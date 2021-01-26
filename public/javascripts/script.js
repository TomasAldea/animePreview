

$(document).ready(function () {
  $("#list").click(function (event) {
    event.preventDefault();
    $("#products .item").addClass("list-group-item");
  });
  $("#grid").click(function (event) {
    event.preventDefault();
    $("#products .item").removeClass("list-group-item");
    $("#products .item").addClass("grid-group-item");
  });
});

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(".goUp").addClass("active");
  } else {
    $(".goUp").removeClass("active");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(element) {
  $(element).removeClass("active");

  $("html, body").animate({ scrollTop: 0 }, 500, "swing");
}

setTimeout(() => {
  $("body").removeClass("preload");
}, 1000);

// likes button
/*
  var button = document.querySelectorAll(".clickme"),
    count = 0;
  button.onclick = function () {
    count += 1;
    button.innerHTML = " " + count;
  };
*/
