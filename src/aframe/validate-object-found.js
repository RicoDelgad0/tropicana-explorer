AFRAME.registerComponent("validate-object-found", {
  multiple: true,

  schema: {
    on: { type: "string", default: "click" },
  },

  init: function () {
    this.onEvent = this.onEvent.bind(this);
    this.el.addEventListener(this.data.on, this.onEvent);
  },

  onEvent: function () {
    console.log("Object found!");
  },

  update: function (oldData) {
    if (oldData.on != this.data.on) {
      this.el.removeEventListener(oldData.on, this.onEvent);
      this.el.addEventListener(this.data.on, this.onEvent);
    }
  },

  remove: function () {
    this.el.removeEventListener(this.data.on, this.onEvent);
  },
});
