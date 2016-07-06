function Person (options) {
  options = options || {};
  this.cool = options.cool || false;
  this.pet = function (dog) {
    dog.cuteness = "100 emoji";
    dog.status = "happy";
  };
  this.feed = function (animal) {
    animal.hungry = false;
  };
};

export {Person};
