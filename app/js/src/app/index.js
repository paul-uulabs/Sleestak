
var app = {
  
  serviceController : function ( call , target_element, template_element, param = {}, callback=null, base_url="../app-api", format = ".json" ) {
      
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
    }
    
};
 

/**********************************************/
/* Initialization Routines */
/**********************************************/

jQuery(function() {
  
  jQuery(document).foundation();

});


