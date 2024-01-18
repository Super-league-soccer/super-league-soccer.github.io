const outputDiv = document.getElementById('output');
const inputField = document.getElementById('input');

function handleCommand() {
  const commandLine = inputField.value.trim();
  const [command, ...args] = commandLine.split(' ');

  printToConsole(`<span style="color: #00ff00;">&gt; ${commandLine}</span>`);
  inputField.value = '';

  switch (command) {
    case 'help':
      console.log("Command 'Help' Executed");
      printToConsole('Available commands:');
      printToConsole('  help    - Display this help message');
      printToConsole('  echo    - Print a message');
      printToConsole('  clear   - Clear the console');
      printToConsole('  date    - Show the Date');
      printToConsole('  time    - Show the time');
      printToConsole('  exit    - Exit the Command Prompt')
      break;
    case 'echo':
      console.log("Command 'echo' Executed");
      const message = args.join(' ');
      printToConsole(message);
      break;
    case 'clear':
      console.log("Command 'clear' Executed");
      outputDiv.innerHTML = '';
      break;
    case 'time':
      console.log("Command 'time' Executed");
      const currentTime = new Date().toLocaleTimeString();
      printToConsole(`${currentTime}`);
      break;
    case 'date':
      console.log("Command 'date' Executed");
      const currentDate = new Date().toLocaleDateString();
      printToConsole(`${currentDate}`);
      break;
    case 'exit':
      window.close()
      break;
    case 'calc':
      console.log("Command 'calc' Executed");
      try {
      const result = eval(args.join(' '));
      printToConsole(`${result}`);
      } catch (error) {
      printToConsole('calc.dll encountered an error.');
      }
      break;
    default:
      console.log("Command Is Unknown");
      printToConsole(`${command} Is Unknown.`);
      break;
  }
}

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleCommand();
  }
});

inputField.focus();
