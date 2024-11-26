const bookedDates = [
    "2024-09-16",
  ];
  
  const calendarTitle = document.getElementById("calendar-title");
  const today = new Date();
  const formattedToday = today.toLocaleDateString('en-US', {
    weekday: 'short',    
    day: 'numeric',      
    month: 'short',      
    year: 'numeric'      
  });
  calendarTitle.textContent = formattedToday;
  
  // Initialize the easepick picker
  const picker = new easepick.create({
    element: document.getElementById("calendar-container"),
    css: ["./assets/css/plugins/easepick.css"],
    inline: true, // Display the calendar inline (always visible)
    calendars: 1,
    lang: "en-US",
    zIndex: 10,
    plugins: ["LockPlugin"],
    LockPlugin: {
    //   minDate: new Date(),
      filter: function (date) {
        return bookedDates.includes(date.format("YYYY-MM-DD"));
      },
    },
    singleDate: true,
  });
  
  document.getElementById("calendar-container").textContent = "";
  
  document.getElementById("calendar-container").style.display = "block";
  document.getElementById("calendar-container").style.padding = "0";
  
  picker.on("select", (e) => {
    picker.clear();
  });


  $(document).ready(function() {
    $('#chat-box-header').click(function() {
        $('#chat-box-content').slideToggle(300); // Slide the chat box content up/down
    });
});

  