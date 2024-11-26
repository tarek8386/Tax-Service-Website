
  const cardNames = document.querySelectorAll('.card-name');

  cardNames.forEach(card => {
    card.addEventListener('click', function() {
      // Hide all cardSelectSvg elements
      document.querySelectorAll('.cardSelectSvg').forEach(svg => svg.classList.add('d-none'));
      
      // Show the cardSelectSvg inside the clicked card
      this.querySelector('.cardSelectSvg').classList.remove('d-none');
    });
  });
