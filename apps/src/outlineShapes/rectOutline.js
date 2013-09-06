/**
 * Draw a rectangular outline as the user is drawing on
 * top of the canvas
 */
define(function(require){

  function RectOutline(canvas, cfg){
    this.canvas = canvas;
    this.canvas.selection = false;
    this.canvas.defaultCursor = "crosshair";

    this.isDrawing = false;
    this.outline = undefined;

    cfg = cfg || {};
    cfg.fillColor = cfg.fillColor || "#000000";
    this.cfg = cfg;
  }

  RectOutline.prototype.set = function(key, value) {
    this.cfg[key] = value;
  };

  RectOutline.prototype.get = function(key) {
    return this.cfg[key];
  };

  RectOutline.prototype.onMouseDown = function(e) {
    this.canvas.selection = false;
    var point = this.canvas.getPointer(e.e);

    this.outline = {
      x: point.x,
      y: point.y,
      width: 1,
      height: 1
    };

    this.isDrawing = true;

    return this;
  };

  RectOutline.prototype.onMouseMove = function(e) {
    if (this.isDrawing) {
      var point = this.canvas.getPointer(e.e);

      this.outline.height = point.y - this.outline.y;
      this.outline.width = point.x - this.outline.x;

      this.renderOutline();
    }

    return this;
  };

  RectOutline.prototype.onMouseUp = function(e) {
    this.canvas.defaultCursor = "default";
    
    this.isDrawing = false;
    this.canvas.selection = true;
    this.finish();
    return this;
  };

  RectOutline.prototype.finish = function() {
    this.canvas.clearContext(this.canvas.contextTop);
    this.canvas.selection = true;
    return this;
  };

  RectOutline.prototype.renderOutline = function() {
    var ctx = this.canvas.contextTop;
    ctx.save();

    ctx.lineWidth = 1;
    ctx.strokeStyle = this.cfg.fillColor;
    ctx.strokeRect(this.outline.x, this.outline.y, this.outline.width, this.outline.height);

    ctx.restore();

    return this;
  };

  return RectOutline;
  
});