    function addStylesheets(stylesheets) {
      stylesheets.forEach(function(href) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        document.head.appendChild(link);
      });
    }

    var stylesheetsArray = [
      'CommandPrompt/BootStrap/cssbody.css',
      'CommandPrompt/BootStrap/cssinput.css',
      'CommandPrompt/BootStrap/cssoutput.css',
      'CommandPrompt/BootStrap/cssmetaprops.css'
    ];

    addStylesheets(stylesheetsArray);