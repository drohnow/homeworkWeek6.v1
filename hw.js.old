

var SPORTS = [];

     function buttonCreator() {

     	$("#divButtons").empty();

        for (var i = 0; i < SPORTS.length; i++) {

          var a = $("<button>");
         
          a.addClass("sport");
         
          a.attr("sport-name", SPORTS[i]);
         
          a.text(SPORTS[i]);

          $("#divButtons").append(a);
          

        }

        console.log(SPORTS);

      }


     $("#submitButton").on("click", function(event) {

        event.preventDefault();

        var SPORT = $("#inputText").val().trim();
       
        SPORTS.push(SPORT);

        buttonCreator()

        $("#inputText").val("");
      });


	function fnDisplaySport() {
		    	var SPORT = $(this).attr("sport_name");
		        //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
		        var queryURL = "http://api.giphy.com/v1/gifs/search?=" + SPORT + "&api_key=dc6zaTOxFJmzC&limit=10"

		        $.ajax({
		          url: queryURL,
		          method: "GET"
		        }).done(function(response) {
		          $("#divImages").text(JSON.stringify(response));
		       
		        });


		        var sportDiv = $("<div class='sport'>");

          		//var rating = response.data[i].rating;

          
          		//var pRating = $("<p>").text("Rating: " + rating);




		function displayMovieInfo() {

			var SPORT = $(this).attr("sport_name");
		        //var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
		    var queryURL = "http://api.giphy.com/v1/gifs/search?=" + SPORT + "&api_key=dc6zaTOxFJmzC&limit=10"

	        // Creating an AJAX call for the specific movie button being clicked
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	     }).done(function(response) {


		//	for (i = 0; i < SPORT.length; i++) {
				
		//	}
		 var imgURL = response.data[0].images
		 console.log(imgURL)




          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
         $("#divImages").append(image);

		})

	    }

	}





