console.log("hello");
console.log("new branch");

var sunny = $("#sunny");
var cloudy = $("#cloudy");
var rainy = $("#rainy");
var snowy = $("#snowy");
var stormy = $("#stormy");


// sunny.hide();
// cloudy.hide();
// rainy.hide();
// snowy.hide();
// stormy.hide();

weatherHide();



$('#signUp').addClass('animated rubberBand');

//CODE NEEDS TO BE ADDED TO APPEND TEAM NAME TO DOM USING ANIMATION
$('#teamName').addClass('animated rubberBand');

var weatherArray = [
{
    teamName: "IND",
    teamCity: "Dome"
},
{
    teamName: "ARI",
    teamCity: "Dome"
},
{
    teamName: "ATL",
    teamCity: "Dome"
},
{
    teamName: "BAL",
    teamCity: "Baltimore"
},
{
    teamName: "CLE",
    teamCity: "Cleveland"
},
{
    teamName: "BUF",
    teamCity: "Buffalo"
},
{
    teamName: "CAR",
    teamCity: "Charlotte"
},
{
    teamName: "CHI",
    teamCity: "Chicago"
},
{
    teamName: "CIN",
    teamCity: "Cincinnati"
},
{
    teamName: "DAL",
    teamCity: "Dome"
},
{
    teamName: "DEN",
    teamCity: "Denver"
},
{
    teamName: "DET",
    teamCity: "Dome"
},
{
    teamName: "GB",
    teamCity: "Green Bay"
},
{
    teamName: "HOU",
    teamCity: "Dome"
},
{
    teamName: "JAX",
    teamCity: "Jacksonville"
},
{
    teamName: "KC",
    teamCity: "Kansas City"
},
{
    teamName: "LAC",
    teamCity: "Los Angeles"
},
{
    teamName: "LAR",
    teamCity: "Los Angeles"
},
{
    teamName: "MIA",
    teamCity: "Miami"
},
{
    teamName: "MIN",
    teamCity: "Dome"
},
{
    teamName: "NE",
    teamCity: "Foxborough"
},
{
    teamName: "NO",
    teamCity: "Dome"
},
{
    teamName: "NYG",
    teamCity: "East Rutherford"
},
{
    teamName: "NYJ",
    teamCity: "East Rutherford"
},
{
    teamName: "PHI",
    teamCity: "Philadelphia"
},
{
    teamName: "OAK",
    teamCity: "Oakland"
},
{
    teamName: "PIT",
    teamCity: "Pittsburgh"
},
{
    teamName: "SEA",
    teamCity: "Seattle"
},
{
    teamName: "SF",
    teamCity: "Santa Clara"
},{
    teamName: "TB",
    teamCity: "Tampa"
},
{
    teamName: "TEN",
    teamCity: "Nashville"
},
{
    teamName: "WAS",
    teamCity: "Landover"
}];

function weatherHide() {
        sunny.hide();
        cloudy.hide();
        rainy.hide();
        snowy.hide();
        stormy.hide();
};



 function weatherAnimate(weather) {
        
        weatherHide();


        weather.show();

    
    $('#weatherDiv').addClass('animated shake');
    
    $('#weatherDiv').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function(){
        $(this).removeClass('animated shake');
    
    });
};


  $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.fantasydata.net/v3/nfl/stats/JSON/News?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","25f5b86281bf4ec2b54615551885b55b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            // alert("success");
            console.log(data);


            for (var i = 0; i < 3; i++) {

                var hNum = i + 1;

                $("#headline" + hNum).text(data[i].Title);

                console.log(hNum);

                $("#news" + hNum).attr({
                    text: "Link to Article",
                    href: data[i].Url,
                    target: "_blank",
                    class: "noDot"
                })


            }

            // $("#headlineOne").text(data[0].Title);
            // $("#newsOne").append($("<a>", {
            //         text: "Link to Article",
            //         href: data[0].Url,
            //         target: "_blank",
            //         class: "noDot"
            //     }));

            // $("#headlineTwo").text(data[1].Title);
            // $("#newsTwo").append($("<a>", {
            //         text: "Link to Article",
            //         href: data[1].Url,
            //         target: "_blank",
            //         class: "noDot"
            //     }));

            // $("#headlineTwo").text(data[2].Title);
            // $("#newsTwo").append($("<a>", {
            //         text: "Link to Article",
            //         href: data[2].Url,
            //         target: "_blank",
            //         class: "noDot"
            //     }));
            
            
        })
        .fail(function() {
            // alert("error");
        });
    });

