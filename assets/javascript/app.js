<<<<<<< HEAD

=======
console.log("hello");


$(".teamList").on("click", function() {
	var team = $(this).attr("data-name")

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
            console.log(data);

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
            alert("error");
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
            console.log(data);

            $("#newsDiv").empty();

            for (var i = 0; i < 10; i++) {
            	var newNewsDiv = $('<ul>');
            	// var newA = $("<a>");

            	newNewsDiv.text(data[i].Title);
            	// newA.attr("href", data[i].Url);

            	newNewsDiv.append($("<a>"));
            		newNewsDiv.attr("src", data[i].Url);
            	

            	// newNewsDiv.append(newA);

            	$("#newsDiv").append(newNewsDiv);
            }
        })
        .fail(function() {
            alert("error");
        });
    });

   
})
>>>>>>> dcc7f7626208c9a276aeeb9566aec7ddfbe9aa04
