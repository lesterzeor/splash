import $ from "jquery";
$(document).ready(function() {
  console.log("working");
  $(".log-btn").click(function() {
    // $(".log-status").addClass("wrong-entry");
    $(".alert").fadeIn(500);
    setTimeout($(".alert").fadeOut(2500), 3000);
  });
  $(".form-control").keypress(function() {
    $(".log-status").removeClass("wrong-entry");
  });
});
