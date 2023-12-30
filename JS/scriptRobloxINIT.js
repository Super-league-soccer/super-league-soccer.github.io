 function initRoblox() {
      const placeId = document.getElementById("placeid").value;
      if (placeId) {
        window.location.href = "roblox://placeId=" + placeId;
      } else {
        alert("enter smth plz.");
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
