
const exploreNavItem = document.querySelector('.explore-nav-item');
const exploreItemsContainer = document.querySelector('.explore-items-container');

// Toggle visibility when clicking the nav item
exploreNavItem.addEventListener('click', (event) => {
    // Toggle the display of the container
    if (exploreItemsContainer.style.display === "flex") {
        exploreItemsContainer.style.display = "none";
    } else {
        exploreItemsContainer.style.display = "flex";
    }
});

// Hide the container when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = exploreItemsContainer.contains(event.target) || exploreNavItem.contains(event.target);

    // If the click is outside the container and the nav item, hide the container
    if (!isClickInside) {
        exploreItemsContainer.style.display = "none";
    }
});


// for mobile header toggle
$(document).ready(function(){
    $('.mobile-menu').click(function(){
        $('.header').toggleClass('show');
        $('body').toggleClass('no-scroll');
    });
  
    // Close the sidebar if clicking outside of it
    // $(document).click(function(event) {
    //     // Check if the click is outside the sidebar and the menu button
    //     if (!$(event.target).closest('.header, .mobile-menu').length) {
    //         if ($('.header').hasClass('show')) {
    //             $('.header').removeClass('show');
    //             $('body').removeClass('no-scroll');
    //         }
    //     }
    // });
  });

  


