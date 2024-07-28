// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-btn');
    const contentItems = document.querySelectorAll('.content-item');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
  
        // Get the filter value
        const filter = this.getAttribute('data-filter');
  
        // Show or hide content items
        contentItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // Show all items by default
    contentItems.forEach(item => {
      item.style.display = 'block';
    });
  });
  