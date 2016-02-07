// /app/upload.client.js
'use strict';


$(document).ready(function() {

  // Listen for file submission ------------------------------------------------
  $('#upload').ajaxForm({
    success : function (response) {
        alert("File size: " + response);
    }
  });

});


// EOF -------------------------------------------------------------------------
