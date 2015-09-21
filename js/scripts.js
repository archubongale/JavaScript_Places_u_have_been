$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newLocation = $("input#new-location").val();
    var newLandmark = $("input#landmarks").val();
    var timeOfYear = $("input#timeofyear").val();
    var newPlace = { location: newLocation, landmarks: newLandmark, timeOfYear: timeOfYear };

    $("ul#places").append("<li><span class='clickable'>" + newPlace.location + "</span></li>");
    $("input#new-location").val("");
    $("input#landmarks").val("");
    $("input#timeofyear").val("");

    $(".result").show();
  });
});
