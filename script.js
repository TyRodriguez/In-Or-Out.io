var instance = M.Dropdown.init($(".dropdown-trigger"), {coverTrigger:false}, {hover:true});

$(document).ready(function(){
  //queryUrlGp = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
 // key = "AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc"
 $.ajax({
     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.717472,-117.831146&radius=1500&keyword=vegan&type=restaurant&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
     method: "GET"
   }).then(function(response) {
    // console.log("google"); 
    //console.log(response);
    // console.log("--------------");
   });

  var queryURL = "https://developers.zomato.com/api/v2.1/";
  var apiKey = "2431f14dc42d9b24e352507314c14c7c";

  $.ajax({
    url: queryURL + "categories",
    method: "GET",
    headers: { "user-key": apiKey },
}).then(function (returned) {
    //console.log("zomato category"); 
    // console.log(returned);
    // console.log("--------------");
});

$.ajax({
  url: queryURL + "reviews",
  method: "GET",
  headers: { "user-key": apiKey },
}).then(function (data) {
  // console.log("zomato review");
  //console.log(data);
  // console.log("--------------");
});

});

// var resultsEl =  $("#results");
$("button").on("click", function() {
  event.preventDefault();
  var restaurantInfo = $(this);
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.717472,-117.831146&radius=1500&keyword=vegan&type=restaurant&key=AIzaSyCGNI5n1Simc244_UioA4k7loLg2-V8Usc",
    method: "GET"
  }).then(function(response) {
      var results = response.results;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div>").addClass("col-s12").addClass('place'+[i]);
        console.log(results[i].name);
        console.log(results[i].vicinity);
        console.log(results[i].opening_hours.open_now);
        console.log(results[i].rating);
        var name = $("<p>").text("Name: " + results[i].name);
        newDiv.append(name);
        var address = $("<p>").text(results[i].vicinity);
        newDiv.append(address);
        var rating = $("<p>").text("Rating: " + results[i].rating);
        newDiv.append(rating);
        var openNow = $("<p>").text("Open: " + results[i].opening_hours.open_now);
        newDiv.append(openNow);
        var image = $("<img>").attr("src", results[i].photos[0].html_attributions[0]);
        newDiv.append(image);
        var rowEl = $("<div>").addClass("row").append(newDiv);
        $("#results").append(rowEl);
        
      }
    });
});
// //zomato results for dine-out or delivery categories
// $("button").on("click", function() {
//   event.preventDefault();
//   var queryURL = "https://developers.zomato.com/api/v2.1/";
//   var apiKey = "2431f14dc42d9b24e352507314c14c7c";
//   $.ajax({
//     url: queryURL + "categories",
//     method: "GET",
//     headers: { "user-key": apiKey },
// }).then(function(returned) {
//       var returnedInfo = returned.categories;
//       console.log(returnedInfo);
//       for (var i = 0; i < returnedInfo.length; i++) {
//         // var newDiv2 = $("<div>").addClass("col-s12");
//         console.log(returnedInfo[i].categories.name);
//         var type = $("<p>").text("Type: " + returnedInfo[i].categories.name);
//         newDiv2.append(type);
//         var rowEl2 = $("<div>").addClass("row").append(newDiv2);
//         $("#results").append(rowEl2);
        
//       }
//     });
// });
