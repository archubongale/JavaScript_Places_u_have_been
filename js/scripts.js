$(document).ready(function() {
  $("#add-landmark").click(function() {
    $(".form-group").append('<div class="addLandmark">'+
                              '<label for = "landmarks">Add a landmark:</label>' +
                              '<input type="text" class="form-control landmarks">' +
                            '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var newLocation = $("input#new-location").val();
    var timeOfYear = $("input#timeofyear").val();
    var newPlace = { location: newLocation, landmarks: [] , timeOfYear: timeOfYear };

      $(".addLandmark").each(function() {
        var newLandmark = $(this).find("input.landmarks").val();
        newPlace.landmarks.push(newLandmark);
      });


    $("ul#places").append("<li><span class='clickable'>" + newPlace.location + "</span></li>");
    $("input#new-location").val("");
    $("input#timeofyear").val("");
    $("input.landmarks").val("");

    $(".clickable").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".timeofyear").text(newPlace.timeOfYear);
      $("ul.landmark").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $(".landmark").append("<li>"+landmark+"</li>");
      });
    });

    $(".result").show();
  });
});