$(".teamList").on("click", function() {

    


    var team = $(this).attr("data-name")

    var gamesArray = [];
    var gamesObj = {
        homeTeam: "",
        awayTeam: ""
    };
    var secondArray = [];
    var thirdArray = [];
    $("#weatherDiv").empty();


   

    $(function() {
        var params = {
            // Request parameters
        };
	
        $.ajax({
        	url: "https://api.fantasydata.net/v3/nfl/scores/JSON/ScoresByWeek/2017/15?" + $.param(params),
        	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","25f5b86281bf4ec2b54615551885b55b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            // alert("success");
            console.log(data);

            for (var i = 0; i < data.length; i++) {

            	gamesObj = {
            		homeTeam: data[i].HomeTeam,
            		awayTeam: data[i].AwayTeam
            	}

            	// console.log(gamesObj);
            	// console.log(team);
            	gamesArray.push(gamesObj);
            }

            console.log(gamesArray);

            for (var i = 0; i < gamesArray.length; i++) {
            	if (team == gamesArray[i].homeTeam || team == gamesArray[i].awayTeam) {
            		secondArray.push(gamesArray[i].homeTeam);

            	}



            }

            console.log(secondArray);         

            var city = secondArray[0];

            for (var i = 0; i < weatherArray.length; i++) {
            	if (city === weatherArray[i].teamName) {

            		thirdArray.push(weatherArray[i].teamCity);

            	}
            }
            console.log(thirdArray[0]);

            
            // var hostSite = encodeURI(thirdArray[0]);
            var hostSite = thirdArray[0];
            console.log(hostSite);

            if (hostSite === "Dome") {
            	var domeText = "This game is played in a dome";
            	$("#weatherDiv").append(domeText);

                weatherHide();
            }
            else {
            	var APIkey = "cce5a44b1d7a13fb2fa6a72a5b7e150d";
            	var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + hostSite + "&appid="+APIkey;
    // Create an AJAX call to retrieve data Log the data in console
    				$.ajax({
    				url: queryURL,
    				method: "GET",
    			}).done(function(response) {
    				console.log(response);

    					var K = response.main.temp;
    					var tempConverter = (K - 273.15) * 1.80 + 32;
    					var currentTemp = Math.round(tempConverter);

    					var cityDiv = $("<div>").html("Game Site: " + response.name);
      					var windDiv = $("<div>").html("Current Wind Speed: " + response.wind.speed + " MPH");
      					var humidityDiv = $("<div>").html("Current Humidity: " + response.main.humidity + "degrees, F");
      					var tempDiv = $("<div>").html("Current Temperature: " + currentTemp + " degrees, F");

      					$("#weatherDiv").append(cityDiv);
      					cityDiv.append(tempDiv);
      					tempDiv.append(windDiv);
      					windDiv.append(humidityDiv);

                            if (currentTemp < 32) {
                                weatherAnimate(stormy);
                            }
                            else {
                                weatherAnimate(sunny);
                            }
    	
    })
}
})
        .fail(function() {
        	alert("error 1");
        });
    });

	$(function() {
		var params = {
            // Request parameters
        };

        $.ajax({
        	url: "https://api.fantasydata.net/v3/nfl/stats/JSON/Injuries/2017/14/" + team + "?" + $.param(params),
        	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","25f5b86281bf4ec2b54615551885b55b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            // alert("success");            
            // console.log(data);

            $("#myDiv").empty();

            for (var i = 0, num = 1; i < data.length && num <= 10; i++) {

            	if ((data[i].DeclaredInactive) && (data[i].Position === "TE" || data[i].Position === "QB" ||
            		data[i].Position === "WR" || data[i].Position === "RB")) {
            		num++;
            	var newInjDiv = $("<ul>");
            	newInjDiv.text(data[i].Position + " " + data[i].Name + " is Inactive");

            	$("#myDiv").append(newInjDiv);
            }
        }        

    })
        .fail(function() {
            alert("error 2");
        });
    });

	$(function() {
		var params = {
            // Request parameters
        };

        $.ajax({
        	url: "https://api.fantasydata.net/v3/nfl/stats/JSON/NewsByTeam/" + team + "?" + $.param(params),
        	beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","25f5b86281bf4ec2b54615551885b55b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            // alert("success");
            // console.log(data);

            $("#newsDiv").empty();

            for (var i = 0; i < 10; i++) {
                var newNewsDiv = $('<li>');
                var newA = $("<a>", {
                    text: data[i].Title,
                    href: data[i].Url,
                    target: "_blank",
                    class: "noDot"
                });

                // newA.attr("href", data[i].Url);

                // newNewsDiv.append($("<a>"));
                    // newA.attr("src", data[i].Url);

                // newA.html(data[i].Title);

                // newNewsDiv.append(newA);

                $("#newsDiv").append(newNewsDiv);
                newNewsDiv.append(newA);
            }
        })
        .fail(function() {
            alert("error 3");
        });
    });


})

