$(document).ready(function() {
  $("form#event").submit(function(event) {
    event.preventDefault();
    var inputEvent = $("input#event-name").val();
    var inputDate = $("input#event-date").val();

    console.log(inputEvent, inputDate);

  });
});
