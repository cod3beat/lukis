define(["require","utils/rectOutline","brushes/sprayBrush"],function(t){function e(t,e){var n=r.create(t),s=i(n,e.x,e.y,e.width,e.height),o=s.length;n.color=e.color||"#000000";for(var a=0;o>a;a++)n.addSprayChunk(s[a]);n.render(),n.onMouseUp()}var i=t("utils/rectOutline"),r=t("brushes/sprayBrush");return{create:function(t,i){if(!(i.x&&i.y&&i.width&&i.height))throw new Error("Required params not supplide");return e(t,i)}}});