document.querySelectorAll('.user-box').forEach(box => {
    box.addEventListener('click', function() {
        // Remove active class from all user boxes
        document.querySelectorAll('.user-box').forEach(item => {
            item.classList.remove('active-user-box');

            // Reset visibility of svg1 and svg2 for all other boxes
            const svg1 = item.querySelector('.svg1');
            const svg2 = item.querySelector('.svg2');
            if (svg1 && svg2) {
                svg1.style.display = 'block';  // Show svg1
                svg2.style.display = 'none';   // Hide svg2
            }
        });

        // Add active class to the clicked box
        this.classList.add('active-user-box');

        // Update the hidden input value with the clicked box's id
        document.getElementById('user-type').value = this.id;
        console.log(document.getElementById('user-type'));

        // Toggle visibility for the clicked box
        const svg1 = this.querySelector('.svg1');
        const svg2 = this.querySelector('.svg2');
        if (svg1 && svg2) {
            svg1.style.display = 'none';  // Hide svg1
            svg2.style.display = 'block'; // Show svg2
        }
    });
});
