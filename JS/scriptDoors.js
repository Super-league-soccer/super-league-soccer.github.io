window.onload = function () {
            document.getElementById("gtk-gold-count").addEventListener("input", () => {
                ConvertToKnobs();
            })
        }

        function ConvertToKnobs() {
            var gold = document.getElementById("gtk-gold-count").value
            var goldPerKnob = 17;

            document.getElementById("gtk-knob-count").value = Math.round(gold / goldPerKnob);
        }

        function ConvertToKnobsVal(gold) {
            
            var goldPerKnob = 17;

            return Math.round(gold / goldPerKnob);
        }

        window.calculations = function () {
            var goldKnobs = ConvertToKnobsVal(document.getElementById("sc-gold-count").value);
            console.log(goldKnobs + " goldknob");
            var roomsPassed = document.getElementById("sc-room-count").value;
            console.log(roomsPassed + " room");

            var multiplier = 1 + parseInt(document.getElementById("sc-friend-count").value);
            if (document.getElementById("sc-boost-active").checked) {
                multiplier += 5;
            }
            console.log(document.getElementById("sc-boost-active").checked + " boost" + multiplier + " multi");
            var totalKnobs = (parseInt(goldKnobs) + parseInt(roomsPassed)) * multiplier;

            console.log(totalKnobs);

            document.getElementById("sc-knobs").innerHTML = totalKnobs.toString() + " knobs";
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
