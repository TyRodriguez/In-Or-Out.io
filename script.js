var instance = M.Dropdown.init($(".dropdown-trigger"), {coverTrigger:false}, {hover:true});

$("")

    // After data comes back from the request
    .then(function(response) {
      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;
      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag
        var restaurantDiv = $("<div>");
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        // Creating and storing an image tag
        var restaurantImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        restaurantImage.attr("src", results[i].images.fixed_height.url);
        // Appending the paragraph and image tag to the animalDiv
        restaurantDiv.append(p);
        restaurantDiv.append(restaurantImage);
        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#results").html(restaurantDiv);
      }
    });