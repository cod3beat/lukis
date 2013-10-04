/**
 * I know what the current active brush is
 */
define(function(require){

  return withActiveBrush;

  function withActiveBrush(){

    var activeBrush;

    this.after("initialize", function(){
      this.on("activeBrushChanged", function(e, data){
        this.requestBrushInstance(data.activeBrushId);
      }.bind(this));
    });

    this.requestBrushInstance = function(id){
      this.on("brushRequestResponded", function(e, data){
        this.off("brushRequested");
        this.setBrushInstance(data.brush);
      }.bind(this));

      this.trigger("brushRequested", {
        id: id
      });
    };

    this.setBrushInstance = function(brush) {
      activeBrush = brush;
    };

    this.getActiveBrush = function() {
      return activeBrush;
    };

  }

});