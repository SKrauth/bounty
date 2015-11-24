


$(document).ready(function(){
  //Cached references to the dropdown menus
  var $county = $("#location").children("span")[0];
  var $cost = $("#cost").children("span")[0];
  var $duration = $("#duration").children("span")[0];
  var $age = $("#age").children("span")[0];



  $.handlebars({
      templatePath: 'templates'
  });


    //These are references to the select drop down boxes for search functionality

    var options = {
        method: "GET",
        url: "/api/programs",
        dataType: "json"
    };

    $.ajax(options)
     .done(function(data){
        // now this will fetch <path/to/templates/content.hbs>
        //Filter the data based on options from the list


        $('#viewpage').render('viewpage', {

            programs: data

        });
    })
     .error(function(err){
        console.log(err);
    });


    $("#viewpage").on("click", "button", function(){
      $(this).siblings(".more-info").fadeToggle();
    });

    $("#search").on('click', getPrograms);

    //This function will obtain the programs collection from the server
    function getPrograms(){
      var age = $age.innerText;
      var county = $county.innerText;
      var duration = $duration.innerText;
      var cost = $cost.innerText;

      if(age === "Any"){age = false;} else { age = parseInt(age);}
      if(county ==="Any"){ county = false;}
      if(duration ==="Any"){duration = false;} else { duration = parseInt(duration.split(" ")[0]);}
      if(cost === "Any"){cost = false;} else { cost = parseInt(cost.substring(1));}


        var options = {
            method: "GET",
            url: "/api/programs",
            dataType: "json"
        };

        $.ajax(options)
         .done(function(data){
            // now this will fetch <path/to/templates/content.hbs>
            //Filter the data based on options from the list
            var response = filterPrograms(data,county,cost,duration,age);

            $('#viewpage').render('viewpage', {

                programs: response

            });
        })
         .error(function(err){
            console.log(err);
        });
    }
});
