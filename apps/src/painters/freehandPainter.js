define(function(require){

  var defineComponent = require("flight/lib/component"),
      withFreehandPainter = require("painters/withFreehandPainter");

  return defineComponent(freehandPainter, withFreehandPainter);

  function freehandPainter(){

    this.after("initialize", function(){
      this.attachEventListeners();
    });

    this.attachEventListeners = function(){
      this.on("freehandPaintingRequested", function(e, data){
        this.startFreehandPainting();
      }.bind(this));
    };

    this.startFreehandPainting = function(){

    };
  }

});