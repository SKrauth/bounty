/*
  These are utility functions that are going to be used to filter frontend data.
*/


/*
  This function takes a collection of objects then filters those based on location.
  @param programs --> the colleciton of objects to be filtered
  @param location --> the location to filter the objects by
  @return a collection of objects that are located at the specified location
*/
function filterByLocation(programs,location){
  var programsByLocation = _.filter(programs, function(program){
      return program.location === location;
  });

  return programsByLocation;
}



//@param cost --> the cost to filter objects by
function filterByCost(programs, cost){
  var programsByCost = _.filter(programs, function(program) {
    return program.cost === cost;
  });
  return programsByCost;
}

//@params timeline --> filter by length of time of the program
function filterByTimeLength(programs, timeline){
  var programsByTimeLength = _.filter(programs, function(program) {
    return program.timeline === timeline;
  });
  return programsByTimeLength;
}

//@marams timeOfDay --> filter by time of day
function filterByTimeOfDay(programs, timeOfDay){
  var programsByTimeOfDay = _.filter(programs, function(program) {
    return program.timeOfDay === timeOfDay;
  });
  return programsByTimeOfDay;
}


//@params age --> filter by age lower and upper
function filterByAgeMin(programs, ageMin){
  var programsByAgeMin = _.filter(programs, function(program) {
    return program.ageMin >= ageMin;
  });
  return programsByAgeMin;
}

function filterByAgeMax(programs, ageMax){
  var programsByAgeMax = _.filter(programs, function(program) {
    return program.ageMax <= ageMax;
  });
  return programsByAgeMax;
}

/*
  This is the overall filter function
*/
function filterPrograms(programs, location, cost, duration, age){
    var filteredPrograms = programs;
        //constraints on all four params (only these locations costs durations and ages)
    if (location && cost && duration && age){
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }
        //three filter params (one field doesnt matter)
    else if (location && cost && duration && !age){  //dont filter age (allow all age object properties)
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
    } else if (location && cost && !duration && age) {  //dont filter duration
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByAgeMin (filteredPrograms, age);
    } else if (location && !cost && duration && age) { //dont filter cost
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    } else if (!location && cost && duration && age) { //dont filter location
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }


                  //one filter param
    else if (location && !cost && !duration && !age) { //filter by loc
        filteredPrograms = filterByLocation(programs, location);

    } else if (!location && cost && !duration && !age) { //filter by cost
        filteredPrograms = filterByCost(filteredPrograms, cost);

    } else if (!location && !cost && duration && !age) { //filter by duration
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);

    } else if (!location && !cost && !duration && age) { //filter by age
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }

                    //two filter params
    else if (location && cost && !duration && !age) { //filter by location and cost
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByCost(filteredPrograms, cost);

    } else if (location && !cost && duration && !age) { //filter by location and duration
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);

    } else if (location && !cost && !duration && age) { //filter by location and age
        filteredPrograms = filterByLocation(programs, location);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);

    } else if (!location && cost && duration && !age) { //filter by cost and duration
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);

    } else if (!location && cost && !duration && age) { //filter by cost and age
        filteredPrograms = filterByCost(filteredPrograms, cost);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);

    } else if (!location && !cost && duration && age) { //filter by duration and age
        filteredPrograms = filterByTimeLength(filteredPrograms, duration);
        filteredPrograms = filterByAgeMin(filteredPrograms, age);
    }

    else if (!location && !cost && !duration && !age) { //returns errything
            filteredPrograms = programs;
        }

    return filteredPrograms;
}
