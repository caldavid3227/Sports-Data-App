console.log("hello");


 $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.fantasydata.net/v3/nfl/stats/JSON/Injuries/2017/14/NE?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","25f5b86281bf4ec2b54615551885b55b");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");            
            console.log(data);

            for (var i = 0, num = 1; i < data.length && num <= 10; i++) {

                if ((data[i].DeclaredInactive) && (data[i].Position === "TE" || data[i].Position === "QB" ||
                									data[i].Position === "WR" || data[i].Position === "RB")) {
                	num++;
                    var newInjDiv = $("<ul>");
                    newInjDiv.text(data[i].Position + " " + data[i].Name + " is Inactive");

                    $("#myDiv").append(newInjDiv);
                }


            }

            // for (var i = 0; i < 10; i++) {
            //     var newDiv =  $("<div>");
            //     var num = i + 1;

            //     // newDiv.text(data[i].Name);

            //     newDiv.text("#" + num + " " + data[i].Name + ": " + data[i].RushingYards);

            //     $("#myDiv").append(newDiv);



            // }

           




        })
        .fail(function() {
            alert("error");
        });
    });

