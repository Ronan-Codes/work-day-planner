var tasks = {}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // If nothing in localStorage, create a new object to track all task time arrays
    if (!tasks) {
        tasks = {
            9: [],
            10: [],
            11: [],
            12: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        }
    }

    // loop over object properties
    $.each(tasks, function(time, arr) {
        arr.forEach(function(task) {
            var text = task.text;

            // Load tasks for each time block
            $("textarea[data-id='" + time + "']").val(text);
        })
    })
}


// Current Date
var currentDay = moment().format('dddd, MMMM Do')
$("#currentDay").text(currentDay)
// Current Time
var currentTime = moment().hours()
var currentTimeParsed = parseInt(currentTime)


// Audit Tasks for color coding
var auditTask = function() {
    $("textarea").each(function() {
        var hourTest = parseInt($(this).attr("id"));

        // if (hour > currentTime)
        if (currentTimeParsed > hourTest) {
            $(this).addClass("past past:focus");
        }
        else if (currentTimeParsed < hourTest) {
            $(this).addClass("future future:focus");
        }
        else {
            $(this).addClass("present present:focus");
        }
    })

}


// Save Task Handler
$(".input-group").on("click", "button", function() {
    event.preventDefault();

    // Get data-id of button
    var taskId = $(this).attr("data-id");
    // Get task value of corresponding textarea
    var taskContent = $("textarea[data-id='"+taskId+"']").val()

    // Update tasks array
    tasks[taskId].push({
        text: taskContent,
        taskId: taskId
    })

    // Update localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks))
})

auditTask();
loadTasks();
