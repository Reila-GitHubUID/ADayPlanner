    // <header>
    // <p id="currentDay" class="lead"></p>
    // </header>
    // <div class="container">
    //   <!-- Timeblocks go here -->
    // </div>


    // displaying today's Day, Month Date, Year in the header
    let currentDate = new Date().toDateString();
    $("#currentDay").text(currentDate);