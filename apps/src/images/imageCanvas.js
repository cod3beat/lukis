/**
 * This module knows how to add an image to canvas
 */
define(function(require){

  var defineComponent = require("flight/lib/component");

  return defineComponent(imageCanvas);

  function imageCanvas(){

    this.defaultAttrs({
      canvas: undefined,
    });

    this.after("initialize", function(){
      this.attachEventListeners();
    });

    this.attachEventListeners = function(){
      this.on("addingImageInitted", function(e, data){
        this.addImages(data.canvas, data.images, data.cfg);
      });

    };

    // TODO I believe this sucks so much
    this.addImages = function(canvas, images, cfg){
      this.attr.canvas = canvas;

      var reader = new FileReader();

      reader.onload = function(e){
        var img = new Image();

        img.onload = function(){
          var image = new fabric.Image(img);
          console.log(cfg);
          image.set({
            top: cfg.y + cfg.height / 2,
            left: cfg.x + cfg.width / 2,
            width: cfg.width,
            height: cfg.height
          });

          canvas.add(image).renderAll();

        };

        img.src = e.target.result;    
      };

      reader.readAsDataURL(images[0]);
    };
  }

});