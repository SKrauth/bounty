$(document).ready(function(){


//Using .submit to handle the form and link the submit button to an action.
    $( "#programForm" ).submit(function( event ){


//building object from form.html's inputs
        var formObject = {};
        formObject.programName = $( "#programName" ).val();
        formObject.county = $( "#county" ).val();
        formObject.contactName = $( "#contactName" ).val();
        formObject.email = $( "#email" ).val();
        formObject.phoneNumber = $( "#phoneNumber" ).val();
        formObject.cost = $( "#cost" ).val();
        formObject.certificate = $( "#certificate" ).val();
        formObject.timeline = $( "#timeline" ).val();
        formObject.timeOfDay = $( "#timeOfDay" ).val();
        formObject.meals = $( "#meals" ).val();
        formObject.affiliation = $( "#affiliation" ).val();
        formObject.otherBenefits = $( "#otherBenefits" ).val();
        formObject.ageMin = $( "#ageMin" ).val();
        formObject.ageMax = $( "#ageMax" ).val();
        formObject.pastSuccess = $( "#pastSuccess" ).val();
        formObject.pastParticipants = $( "#pastParticipants" ).val();
        formObject.wordOut = $( "#wordOut" ).val();
        formObject.funded = $( "#funded" ).val();
        formObject.impediments = $( "#impediments" ).val();
        formObject.avgNumParticip = $( "#avgNumParticip" ).val();
        formObject.description = $( "#description" ).val();
        formObject.programUrl = $( "#programUrl" ).val();
        formObject.location = $( "#location" ).val();
        formObject.partners = $( "#partners" ).val();
        formObject.servePop = $( "#servePop" ).val();
        formObject.scholarships = $( "#scholarships" ).val();
        formObject.parentsInvolved = $( "#parentsInvolved" ).val();
        formObject.measureSuccess = $( "#measureSuccess" ).val();
        formObject.NCFLFunded = $( "#NCFLFunded" ).val();
        formObject.bringDayOne = $( "#bringDayOne" ).val();
        formObject.inPerson = $( "#inPerson" ).val();

        $.post("/api/programs", formObject, function(){
        })
            .done(function(){

                formObject = {};

            })
            .fail(function(){

//This will stop the submit funtion from refreshing page, possibly for missing form pieces.
                event.preventDefault();

            });

    });

});
