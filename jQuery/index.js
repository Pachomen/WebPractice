
    //Selecting an Element
    console.log($("h1"));

    //Manipulate Classes
    $("h1").css("color","red");

    console.log($("h1").css("color"));

    $("h1").addClass("big-title");
    $("h1").addClass("big-title other-class");

    $("h1").removeClass();

    $("h1").hasClass("big-title");

    //Manipulate Text
    $("h1").text("Bye");

    $("button").text("Bye Button");

    $("button").html("<em>Hey</em>");

    //Manipulate Attributes
    $("img").attr("src");

    $("a").attr("href", "https://www.yahoo.com");

    Console.log($("h1").attr("class"));

    //Add an EventListener

    $("h1").click(function() {
        $("h1").css("color","red");
    });

    $("button").click(function() {
        $("h1").css("color","green");
    });

    $("input").keypress(function(event) {
        console.log(event.key);
    });

    $(document).keypress(function(event) {
        $("h1").text(event.key);
    });

    //With any event use .on

    $("h1").on("mouseover", function(){
        $("h1").css("color", "blue")
    });

    //Add and remove elements with JQuery

    $("h1").before("<button>New</button>");
    
    $("h1").after("<button>New</button>");

    $("h1").prepend("<button>New</button>");

    $("h1").append("<button>New</button>");

    $("h1").remove();

    //add Animation

    $("h1").hide();
    $("h1").toggle();

    $("h1").fadeOut();

    $("h1").fadeToggle();

    $("h1").slideUp();


    $("h1").animate({opacity: 0.5}); //Only for numeric value
