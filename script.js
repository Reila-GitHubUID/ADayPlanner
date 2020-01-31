// Gathered from index.html as reference
    // <header>
    // <p id="currentDay" class="lead"></p>
    // </header>
    // <div class="container">
    //   <!-- Timeblocks go here -->
    // </div>

// Gathered from style.css, and will be leveraged here.
    // .container has multiple .row
    // .row has .timeBlock, .description and .saveBtn (and .saveBtn i:hover)
    // .timeBlock has .hour
    // textarea has .description
    // .description has .past, .present, and .future
//----------------------------------------------------

// initialization
let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let $container = $(".container");

// displaying today's Day, Month Date, Year in the header using Moment.js
$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

$(document).ready(function () {
    // contents inside the <div class="container">
    for (let i = 0; i < workHours.length; i++) {
        // create and append a time-block, description and saveBtn in a textarea row along with their classes
        let $newRow = $("<div>").attr("class", "row")
        $container.append($newRow);

        let $timeBlock = $("<div>").attr("class", "timeBlock").text(workHours[i]);
        $newRow.append($timeBlock);

        let $description = $("<textarea>").attr("class", "description");
        $newRow.append($description);

        $newRow.append($("<button>").attr("class", "saveBtn").text("💾"));


        if (moment()) {
            $description.attr("class", "past");
        } else if (moment().toDate()) {
            $description.attr("class", "present");
        } else {
            $description.attr("class", "future");
        }

        // create and append a textarea row into a container
        $container.append($newRow);
    }
});