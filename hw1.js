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
	        //var SPORT = $(this).attr("sport-name");
	        $("#divImages").empty();
	        var SPORT = $(this).attr("sport-name");

	        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + SPORT + "&api_key=dc6zaTOxFJmzC&limit=10"

	        console.log(SPORT)
	        console.log(queryURL)
	        // Creating an AJAX call for the specific movie button being clicked
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	     }).done(function(response) {


		for (i = 0; i < queryURL.length; i++) {
				
			var imgURL = response.data[i].images.downsized_still.url
		 	var imgAnimatedURL = response.data[i].images.downsized.url
		
		 //console.log(imgURL)

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
          image.attr("data-still", imgURL);
          image.attr("data-animated", imgAnimatedURL);
          image.attr("data-state", "still")
          image.addClass("gif")

          // Appending the image
        $("#divImages").append(image);
           

		}

	})

}



   //$(".gif").on("click", function() {
   	function fnAnimateGif() {
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        console.log(state)
        console.log(this);
      }
    };

      $(document).on("click", ".sport", fnDisplaySport);

      $(document).on("click", ".gif", fnAnimateGif);

      // Calling the renderButtons function to display the intial buttons
      buttonCreator()




