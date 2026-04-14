// Tab switching function - handles the navigation between different sections
function switchTab(btn, id) {
  // Remove active class from all buttons and panels first
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  // Add active to the clicked button and corresponding panel
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');

  // Smooth scroll to the card top - makes it feel nicer
  document.querySelector('.card').scrollIntoView({behavior:'smooth',block:'start'});
}