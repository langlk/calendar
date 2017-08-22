function Event (name, date) {
  this.name = name;
  this.date = date;
}





$(document).ready(function() {
  $("form#event").submit(function(event) {
    event.preventDefault();
    var inputEvent = $("input#event-name").val();
    var inputDate = $("input#event-date").val();

    var newEvent = new Event(inputEvent, inputDate);
    console.log(newEvent);
    $("ul.events").append("<li><span class='event'>" + newEvent.date + "</span></li>");

    $(".event").last().click(function() {
      $(".display").show();
      $(".display").text(newEvent.name + " "  + newEvent.date);

    });
  });
});
