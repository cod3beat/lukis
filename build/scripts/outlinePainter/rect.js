define(["require"],function(){return{canvas:void 0,isDrawing:!1,brushColor:"#000000",outline:void 0,init:function(t,e){e=e||{},this.canvas=t,this.brushColor=e.color||"#000000",this.canvas.selection=!1},onMouseDown:function(t){var e=this.canvas.getPointer(t.e);this.outline={x:e.x,y:e.y,width:1,height:1},this.isDrawing=!0},onMouseMove:function(t){if(this.isDrawing){var e=this.canvas.getPointer(t.e);this.outline.height=e.y-this.outline.y,this.outline.width=e.x-this.outline.x,this.renderOutline()}},onMouseUp:function(){this.isDrawing=!1,this.finish()},finish:function(){this.canvas.clearContext(this.canvas.contextTop),this.canvas.selection=!0},renderOutline:function(){var t=this.canvas.contextTop;t.save(),t.lineWidth=1,t.strokeStyle=this.brushColor,t.strokeRect(this.outline.x,this.outline.y,this.outline.width,this.outline.height),t.restore()}}});