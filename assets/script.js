// initialization
let currentTime = moment(moment().format("HH:mm"), "HH:mm");
let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let $container = $(".container");
let $description = null;

$(document).ready(function () {
    // displaying today's Day, Month Date, Year in the header using Moment.js
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY' + " @ " + 'HH:mm:ss'));

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

        $description = $("<textarea>").addClass("description");
        // $description.addClass("present");  // Note to EL: this is only temporary
        if (localStorage.getItem("textarea"+i) != null) {
            var temp = localStorage.getItem("textarea"+i);
            $description.attr("id", "textarea"+i).text(temp);
        }
        else {
            $description.attr("id", "textarea"+i);
        }
        $newRow.append($description);

        $newRow.append($("<button>").addClass("saveBtn").text("💾").attr("id", "button"+i));
        $newRow.append($("<button>").addClass("deleteBtn").text("❌").attr("id", "delete"+i));

        // create and append a textarea row into a container
        $container.append($newRow);

        // Adding color coded timeblock to indicate the past, present, and future coloring
        let parsedTime = moment((workHours[i-1]), "hA");
        console.log("parsedTime =" + parsedTime.toDate());
        console.log("currentTime="+currentTime.toDate());
        
        if (currentTime.isAfter(parsedTime)) {
            $description.addClass("future");
        }
        else if (currentTime.isBefore(parsedTime) ){
            $description.addClass("past");
        }
        else {

        }
    }
        
        
    if (currentTime) {
        $description.addClass("present");
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


    $('#delete1, #delete2, #delete3, #delete4, #delete5, #delete6, #delete7, #delete8, #delete9').click(function(event){ 
        if($(event.target).attr('id') === 'delete1'){
            $("#textarea1").text("");
            localStorage.setItem("textarea1", "");
        } 
        else if($(event.target).attr('id') ==='delete2'){
            $("#textarea2").text("");
            localStorage.setItem("textarea2", "");
        } 
        else if($(event.target).attr('id') ==='delete3'){
            $("#textarea3").text("");
            localStorage.setItem("textarea3", "");
        } 
        else if($(event.target).attr('id') ==='delete4'){
            $("#textarea4").text("");
            localStorage.setItem("textarea4", "");
        } 
        else if($(event.target).attr('id') ==='delete5'){
            $("#textarea5").text("");
            localStorage.setItem("textarea5", "");
        } 
        else if($(event.target).attr('id') ==='delete6'){
            $("#textarea6").text("");
            localStorage.setItem("textarea6", "");
        } 
        else if($(event.target).attr('id') ==='delete7'){
            $("#textarea7").text("");
            localStorage.setItem("textarea7", "");
        } 
        else if($(event.target).attr('id') ==='delete8'){
            $("#textarea8").text("");
            localStorage.setItem("textarea8", "");
        } 
        else if($(event.target).attr('id') ==='delete9'){
            $("#textarea9").text("");
            localStorage.setItem("textarea9", "");
        } 
    });

});