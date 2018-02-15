<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APP</title>
    <link rel="stylesheet" href="css/app.css">
  </head>
  <body class="loggedin">
    
    <div class="top-bar">
      <div class="top-bar-left">
          <ul class="dropdown menu main-menu" data-dropdown-menu>
            <li id="ica"><a class="top-menu" href="/">APP</a></li>
           
          </ul>
      </div>
    </div>
    
    <div class="main">
      
      <div class="grid-x grid-padding-x align-center-middle text-center">
        
        <div class="cell small-4">
          
          <div class="callout">
            
            <h4>DEMO</h4>
            
            <br><br>
            
            <form id="create-template-form" data-abide>
              
                <label id="client-container" class="text-left">Pages
                  <select id="pages"></select>
                </label>
                
            </form>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
   <link href="css/app.css"></link>
   <script src="js/dist/app.min.js"></script>
   <script src="js/src/app/index.js"></script>
   <script src="bower_components/what-input/dist/what-input.js"></script>
   <script src="bower_components/foundation-sites/dist/js/foundation.js"></script>
   
   <!-- templates -->
    <script id="pagesTemplate" type="text/template">
        <option value="<%= uuid %>" data-nid="<%= id %>" class="title"><%= title %></option>
    </script>

    <!-- controllers -->
    <script>
      
        app.serviceController( "pages" , "#pages", "#pagesTemplate" );
        
    </script>
    
    
  </body>
</html>
