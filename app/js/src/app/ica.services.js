/**********************************************/
/* Services Routines */
/**********************************************/
if (window.com === undefined) {com = {};}
if (com.ica === undefined) {com.ica = {};}

com.ica.constants = {
    service : "/ica-api",
    state : { uid: 0, name:"" },
    csrfToken: ""
}

com.ica.services = {
      
    session : function ( call ) {
      
            jQuery.ajax({
                url: com.ica.constants.service + "/"+ call +".json" 
              }).then(function(data) {
              
                if (data.uid == "0") {
                  window.top.location.href = "/user";
                } else {
                  com.ica.constants.uid = data.uid;
                  com.ica.constants.name = data.name;
                  
                  jQuery
                    .get( window.location.origin + '/rest/session/token')
                    .done(function (token) {
                      com.ica.constants.csrfToken = token;
                      jQuery("body").addClass("loggedin");
                      
                    });
                }
                
              });
            
    },
    
    serviceController : function ( call , target_element, template_element, param = {}, callback=null, base_url=com.ica.constants.service, format = ".json" ) {
      
              var Model = Backbone.Model.extend();
              
              var ModelList = Backbone.Collection.extend({
                  model: Model,
                  url: base_url + "/" + call + format
              });   
      
              var ModelView = Backbone.View.extend({
                  el: target_element,
                  template: _.template(jQuery(template_element).html()),
                  render: function() {
                      _.each(this.model.models, function(data){
                          var dataTemplate = this.template(data.toJSON());
                          jQuery(this.el).append(dataTemplate);
                      }, this);
      
                      return this;
                  }
              });
      
              var models = new ModelList();    
              var modelView = new ModelView({model: models});
              models.fetch({
                  data: param,
                  success: function(response) {
                    modelView.render();
                    if (callback!== null) {
                      callback(response);
                    }
                  }
              });
    },
    
    saveNode : function (data, nid=0, method="POST", callback=null) {
                jQuery("body").addClass("loading");
                
                jQuery.ajax({
                  url: window.location.origin + ((nid !== 0) ? "/node/" + nid : "/entity/node" ),
                  method:method,
                  data:JSON.stringify(data),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/hal+json',
                    'X-CSRF-Token': com.ica.constants.csrfToken
                  },
                  success: function( response, status, xhr ){
                    jQuery("body").removeClass("loading");
                    if (callback!== null) {
                      callback(response);
                    }
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      // report error
                      jQuery("body").removeClass("loading");
                      alert(errorThrown);
                      console.log(jqXHR, textStatus, errorThrown);
                      if (callback!== null) {
                        callback(false);
                      }
                  }
                });
      
    },
    
    loadNode : function( nid, callback ) {
                jQuery("body").addClass("loading");
                jQuery.ajax({
                  url: window.location.origin + "/" + nid +"?_format=hal_json",
                  method: "GET",
                  headers: {
                    "Content-Type": "application/hal+json"
                  },
                  success: function(data, status, xhr) {
                    jQuery("body").removeClass("loading");
                    callback(data);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                    // report error
                    jQuery("body").removeClass("loading");
                    alert(errorThrown);
                    callback(false);
                  }
                });
    },
    
    postCall : function (call,data,callback) {
                jQuery("body").addClass("loading");
                jQuery.ajax({
                  url:  com.ica.constants.service + "/" + call,
                  method:"POST",
                  data:JSON.stringify(data),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/hal+json',
                    'X-CSRF-Token': com.ica.constants.csrfToken
                  },
                  success: function( response, status, xhr ){
                    jQuery("body").removeClass("loading");
                    callback(response);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      // report error
                      jQuery("body").removeClass("loading");
                      alert(errorThrown);
                      callback(false);
                  }
                });
      
    },
    
    getParameterByName : function (name, url) {
                    if (!url) url = window.location.href;
                    name = name.replace(/[\[\]]/g, "\\$&");
                    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                        results = regex.exec(url);
                    if (!results) return null;
                    if (!results[2]) return '';
                    return decodeURIComponent(results[2].replace(/\+/g, " "));
                }
};
 

/**********************************************/
/* Initialization Routines */
/**********************************************/

jQuery(function() {
    com.ica.services.session("session");
});
