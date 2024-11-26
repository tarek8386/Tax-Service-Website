const bookedDates = [
    '2024-09-06',
    '2024-09-24',
    '2024-09-13',
];

const today = new Date();

const formattedToday = today.toLocaleDateString('en-US', {
  weekday: 'short',    
  day: 'numeric',      
  month: 'short',      
  year: 'numeric'      
});

// Set the default textContent of the calendar container
document.getElementById('calendar-container').textContent = formattedToday;

// Initialize the easepick picker
const picker = new easepick.create({
  element: document.getElementById('calendar-container'),
  css: [
    '../../assets/css/plugins/easepick.css',
  ],
  inline: true,
  calendars: 1,
  lang: 'en-US',
  zIndex: 10,
  plugins: ['LockPlugin'],
  LockPlugin: {
    minDate: new Date(),
    filter: function(date) {
      return bookedDates.includes(date.format('YYYY-MM-DD'));
    }
  },
  singleDate: true,
});

// Event listener for date selection
picker.on("select", (e) => {
  const selectedDate = e.detail.date;

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'short',    
    day: 'numeric',      
    month: 'short',      
    year: 'numeric'      
  });

  
  document.getElementById('calendar-container').textContent = formattedDate;

  console.log(selectedDate);
});

