// Select A date


const dateSpans = document.querySelectorAll('.weeks span');

dateSpans.forEach((span) => {
span.addEventListener('click', () => {

dateSpans.forEach((span) => {
span.classList.remove('active');
});


span.classList.add('active');
});
});


// Preferred Time



var prevClickedBtn = null; 
  
function changeColor(btn) {
  if (prevClickedBtn !== null) {
	prevClickedBtn.classList.remove('clicked'); 
  }
  btn.classList.add('clicked'); 
  prevClickedBtn = btn;
}