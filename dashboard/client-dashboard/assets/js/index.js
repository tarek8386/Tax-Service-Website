// notifications toggle
document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.querySelector('.notification-icon');
    const modalContainer = document.querySelector('.notification-list-container');

    openModalButton.addEventListener('click', function () {
        console.log('working');
        modalContainer.classList.toggle('open');
    });

    // Close modal if clicked outside of it
    document.addEventListener('click', function (event) {
        if (!modalContainer.contains(event.target) &&
            !openModalButton.contains(event.target)) {
            modalContainer.classList.remove('open');

        }
    });
});

// for user account modal toggle
document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('user-account-profile-btn');
    const modalContainer = document.getElementById('user-account-modal');

    openModalButton.addEventListener('click', function (event) {
        modalContainer.classList.toggle('open');
    });

    // Close modal if clicked outside of it
    document.addEventListener('click', function (event) {
        if (!modalContainer.contains(event.target) &&
            !openModalButton.contains(event.target)) {
            modalContainer.classList.remove('open');
        }
    });
});


$(document).ready(function(){
    $('.mobile-menu').click(function(){
        $('.sidebar').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
  
    // Close the sidebar if clicking outside of it
    $(document).click(function(event) {
        // Check if the click is outside the sidebar and the menu button
        if (!$(event.target).closest('.sidebar, .mobile-menu').length) {
            if ($('.sidebar').hasClass('active')) {
                $('.sidebar').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        }
    });
  });