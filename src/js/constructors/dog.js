function Dog (options) {
  options = options || {};
  this.status = "normal";
  this.color = options.color;
  // this.hungry = options.hungry;
  // if (this.hungry === undefined) {
  //   this.hungry = true;
  // }
  this.hungry = (options.hungry === undefined) ? true : options.hungry;
};

export {Dog};
