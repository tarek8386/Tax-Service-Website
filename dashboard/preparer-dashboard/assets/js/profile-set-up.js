const nextButtons1 = document.querySelectorAll('.step-1-next-btn');
const nextButtons2 = document.querySelectorAll('.step-2-next-btn');
const step3btn = document.querySelector('.step-3-next-btn');

const step1 = document.getElementById('step-item-1');
const step2 = document.getElementById('step-item-2');
const step3 = document.getElementById('step-item-3');

nextButtons1.forEach(button => {
  button.addEventListener('click', function(event) {
    step1.style.display="none";
    step2.style.display="block";
  });
});

nextButtons2.forEach(button => {
  button.addEventListener('click', function(event) {
    step2.style.display="none";
    step3.style.display="block";
  });
});