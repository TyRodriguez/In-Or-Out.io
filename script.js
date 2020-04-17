$(document).ready(function () {
  var instance = M.Dropdown.init($(".dropdown-trigger"), {
    hover: true,
    coverTrigger: false,
  });
  // Put in the text for the option that the user chose from the dropdown menu
  $("#dropdown1").on("click", "li", function () {
    $(".dropdown-trigger").text($(this).text());
  });
  // var resultsEl =  $("#results");
  $("button").on("click", async function () {
    event.preventDefault();
    // get the user input for search terms
    var userZipCode = $(".user-zip").val().trim();
    var userDiet = $(".dropdown-trigger").text().toLowerCase();
    var restaurantInfo = $(this);
    const { results } = await $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" +
        userZipCode +
        "&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
      method: "GET",
    });
    let latlgn = results[0].geometry.location;
    
    const googleResponse = await $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        latlgn.lat +
        "," +
        latlgn.lng +
        "&radius=24000&keyword=" +
        userDiet +
        "&type=restaurant+meal_delivery+meal_takeaway&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
      method: "GET",
    }).then(function (response) {
      $("#results").empty();
      var results = response.results;
      
      for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div>")
          .addClass("col s4")
          .addClass("place" + [i]);
    
        var name = $("<p>").text("Name: " + results[i].name);
        newDiv.append(name);
        var address = $("<p>").text(results[i].vicinity);
        newDiv.append(address);
        var rating = $("<p>").text("Rating: " + results[i].rating);
        newDiv.append(rating);

        const hourCheck =
          results[i].opening_hours && !results[i].opening_hours.open_now;
        const photoRef =
          results[i].photos && results[i].photos[0].photo_reference;
       
        // var openhours = results[i].opening_hours.open_now
        if (hourCheck) {
          var openNow = $("<p>").text(
            "Open: " + results[i].opening_hours.open_now
          );
        } else {
          openNow = $("<p>").text("Open: ");
        }
        // var openNow = $("<p>").text("Open: " + results[i].opening_hours.open_now);
        newDiv.append(openNow);
        if (photoRef) {
          var image = $("<img>").attr(
            "src",
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&maxheight=100&photoreference=${photoRef}&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc`
          );
          newDiv.prepend(image);
        }
        $("#results").append(newDiv);
      }
    });
  });
});
