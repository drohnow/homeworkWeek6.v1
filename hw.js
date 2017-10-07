

var SPORTS = [];

     function buttonCreator() {

     	$("#divButtons").empty();

        for (var i = 0; i < SPORTS.length; i++) {

          var a = $("<button>");
         
          a.addClass("sport");

         a.addClass("sportStyle")

         //a.addClass("buttonStyleClick")

         
          a.attr("sport-name", SPORTS[i]);
         
          a.text(SPORTS[i]);
          
          $("#divButtons").append(a);

       
        }

        

      }


     $("#submitButton").on("click", function(event) {

        event.preventDefault();

        var SPORT = $("#inputText").val().trim();
       
        SPORTS.push(SPORT);

        buttonCreator()

        $("#inputText").val("");
      });



function fnDisplaySport() {
	      	$(":button").removeClass("buttonStyleClick");
	        $("#divImages").empty();
	       

	        var SPORT = $(this).attr("sport-name");
	        $(this).addClass("buttonStyleClick");
	        	//buttonCreator()
	        

	        //$(this).removeClass("sportStyle");
	        



	        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + SPORT + "&api_key=dc6zaTOxFJmzC&limit=10"

	       
	      
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	     }).done(function(response) {

	     	 console.log(response.data)
	     	 var data = response.data
	     	 console.log(data)



	    
		for (i = 0; i < data.length; i++) {
			
			var rating = response.data[i].rating
			console.log(rating)
			var sportDiv = $("<div>");

			

			var imgURL = data[i].images.downsized_still.url
		 	var imgAnimatedURL = data[i].images.downsized.url
	
		

          var image = $("<img>").attr("src", imgURL);
        
          image.attr("data-still", imgURL);
          image.attr("data-animated", imgAnimatedURL);
          image.attr("data-state", "still")
          image.addClass("gif")

      

     
          var pOne = $("<p>").text("Rating: " + rating);


        sportDiv.append(pOne);
        sportDiv.addClass("divSportContainer")
        sportDiv.append(image);
        $("#divImages").append(sportDiv);
       
           

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
      }
    };

      $(document).on("click", ".sport", fnDisplaySport);

      $(document).on("click", ".gif", fnAnimateGif);

      // Calling the renderButtons function to display the intial buttons
      buttonCreator()




