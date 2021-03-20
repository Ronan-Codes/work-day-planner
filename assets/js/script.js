var tasks = {};

// Current Date
var currentDay = moment().format('dddd, MMMM Do')
$("#currentDay").text(currentDay)

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create new object to track all task status arrays
    if (!tasks) {
        tasks = {
          past: [],
          preset: [],
          future: []
        }
      }

    // loop over object properties
    $.each(tasks, function(list, arr) {
        // then loop over sub-array
        arr.for
    })
}
