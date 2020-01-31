// Gathered from index.html as reference
    // <header>
    // <p id="currentDay" class="lead"></p>
    // </header>
    // <div class="container">
    //   <!-- Timeblocks go here -->
    // </div>

// Gathered from style.css, and will be leveraged here.
    // textarea
    // .description
    // .time-block
    // .row
    // .hour
    // .past
    // .present
    // .future
    // .saveBtn
    // .saveBtn i:hover


// displaying today's Day, Month Date, Year in the header
let currentDate = new Date().toDateString();
$("#currentDay").text(currentDate);

// contents inside the <div class="container">
