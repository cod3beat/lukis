/**
 * This component manages the widget for colorpicker. After
 * initialization, it will add the colorpicker widget to the
 * dom that this component is attached to.
 */
define(
[
  "flight/component",
  "hbs!templates/colorpicker"
],

function(defineComponent, tmpl){
  return defineComponent(ColorPicker);

  function ColorPicker(){
    this.after("initialize", function(){
      this.$node.append(tmpl);

      var cp = this.$node.children("#color-picker"),
          me = this;

      cp.spectrum({
        clickoutFiresChange: true,
        showButtons: false,
        change: function(color){
          me.trigger(me.attr.canvasEl, "colorChanged", {
            color: color.toHexString()
          });
        }
      });
    });
  }
});