function Event (name, date) {
  this.name = name;
  this.date = date;
}

// Stores all days that we have events for
var days = {};

$(document).ready(function() {
  $("form#event").submit(function(event) {
    event.preventDefault();
    // Get input and store to variables
    var inputEvent = $("input#event-name").val();
    var inputDate = $("input#event-date").val();

    if (!inputEvent || !inputDate) {
      alert("Invalid Input");
    } else {
      // Make a new event to store the input
      var newEvent = new Event(inputEvent, inputDate);

      // If our list of days has this day already, we add the event to that day. If not, we add an entry for this day
      if (days.hasOwnProperty(inputDate)) {
        days[inputDate].push(newEvent);
      } else {
        days[inputDate] = [newEvent];
      }


      $("ul.events").empty();
      // Get all the keys in days (which should be all of our dates), then sort them, and list them in order on the page.
      Object.keys(days).sort().forEach(function(date) {
        $("ul.events").append("<li><span class='day-" + date + "'>" + date + "</span></li>");

        // Add a click listener to each date
        $(".day-" + date).click(function() {
          $(".display").show();
          $(".display").empty();
          $(".day").text(date);

          // Show all events attatched to this day
          days[date].forEach(function(dayEvent) {
            $(".display").append("<li>" + dayEvent.name + "</li>");
          });
        });
      });
      $("input").val("");
    }
  });
});
