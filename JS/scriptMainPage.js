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
    function showContent() {
      var content = document.getElementById('content');
      var audio = document.getElementById('loopAudio');
      audio.play();
      content.style.display = 'block'; // Show the content
      document.getElementById('enterButton').style.display = 'none'; // Hide the button
    }
