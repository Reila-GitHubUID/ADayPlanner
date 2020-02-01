// initialization
let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let $container = $(".container");


$(document).ready(function () {
    // displaying today's Day, Month Date, Year in the header using Moment.js
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    // contents inside the <div class="container">
    // Gathered from style.css, and will be leveraged here.
    // .container has multiple .row
    // .row has .timeBlock, .description and .saveBtn (and .saveBtn i:hover)
    // .timeBlock has .hour
    // textarea has .description
    // .description has .past, .present, and .future
    //----------------------------------------------------
    for (let i = 1; i <= workHours.length; i++) {
        // create and append a time-block, description and saveBtn in a textarea row along with their classes
        let $newRow = $("<div>").addClass("row").addClass("row"+i);
        $container.append($newRow);

        let $timeBlock = $("<div>").addClass("timeBlock").text(workHours[i-1]);
        $newRow.append($timeBlock);

        let $description = $("<textarea>").addClass("description");
        $description.addClass("present");  // Note to EL: this is only temporary
        if (localStorage.getItem("textarea"+i) != null) {
            var temp = localStorage.getItem("textarea"+i);
            $description.attr("id", "textarea"+i).text(temp);
        }
        else {
            $description.attr("id", "textarea"+i);
        }
        $newRow.append($description);

        $newRow.append($("<button>").addClass("saveBtn").text("💾").attr("id", "button"+i));

        // create and append a textarea row into a container
        $container.append($newRow);

        // Adding color coded timeblock to indicate the past, present, and future coloring
        // if (moment()) {
        //     $description.addClass("past");
        // } else if (moment().toDate()) {
        //     $description.addClass("present");
        // } else {
        //     $description.addClass("future");
        // }


    }

    // The button event listeners, and localStorage texts
    $('#button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(function(event){ 
        if($(event.target).attr('id') === 'button1'){
            let userInput = $.trim($("#textarea1").val());
            $("#textarea1").text(userInput);
            localStorage.setItem("textarea1", userInput);
        } 
        else if($(event.target).attr('id') ==='button2'){
            let userInput = $.trim($("#textarea2").val());
            $("#textarea2").text(userInput);
            localStorage.setItem("textarea2", userInput);
        } 
        else if($(event.target).attr('id') ==='button3'){
            let userInput = $.trim($("#textarea3").val());
            $("#textarea3").text(userInput);
            localStorage.setItem("textarea3", userInput);
        } 
        else if($(event.target).attr('id') ==='button4'){
            let userInput = $.trim($("#textarea4").val());
            $("#textarea4").text(userInput);
            localStorage.setItem("textarea4", userInput);
        } 
        else if($(event.target).attr('id') ==='button5'){
            let userInput = $.trim($("#textarea5").val());
            $("#textarea5").text(userInput);
            localStorage.setItem("textarea5", userInput);
        } 
        else if($(event.target).attr('id') ==='button6'){
            let userInput = $.trim($("#textarea6").val());
            $("#textarea6").text(userInput);
            localStorage.setItem("textarea6", userInput);
        } 
        else if($(event.target).attr('id') ==='button7'){
            let userInput = $.trim($("#textarea7").val());
            $("#textarea7").text(userInput);
            localStorage.setItem("textarea7", userInput);
        } 
        else if($(event.target).attr('id') ==='button8'){
            let userInput = $.trim($("#textarea8").val());
            $("#textarea8").text(userInput);
            localStorage.setItem("textarea8", userInput);
        } 
        else if($(event.target).attr('id') ==='button9'){
            let userInput = $.trim($("#textarea9").val());
            $("#textarea9").text(userInput);
            localStorage.setItem("textarea9", userInput);
        } 
    });
});