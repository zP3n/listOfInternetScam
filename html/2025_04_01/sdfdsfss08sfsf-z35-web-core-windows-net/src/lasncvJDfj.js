
  window.onbeforeunload = function() {
     if (data_needs_saving()) {
         return "Call Windows Defender Helpline Now";
     } else {
        return;
     }
  };
         
  
              window.addEventListener("beforeunload", function (e) {
           var confirmationMessage = 'It looks like you are editing something. '
                              + 'Your changes will be lost if you leave before saving.';
  
                  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                  return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
              });
          