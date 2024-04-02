function toggleMenu() {
  let ul = document.querySelector('.navbar ul');
  ul.classList.toggle('active');
  let container = document.querySelector('.container');
  container.classList.toggle('content');
}


document.addEventListener("DOMContentLoaded", function() {
  // Get the current URL path
  const currentPath = window.location.pathname;
  
  // Select all navigation links
  const activeLinks = document.querySelectorAll(".activeNavLink");

  // Loop through each navigation link
  activeLinks.forEach(link => {
    // Get the href attribute value of the link
    const linkPath = link.getAttribute("href");

    // Check if the link's href matches the current URL path
    if (linkPath === currentPath) {
      // If it matches, add the activeNav class
      link.classList.add("activeNav");
    }
  });
});

// // Set container height based on description content
//   window.addEventListener('load', function() {
//     const container = document.querySelector('.myContainer');
//     const description = document.querySelector('.description');
//     const containerHeight = description.offsetHeight + 40; // Add 40px for padding
//     container.style.height = containerHeight + 'px';
//   });
