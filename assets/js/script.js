var tasks = {}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create a new object to track all task time arrays
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
            var taskId = task.taskId;
            var text = task.text;

            console.log(taskId);
            console.log(time)
            console.log(text)

            $("textarea[data-id='" + time + "']").val(text);
        })
    })
}


// Current Date
var currentDay = moment().format('dddd, MMMM Do')
$("#currentDay").text(currentDay)

// when you click on a save button, prevent reset? and save task to Array then localStorage
$(".input-group").on("click", "button", function() {
    event.preventDefault();

    // get data-id of button
    var taskId = $(this).attr("data-id");
    // get value of corresponding textarea
    var taskContent = $("textarea[data-id='"+taskId+"']").val()

    tasks[taskId].push({
        text: taskContent,
        taskId: taskId
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))

})

loadTasks();
