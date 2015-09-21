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

    $(".clickable").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".landmark").text(newPlace.landmarks);
      $(".timeofyear").text(newPlace.timeOfYear);

    });

    $(".result").show();
  });
});
