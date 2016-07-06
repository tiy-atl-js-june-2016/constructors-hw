function Dog (options) {
  var options = options || {};

  this.status = options.status || "normal";
  this.color = options.color || "black";
  this.hungry = (options.hungry !== undefined) ? options.hungry : true;
};

export {Dog};
