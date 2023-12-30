 function initRoblox() {
      const placeId = document.getElementById("placeid").value;
      if (placeId) {
        window.location.href = "roblox://placeId=" + placeId;
      } else {
        alert("Please enter a Place ID.");
      }
    }

 function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const content = document.getElementById('main-content');

      if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
      } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
      }
    }
    function closeSidebar() {
      const sidebar = document.getElementById('sidebar');
      const content = document.getElementById('main-content');

      sidebar.style.width = '0';
      content.style.marginLeft = '0';
    }

 function handleConsoleErrors(event) {
    var error = event.error;
    if (error) {
      alert('An error occurred: ' + error.message);
    }
  }

  // Listening for errors in the console
  window.addEventListener('error', handleConsoleErrors);
