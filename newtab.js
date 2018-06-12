// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("pushme").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
    var searchfor = document.getElementById("searchterm").value;
    alert('Searching for: ' + searchfor);
  /* ... */
}