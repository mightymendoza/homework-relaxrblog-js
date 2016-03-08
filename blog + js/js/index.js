console.log("hola");

$( document ).ready(documentReady);
    function documentReady () {

    	$ (".learnmore").click(learnMoreClick);

		function learnMoreClick() {
			event.preventDefault();
			$("#learnmoretext").slideDown();
			$(".learnmore").hide();

		}


		$ (".readmore").click(readmoreClick);

		function readmoreClick () {
			event.preventDefault();
			$("#show-this-on-click").slideDown();
			$(".readmore").hide();
			$(".readless").show();
			
		}

		$ (".readless").click(readlessClick);

		function readlessClick () {
			event.preventDefault();
			$("#show-this-on-click").slideUp();
			$(".readmore").show();
			$(".readless").hide();
		}



    }






